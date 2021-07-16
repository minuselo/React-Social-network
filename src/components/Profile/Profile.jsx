import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return <section className={s.content}>
		<div className={s.contentImage}><img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" /></div>
		<div className="content__profile"></div>
		<div>
			ava+ description
		</div>
		<MyPosts />
	</section>
}

export default Profile;