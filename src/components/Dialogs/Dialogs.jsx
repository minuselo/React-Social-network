import React from 'react';
import s from './Dialogs.module.css';







const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                <h2>Сообщения</h2>
                {props.UsersElements}
            </div>

            <div className={s.massages}>
                {props.MessagesElements}
            </div>

        </div>

    )
}

export default Dialogs;