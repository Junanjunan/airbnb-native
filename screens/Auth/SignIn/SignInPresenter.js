import React, { useState } from "react";
import {StatusBar, KeyboardAvoidingView} from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";


const Container = styled.View`
    flex:1 ;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 30px;
`;

export default ({ email, setEmail, password, setPassword, handleSubmit }) => {
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