import {Api} from "../API/api";

const TOGGLE_FRIEND = 'TOGGLE-FRIEND';
const ADD_FRIENDS = 'Add-Friends';
const SET_FRIENDS_COUNT = 'Set-Friends-Count';
const SET_PAGE_NUMBER = 'Set-Page-Number';
const IS_DATA_LOADING = 'Is-Data-Loading';
const IS_FOLLOWING_FETCHING = 'IS_FOLLOWING_FETCHING';


let initialState = {
    Friends: [],
    pageSize: 10,
    pageNumber: 1,
    count: 0,
    isLoading: false,
    followIsFetching: []
}


const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FRIEND: {
            return {
                ...state,
                Friends: state.Friends.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: !el.followed};
                    }
                    return el;
                })
            }
        }
        case ADD_FRIENDS: {
            return {
                ...state,
                Friends: action.Friends
            }
        }
        case SET_FRIENDS_COUNT: {
            return {
                ...state,
                count: action.count
            }
        }
        case SET_PAGE_NUMBER: {
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        }
        case IS_DATA_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case IS_FOLLOWING_FETCHING: {
            return {
                ...state,
                followIsFetching: action.isFetching ? [...state.followIsFetching, action.userId] : state.followIsFetching.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const ToggleFriend = (userId) => ({
    type: TOGGLE_FRIEND,
    userId
})
export const AddFriends = (Friends) => ({
    type: ADD_FRIENDS,
    Friends
})
export const SetFriendsCount = (count) => ({
    type: SET_FRIENDS_COUNT,
    count
})
export const SetPageNumber = (pageNumber) => ({
    type: SET_PAGE_NUMBER,
    pageNumber
})
export const isLoadingData = (isLoading) => ({
    type: IS_DATA_LOADING,
    isLoading
})
export const isFetchingFollow = (isFetching, userId) => ({
    type: IS_FOLLOWING_FETCHING,
    isFetching,
    userId
})


export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(SetPageNumber(pageNumber));
        dispatch(isLoadingData(true));
        Api.getUser(pageNumber, pageSize).then(data => {
            dispatch(isLoadingData(false));
            dispatch(AddFriends(data.items));
            dispatch(SetFriendsCount(data.totalCount));
        });
    }
}


export const followDeleteFriend = (userID) => {
    return (dispatch)=>{
        dispatch(isFetchingFollow(true,userID));
        Api.followDelete(userID).then(data => {
            if (data.resultCode == 0) {
                dispatch(ToggleFriend(userID));
            }
            dispatch(isFetchingFollow(false, userID));
        });
    }
}

export const followPostFriend = (userID) => {
    return (dispatch)=>{
        dispatch(isFetchingFollow(true,userID));
        Api.followPost(userID).then(data => {
            if (data.resultCode == 0) {
                dispatch(ToggleFriend(userID));
            }
            dispatch(isFetchingFollow(false, userID));
        });
    }
}

export default friendsReducer;