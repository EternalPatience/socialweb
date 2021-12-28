import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    )

    let messagesElements = props.state.messages.map(message =>
        <Message message={message.message}/>
    )



    let onSendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                   <textarea onChange={onNewMessageChange}
                             placeholder='Enter your message'
                             value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs