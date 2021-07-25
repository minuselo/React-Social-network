import React from 'react';
import s from './MyPosts.module.css';






const MyPosts = (props) => {
	return <div className={s.posts}>
		<h3>Записи</h3>
		<div className={s.newPost}>
			<textarea name="" id="" cols="30" rows="10" placeholder="Напишите ваш комментарий"></textarea>
			<button>Добавить</button>
		</div>
		{props.PostsElements}
	</div>
}

export default MyPosts;