import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.contentProfile}>
        <div className={s.contentImage}><img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                                             alt=""/></div>
        <div className={s.profileDescription}>
            <h2>User Name</h2>
            <h4>О себе:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam at dolorem expedita facere
                facilis fugiat, itaque iure maiores
                nisi odio optio praesentium quaerat quo repellat vel vero voluptates.
                Accusantium adipisci corporis culpa, deserunt dolore eius ex facere iusto molestiae, mollitia odit
                porro quaerat quas repudiandae sequi. Consequuntur maiores, modi?</p>
        </div>
    </div>

}

export default ProfileInfo;