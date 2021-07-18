import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types"
import colors from "../../colors";



const { width } = Dimensions.get("screen")      

const Container = styled.TextInput`
    width: ${width/2}px;
    padding: 12.5px 10px;
    border: 1px solid ${colors.black};
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const Input = ({value, placeholder, isPassword=false, autoCapitalize, stateFn}) => (
    <Container 
        value={value} 
        placeholder={placeholder} 
        secureTextEntry={isPassword ? true: false} 
        autoCapitalize={autoCapitalize}
        onChangeText = {(text) => stateFn(text)}
    />
);

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    stateFn: PropTypes.func.isRequired
}

export default Input;