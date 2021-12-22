import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add button</button>
                </div>
                <div>
                    New post
                    <div className={classes.posts}>
                        <Post message='Hi, how are you?' likesCount='12'/>
                        <Post message="It's my first post" likesCount='23'/>
                        <Post/>
                    </div>
                </div>
            </div>
    )
}

export default MyPosts