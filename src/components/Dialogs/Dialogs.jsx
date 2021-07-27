import React from 'react';
import s from './Dialogs.module.css';
import ContactItem from "./DialogItem/ContactItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let UsersElements= props.stateDialogs.Users.map(el => < ContactItem name={el.name} contactId={el.id}/>)
    let MessagesElements=props.stateDialogs.Messages.map(el => <Message messageText={el.message} messageAuthor={el.author}/> )
    let newMessageText=React.createRef();
    let addNewMessage=()=>{
        alert(newMessageText.current.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                <h2>Сообщения</h2>
                {UsersElements}
            </div>

            <div className={s.massages}>
                <div className={s.massageField}>
                    {MessagesElements}
                </div>
                <div className={s.sendField}>
                    <textarea name="" id="" cols="30" rows="10" ref={newMessageText}></textarea>
                <button onClick={addNewMessage}>Отправить</button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;