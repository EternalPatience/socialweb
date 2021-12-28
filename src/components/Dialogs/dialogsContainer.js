import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";


function DialogsContainer(props) {
    let onSendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <Dialogs updateNewMessageText={onNewMessageChange}
                 sendMessage={onSendMessage}
                 state={props.state}/>
    )
}

export default DialogsContainer