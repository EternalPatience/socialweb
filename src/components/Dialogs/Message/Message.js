import classes from "../dialogs.module.css";
import React from "react";


function Message(props) {


    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default Message