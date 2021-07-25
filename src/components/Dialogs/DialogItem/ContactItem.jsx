import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const ContactItem = (props) => {
    return (
        <div className={s.contactItem}>
            <div className={s.contactImg}></div>
            <NavLink to={'/dialogs/' + props.contactId}>{props.name}</NavLink>
        </div>
    );
}



export default ContactItem;