import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { BlurView } from 'expo-blur';
import Btn from "../components/Auth/Btn";

const LOGO_URL = "https://blog.kakaocdn.net/dn/95jT7/btqQCAwEbDf/m30lmOx9xg7fKaPzQsFfJ1/img.jpg"

const Container = styled.View`
    flex: 1;
`;

const Image = styled.Image`
    position: absolute;
    z-index:-1;
    top: 0;
`;

const Logo = styled.Image` 
    width: 100px;           
    height: 100px;
`;

const BtnContainer = styled.View``;

export default ({ navigation }) => {
    const goToSignUp = () => navigation.navigate("SignUp");
    const goToSignIn = () => navigation.navigate("SignIn");
    return(
        <Container>
            <BlurView
                intensity={10}
                tint="light"
                style={{
                    flex: 1,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Logo source={{uri:LOGO_URL}} />
                <BtnContainer>
                    <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
                    <Btn onPress={goToSignIn} text={"Sign In"} />
                </BtnContainer>
            </BlurView>
            <Image source={require("../assets/loginBg.jpg")} />
            <StatusBar barStyle="light-content" />
        </Container>
    );
};