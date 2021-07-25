import React from 'react';
import s from './../Dialogs.module.css';




const Message = (props) => {
    return (
        <div className={s.massage}>
            <h4>{props.messageAuthor}</h4>
            <p>{props.messageText}</p>
        </div>
    );
}



export default Message;