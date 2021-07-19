import React, { useState } from "react";
import {StatusBar, KeyboardAvoidingView} from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
    flex:1 ;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 30px;
`;

export default ({route: { params }}) => {
    const [email, setEmail] = useState(params?.email);
    const [password, setPassword] = useState(params?.password);
    const isFormValid = () => {
        if(email === "" || password === ""){
            alert("All fields are required.");
            return false;
        }
        if(!isEmail(email)){
            alert("Email is invalid")
            return false;
        }
    }
    const handleSubmit = () => {
        if(!isFormValid()) {
            return;
        }
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