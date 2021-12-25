import classes from "./myPosts.module.css";
import Post from "./Post/post";
import React from "react";


function MyPosts(props) {

    let postElements = props.posts.map(post =>
        <Post message={post.text} likesCount={post.likesCount}/>
    )
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  ref={newPostElement}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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