import React from 'react';
import {AddPostActionCreator} from "../../../redux/profileReducer";
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
		addPost: (values) => {
			dispatch(AddPostActionCreator(values));
		}
	}
}


const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;