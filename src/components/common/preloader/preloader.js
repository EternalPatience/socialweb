import classes from "./preloader.module.css";
import React from "react";

let Preloader = () => {
    return (
        <div className={classes.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Preloader