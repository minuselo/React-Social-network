import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return <section className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </section>
}

export default Profile;