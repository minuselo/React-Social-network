import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userDefaulImg from './../../../assets/img/user.png'
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return <div className={s.contentProfile}>
        <div className={s.contentImage}>{props.profile.photos.small!=null?
            <img src={props.profile.photos.small} alt=""/>:
            <img src={userDefaulImg} alt=""/>
        }
        </div>
        <div className={s.profileDescription}>
            <h2>{props.profile.fullName}</h2>
            <h4>О себе:</h4>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>

}

export default ProfileInfo;