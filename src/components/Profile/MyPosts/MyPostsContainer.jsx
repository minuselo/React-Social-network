import React from 'react';
import {AddPostActionCreator, UpdateTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





const mapStateToProps=(state)=>{
	return{
		NewPostText: state.profilePage.NewPostText,
		Posts:state.profilePage.Posts
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		addPost: () => {
			dispatch(AddPostActionCreator());
		},
		textChange:(NewText)=>{
			dispatch(UpdateTextActionCreator(NewText));
		}
	}
}


const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;