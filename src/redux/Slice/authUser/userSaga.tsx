import { fork, take, call, put, delay, all } from 'redux-saga/effects'
import { authActions, LoginPayload } from "./userSlice";
import { PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { useHistory } from "react-router-dom"

const Api = process.env.REACT_APP_API_URL

function* handelLogin(payload: LoginPayload) {

    console.log("handelLogin");

    try {
        const user: AxiosResponse = yield call(axios.post, /*${Api}*/`user/login`, payload);
        console.log(user.status);
        yield put(authActions.loginSuccess(user.data));
    } catch (err: any) {

        localStorage.removeItem('user-token');
        yield put(authActions.loginFailed(err.message));

    }
}

function* handelLogout() {
    // yield delay(1000);
    console.log('Handel Logout')
    // localStorage.setItem('user-token', JSON.stringify(null))
    yield put(authActions.logout());
    // yield delay(1000);
    // localStorage.removeItem('user-token');
    // redireact to home page
}

function* watchLoginFlow() {
    while (true) {


        const isFetchingIn = (localStorage.getItem('user-token'));

        const data = JSON.parse(isFetchingIn!);


        // console.log(data);

        if (!data) {
            console.log("Listening for login flow")
            const action: PayloadAction<LoginPayload> = yield take(authActions.loginStart.type);
            yield call(handelLogin, action.payload);
        }


        // đứng đợi action
        if (data) {
            console.log("Listening for logout flow")
            yield take(authActions.logout.type);
            yield fork(handelLogout);
        }

    }
    // vòng lặp lắng nghe
}


export function* userSaga() {

    // Fork model redux-saga  

    // Có 2 dạng fork và spawn (nonblocking)

    // fork attached forks (đính kèm) -- kiểu phụ thuộc 

    // Một hàm chỉ được gọi là hoàn thành khi fork hoàn thành

    // Lưu ý ko thể catch error ở fork task được

    // spawn detached forks (không đính kèm)

    yield fork(watchLoginFlow);



}