import React from 'react';
import s from './Dialogs.module.css';
import ContactItem from "./DialogItem/ContactItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, Form} from "react-final-form";


let validate = (e) => {
}


const MessageForm = (props) => {
    return (
        <Form
            onSubmit={props.addNewMessage}
            validate={validate}
            render={({handleSubmit}) => (
                <form className={s.sendField} onSubmit={handleSubmit}>
                    <Field name="newMessageText" component="textarea"  cols="30"
                           rows="10"/>
                    <button type="submit">Отправить</button>
                </form>
            )}
        />
    );

}


const Dialogs = (props) => {

    if (!props.isAutorized) {
        return <Redirect to='/login'/>;
    }


    let UsersElements = props.stateDialogs.Users.map(el => < ContactItem name={el.name} contactId={el.id}/>)
    let MessagesElements = props.stateDialogs.Messages.map(el => <Message messageText={el.message}
                                                                          messageAuthor={el.author}/>)
    let addNewMessage = (message) => {
        props.addMessage(message.newMessageText);
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

                <MessageForm addNewMessage={addNewMessage}/>

            </div>

        </div>

    )
}

export default Dialogs;