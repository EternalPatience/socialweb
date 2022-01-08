import React from "react";
import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {

    return {
        messagesPage: state.messagesPage,
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
           dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
    }
}*/

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs)


export default DialogsContainer