import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {AddFriendsAC, ToggleFriendAC} from "../../redux/friendsReducer";

const mapStateToProps= (state)=>{
    return {
        Friends:state.friendsPage.Friends
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        ToggleFriend:(userId)=>{
            dispatch(ToggleFriendAC(userId));
        },
        AddFriends:(Friends)=>{
            dispatch(AddFriendsAC(Friends))
        }
    }
}


const FriendsContainer=connect(mapStateToProps,mapDispatchToProps)(Friends);

export default FriendsContainer;