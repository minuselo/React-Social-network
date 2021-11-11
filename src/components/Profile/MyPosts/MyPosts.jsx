import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";


let validate = (props) => {
}

const NewPostTxtForm=(props)=>{
    return(
		<Form
			onSubmit={props.addNewPost}
			validate={validate}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Field name="newPostTxt" component="textarea" placeholder="Напишите ваш комментарий" cols="30" rows="10"/>
					<button type="submit">Добавить</button>
				</form>
			)}
		/>
	);
}





const MyPosts = React.memo((props) => {
	let PostsElements= props.Posts.map(el=>< Post postTxt={el.text} likeCount={el.likeCount} />)

	let addNewPost=(values)=>{
	props.addPost(values.newPostTxt);
	}



	return <div className={s.posts}>
		<h3>Записи</h3>
		<div className={s.newPost}>
            <NewPostTxtForm addNewPost={addNewPost} />
		</div>
		{PostsElements}
	</div>
})

export default MyPosts;