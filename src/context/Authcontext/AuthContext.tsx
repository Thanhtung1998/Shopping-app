import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";
// import { createStore, } from 'redux'

type INITIALSTATE = {
    user: any,
    isFetching: boolean,
    error: boolean,
}

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")!) || null,
    isFetching: false,
    error: false,
};



export const AuthContext = createContext<{ state: INITIALSTATE, dispatch: React.Dispatch<any> }>(
    {
        state: INITIAL_STATE,
        dispatch: () => null
    });

export const AuthContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // let store = createStore(AuthReducer)

    // // console.log(store);

    // store.subscribe(() => console.log(store.getState()));

    // store

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
