import React, { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";
import { createAccount } from "../../api";

const Container = styled.View`
    flex:1 ;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 30px;
`;

export default ({navigation: { navigate } }) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const isFormValid = () =>{
        if(
            firstName === "" || 
            lastName === "" || 
            email === "" || 
            password === ""
            ) {
            alert("All fields are required.");
            return false;
        }
        if (!isEmail(email)){
            alert("Please add a valid email.");
            return false;
        }
        return true;
    };
    const handleSubmit = async () => {
        if (!isFormValid()){
            return;
        };
        setLoading(true);
        try {
            const { status } = await createAccount({
                first_name: firstName,              // first_name -> (airbnb-api/users/serializers.py의 UserSerializer의 이름 형식을 그대로 가져온 것)
                last_name: lastName,
                email,
                username: email,
                password
            });
            if(status === 201){
                alert("Account created. Sign in please.");
                navigate("SignIn", { email, password });        // SignIn에 email, passwod를 보내자
            }
            // go to Sign In
        } catch(e){
            alert(e);
        } finally {
            setLoading(false);
        }
    };
    const dismissKeyboard = () => Keyboard.dismiss();
    return(
            <DismissKeyboard>
                <Container>
                    <StatusBar barStyle="light-content" />
                        <KeyboardAvoidingView>
                        <InputContainer>
                            <Input 
                                value={firstName} 
                                placeholder="First name" 
                                autoCapitalize="words" 
                                stateFn={setFirstname}
                            />
                            <Input 
                                value={lastName} 
                                placeholder="Last name" 
                                autoCapitalize="words" 
                                stateFn={setLastname}
                            />
                            <Input
                                keyboardType={"email-address"}
                                value={email} 
                                placeholder="E-mail" 
                                autoCapitalize="none" 
                                stateFn={setEmail}
                            />
                            <Input 
                                value={password} 
                                placeholder="Password" 
                                stateFn={setPassword}    
                            />
                        </InputContainer>
                        <Btn loading={loading} text={"Sign Up"} accent onPress={handleSubmit} />
                        </KeyboardAvoidingView>
                </Container>
            </DismissKeyboard>
    );
};