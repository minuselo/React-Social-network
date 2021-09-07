import React from 'react';
import {AddMessageActionCreator, UpdateTextMessageActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




const  mapStateToProps=(state)=>{
    return {
        stateDialogs:state.messagesPage,
        NewMessageText:state.messagesPage.NewMessageText
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addMessage:()=>{
            dispatch(AddMessageActionCreator())
        },
        MessageTextUpdate:(NewText)=>{
            dispatch(UpdateTextMessageActionCreator(NewText))
        }
    }
}

const  DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;