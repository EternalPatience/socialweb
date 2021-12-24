import classes from "../dialogs.module.css";
import {NavLink} from "react-router-dom";


function DialogItem(props) {

    return (
        <div className={`${classes.dialog}`}>
            <img src={props.avatar} alt='avatar'/>
            <NavLink to={"/dialogs/" + props.id} className={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem