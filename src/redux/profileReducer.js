import * as axios from "axios";
import {ApiProfile} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET_STATUS';




let initialState = {
    Posts: [
        {id: 0, text: "Пост под номером один", likeCount: 5},
        {id: 1, text: "Пост про что-то там", likeCount: 14},
        {id: 2, text: "Пост про ыыыыы", likeCount: 165}
    ],
    Profile:null,
    status:''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                Posts:[...state.Posts,{
                    id: 5,
                    text: action.values,
                    likeCount: 0
                }]
            };
        }
        case SET_PROFILE:{
            return {
                ...state,
                Profile: action.profile
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const AddPostActionCreator = (values) => ({
    type: ADD_POST,
    values
})


export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
})
export const setStatus=(status)=>({
    type:SET_STATUS,
    status
})





export const ProfileSet=(userIdParam,userDefaultId)=>{
    return (dispatch)=>{
        let userId=userIdParam;
        if (!userId){
            userId=userDefaultId;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            dispatch(setProfile(response.data));
        });
    }
}

export const getStatus=(userIdParam,userDefaultId)=>{
    return (dispatch)=>{
        let userId=userIdParam;
        if (!userId){
            userId=userDefaultId;
        }
    ApiProfile.getStatus(userId).then(response=>{
        dispatch(setStatus(response.data));
    });
    }
}
export const updateStatus=(status)=>{
    return (dispatch)=>{
    ApiProfile.updateStatus(status).then(
      response=>{
          if (response.data.resultCode===0){
              dispatch(setStatus(status));
          }
      }
    );
    }
}

export default profileReducer;