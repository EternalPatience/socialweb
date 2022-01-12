import classes from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/formControls/formControls";
import {maxLengthCreator, required} from "../../utilities/validators/validators";


function Dialogs(props) {
    let dialogsElements = props.messagesPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/>
    )

    let messagesElements = props.messagesPage.messages.map(message =>
        <Message message={message.message} key={message.id}/>
    )

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const Textarea = FormControl("textarea")

const maxMessageLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxMessageLength100 ]}
                       name={'newMessageText'}
                       placeholder={'Enter your message'}/>
                <div>
                    <button>Send message</button>
                </div>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs