import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return <section className={s.content}>
        <ProfileInfo/>
        <MyPosts Posts={props.Posts.Posts} NewPostText={props.Posts.NewPostText} dispatch={props.dispatch}/>
    </section>
}

export default Profile;