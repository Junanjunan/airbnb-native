import React, { useState } from "react";
import {StatusBar, KeyboardAvoidingView} from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { userLogin } from "../../redux/usersSlice";
import { isEmail } from "../../utils";

const Container = styled.View`
    flex:1 ;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 30px;
`;

export default ({route: { params }}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(params?.email);
    const [password, setPassword] = useState(params?.password);
    const isFormValid = () => {
        if(email === "" || password === ""){
            alert("All fields are required.");
            return false;
        }
        if(!isEmail(email)){
            alert("Email is invalid");
            return false;
        }
        return true;
    };
    const handleSubmit = () => {            // 여기서 dispatch login을 해야한다 문제는 api의 login이랑 naming이 겹친다?? 어쨌든  api.js에서 바로 export 해주기 보다 api.js 에서 object로 만들자
        if(!isFormValid()) {
            return;
        }
        dispatch(
            userLogin({
                username: email,                    // django에서 username, password 필요
                password
            })
        );
    };
    return(
        <DismissKeyboard>
            <Container>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='position'>
                <InputContainer>
                    <Input 
                        value={email} 
                        placeholder="E-mail" 
                        keyboardType="email-address"
                        stateFn={setEmail}
                    />
                    <Input 
                        value={password} 
                        placeholder="Password" 
                        stateFn={setPassword}    
                    />
                </InputContainer>
                <Btn text={"Sign In"} accent onPress={handleSubmit} />
                </KeyboardAvoidingView>
            </Container>
        </DismissKeyboard>
    );
};