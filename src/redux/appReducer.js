import {Api, ApiLogin} from "../API/api";
import {authenticationUser} from "./authReducer";

const SET_INITIALIZED_STATUS = 'SET_INITIALIZED_STATUS';


let initialState = {
    isInitialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_STATUS: {
            return {
                ...state,
                isInitialized: true
            }
        }
        default:
            return state;
    }
}

export const SetInitializedStatus = () => ({
    type: SET_INITIALIZED_STATUS
});


export const SetInitializedSucess = () => {
    return (dispatch) => {
        let promise = dispatch(authenticationUser());
        promise.then(()=>{
            dispatch(SetInitializedStatus());
        });
    }
};


export default appReducer;