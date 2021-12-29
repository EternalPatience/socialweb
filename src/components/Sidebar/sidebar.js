import classes from "./sidebar.module.css"


function Sidebar(props) {
    return (
        <div className={classes.item}>
            <div className={classes.name}>
               {props.name}
            </div>
            <div className={classes.avatar}>
                <img src={props.avatar} alt='avatar'/>
            </div>
        </div>
    )
}

export default Sidebar