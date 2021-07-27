import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";






const MyPosts = (props) => {

	let PostsElements= props.Posts.map(el=>< Post postTxt={el.text} likeCount={el.likeCount} />)
	let newPostTxt=React.createRef();
	let addNewPost=()=>{
	let newPostValue=newPostTxt.current.value;
	props.addPost(newPostValue);
	}

	return <div className={s.posts}>
		<h3>Записи</h3>
		<div className={s.newPost}>
			<textarea ref={newPostTxt} name="" id="" cols="30" rows="10" placeholder="Напишите ваш комментарий"></textarea>
			<button onClick={addNewPost}>Добавить</button>
		</div>
		{PostsElements}
	</div>
}

export default MyPosts;