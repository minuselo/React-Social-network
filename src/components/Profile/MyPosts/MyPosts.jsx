import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostActionCreator, UpdateTextActionCreator} from "../../../redux/profileReducer";






const MyPosts = (props) => {
debugger;
	let PostsElements= props.Posts.map(el=>< Post postTxt={el.text} likeCount={el.likeCount} />)
	let newPostTxt=React.createRef();

	let addNewPost=()=>{
	props.dispatch(AddPostActionCreator());
	}

	let TextChange=()=>{
	let NewText=newPostTxt.current.value;
	props.dispatch(UpdateTextActionCreator(NewText));
	}

	return <div className={s.posts}>
		<h3>Записи</h3>
		<div className={s.newPost}>
			<textarea onChange={TextChange} value={props.NewPostText} ref={newPostTxt} name="" id="" cols="30" rows="10" placeholder="Напишите ваш комментарий"/>
			<button onClick={addNewPost}>Добавить</button>
		</div>
		{PostsElements}
	</div>
}

export default MyPosts;