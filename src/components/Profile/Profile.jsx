import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {
    return <section className={s.content}>
        <ProfileInfo/>
        <MyPosts PostsElements={props.PostsElements}/>
    </section>
}

export default Profile;