import React, { useState } from "react";
import {StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";
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

export default () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => alert(`${username}${password}`);
    const dismissKeyboard = () => Keyboard.dismiss();
    return(
            <DismissKeyboard>
                <Container>
                    <StatusBar barStyle="light-content" />
                        <KeyboardAvoidingView>
                        <InputContainer>
                            <Input 
                                value={firstname} 
                                placeholder="First name" 
                                autoCapitalize="none" 
                                stateFn={setFirstname}
                            />
                            <Input 
                                value={lastname} 
                                placeholder="Last name" 
                                autoCapitalize="none" 
                                stateFn={setLastname}
                            />
                            <Input 
                                value={username} 
                                placeholder="Username" 
                                autoCapitalize="none" 
                                stateFn={setUsername}
                            />
                            <Input 
                                value={password} 
                                placeholder="Password" 
                                stateFn={setPassword}    
                            />
                        </InputContainer>
                        <Btn text={"Sign Up"} accent onPress={handleSubmit} />
                        </KeyboardAvoidingView>
                </Container>
            </DismissKeyboard>
    );
};