import classes from "./myPosts.module.css";
import Post from "./Post/post";


function MyPosts(props) {

    let postElements = props.posts.map(post =>
        <Post message={post.text} likesCount={post.likesCount}/>
    )

    return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea>

                        </textarea>
                    </div>
                    <div>
                        <button>Add button</button>
                    </div>
                </div>
                <div>
                    <div className={classes.posts}>
                        {postElements}
                    </div>
                </div>
            </div>
    )
}

export default MyPosts