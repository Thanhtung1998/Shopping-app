import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userApi from "../../../api/userApi";

import { IUserState } from '../type/Usertype'
import firebase from 'firebase'

export const getMe = createAsyncThunk('user/getMe', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const currentUser = await userApi.getMe();
    localStorage.setItem('user-token', JSON.stringify(currentUser))
    return currentUser;
});

const Logout = () => {
    firebase.auth().signOut().then(function () {
        console.log("Successfully SignOut!")
    }).catch(function () {
        console.log("Failed SignOut!")
    })
}


export interface LoginPayload {
    email: string,
    password: string,
}

export interface UserState {
    user: any,
    isFetching: boolean,
    error: boolean
}

const initialState: UserState = {
    user: JSON.parse(localStorage.getItem("user-token")!) || null,
    isFetching: false,
    error: false,
}

const UserSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart(state, action: PayloadAction<LoginPayload>) {
            state.user = null;
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess(state, action: PayloadAction<any>) {
            state.user = action.payload;
            localStorage.setItem('user-token', JSON.stringify(action.payload));
            state.isFetching = true;
            state.error = false;
            console.log(action.payload);

        },
        loginFailed(state, action: PayloadAction<any>) {
            state.user = null;
            state.isFetching = false;
            state.error = true;
        },

        logout(state) {
            state.user = null;
            localStorage.setItem('user-token', JSON.stringify(null))
            Logout();
            state.isFetching = false;
            state.user = null;
        }

    },

    extraReducers: (login) => {
        login
            .addCase(getMe.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(getMe.rejected, (state) => {
                state.isFetching = false;
                state.error = true;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.user = action.payload;
            })

    }
})


// Actions
export const authActions = UserSlice.actions;

// Selector
export const selectIsFetching = (state: any) => state.auth.isFetching;

// Reducers
export const authReducer = UserSlice.reducer;

// LOGIN_START: (state, action) => {
//     const user = {
//         user: null,
//         isFetching: true,
//         error: false,
//     };
//     Object.assign(state, user)
// },
//     LOGIN_SUCCESS: (state, action) => {
//         const user = {
//             user: action.payload,
//             isFetching: true,
//             error: false,
//         };
//         Object.assign(state, user);
//     }