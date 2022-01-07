import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/Message";
import React from "react";


function Dialogs(props) {
    let dialogsElements = props.messagesPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/>
    )

    let messagesElements = props.messagesPage.messages.map(message =>
        <Message message={message.message} key={message.id}/>
    )

    let onSendMessage = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
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
                             value={props.messagesPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs