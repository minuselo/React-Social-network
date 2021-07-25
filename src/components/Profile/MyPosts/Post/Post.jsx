import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return <div className={s.post}>
		<div className={s.postAuthorImage}></div>
		{props.postTxt}
		<div>Количество лайков : {props.likeCount} </div>
	</div>
}

export default Post;