import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { BlurView } from 'expo-blur';

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

export default ({ navigation }) => {
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
            </BlurView>
            <Image source={require("../assets/loginBg.jpg")} />
            <StatusBar barStyle="light-content" />
        </Container>
    );
};