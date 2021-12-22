import classes from "./Post.module.css";


function Post(props) {
    return (
    <div className={classes.item}>
        <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png' alt='avatar'/>
        {props.message}
        <div>
            <span className={classes.likes}>
                likes {props.likesCount}
            </span>
        </div>
    </div>
    )
}

export default Post