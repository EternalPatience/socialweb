import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/Message";





function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    )

    let messagesElements = props.state.messages.map(message =>
        <Message message={message.message}/>
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>)
}

export default Dialogs