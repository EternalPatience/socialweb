import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/Message";
import React from "react";


function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    )

    let messagesElements = props.state.messages.map(message =>
        <Message message={message.message}/>
    )

    let newMessageElement = React.createRef()
    let sendMessage = () => {
        let messageText = newMessageElement.current.value
        alert(messageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                   <textarea ref={newMessageElement}>

                   </textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs