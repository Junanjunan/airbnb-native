import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
    name: "users",
    initialState: {
        isLoggedIn: false,
        token: null
    },
    reducers: {
        logIn(state, action){
            state.isLoggedIn = true;
            state.token = action.payload.token;
        },
        logOut(state, action){
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});

export const {logIn, logOut} = userSlice.actions;

export const userLogin = form => async dispatch => {
    try{
        const { 
            data: { id, token } 
        }= await api.login(form);
        if (id && token) {
            dispatch(logIn({ token }));     // isLoggedIn을 true로 해주고, token을 저장해줄것이다. 이제 SignIn을 하면, render를 잘해주는지 확인. 어떻게? components/Gate.js에 설정해준 isLoggedIn이 잘 작동해서 LogOut 화면으로 바뀌면 됨
        }
    } catch(e){
        alert(e);            // 강의에서는 alert("Wrong user/password") 나는 구체적인 오류를 보기 위해 alert(e)
    }
}


export default userSlice.reducer;
