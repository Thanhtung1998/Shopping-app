import axios from 'axios'
import { loginFailure, loginStart, loginSuccess } from './AuthActions'

export const login = async (user: any, dispatch: any) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/user/login", user);
        dispatch(loginSuccess(res.data))
        // 
    } catch (err) {
        dispatch(loginFailure())
    }
}

