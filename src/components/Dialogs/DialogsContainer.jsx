import React from 'react';
import {AddMessageActionCreator, UpdateTextMessageActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthorizedRedirect} from "../HOC/withAuthorizedRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        stateDialogs: state.messagesPage,
        NewMessageText: state.messagesPage.NewMessageText,
        isAutorized: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(AddMessageActionCreator(message))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthorizedRedirect
)(Dialogs);