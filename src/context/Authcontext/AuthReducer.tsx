const AuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: true,
                error: false,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            }
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            }
        default:
            return { ...state };
    }

}

export default AuthReducer;