import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import utils from "../../utils";


const Container = styled.View`
    padding-left:20px;
`

export default () => <Container><Ionicons 
name={utils.isAndroid() ? "md-arrow-back-circle": "md-arrow-back"}
size={28} 
/></Container>