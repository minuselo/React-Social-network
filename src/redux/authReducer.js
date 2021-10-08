import {Api, ApiLogin} from "../API/api";

let SET_USER_LOGIN_DATA = 'SET-USER-LOGIN-DATA';
let SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isErrored: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_LOGIN_ERROR: {
            return {
                ...state,
                isErrored: action.error
            }
        }
        default:
            return state;
    }
}

export const SetUserLoginData = (id, email, login, isAuth) => (
    {
        type: SET_USER_LOGIN_DATA,
        data: {id, email, login, isAuth}
    });

export const SetUserLoginError = (error) => ({
    type: SET_LOGIN_ERROR,
    error
});


export const authenticationUser = () => {
    return (dispatch) => {
        Api.authRequest().then(data => {
            if (data.resultCode === 0) {
                dispatch(SetUserLoginData(data.data.id, data.data.email,
                    data.data.login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        ApiLogin.loginUser(email, password, rememberMe).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(authenticationUser());
                    dispatch(SetUserLoginError(false));
                } else {
                    dispatch(SetUserLoginError(true));
                }
            }
        )
    }
}

export const logout = () => {
    return (dispatch) => {
        ApiLogin.unloginUser().then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetUserLoginData(null, null, null, false));
                }
            }
        )
    }
}

export default authReducer;