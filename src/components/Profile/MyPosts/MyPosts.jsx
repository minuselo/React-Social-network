import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return <div>
		My posts
		<div>
			new posts
		</div>
		< Post postTxt="Пост под номером один" likeCount="5" />
		< Post postTxt="Пост про что-то там" likeCount="14" />
		< Post postTxt="Пост про ыыыыы" likeCount="168" />

	</div>
}

export default MyPosts;