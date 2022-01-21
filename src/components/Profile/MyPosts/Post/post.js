import classes from "./post.module.css";


function Post(props) {
    return (
        <div>
        <div className={classes.item}>
            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png' alt='avatar'/>
            <div className={classes.text}>
                {props.message}
            </div>
        </div>
            <span className={classes.likes}>
                likes {props.likesCount}
            </span>
        </div>
    )
}

export default Post