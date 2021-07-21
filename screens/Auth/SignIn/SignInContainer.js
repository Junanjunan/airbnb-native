import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/usersSlice";
import utils from "../../../utils";
import SignInPresenter from "./SignInPresenter";


export default ({route: { params }}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(params?.email);
    const [password, setPassword] = useState(params?.password);
    const isFormValid = () => {
        if(email === "" || password === ""){
            alert("All fields are required.");
            return false;
        }
        if(!utils.isEmail(email)){
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
    return <SignInPresenter />
};