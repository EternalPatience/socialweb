import classes from "./myPosts.module.css";
import Post from "./Post/post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



function MyPosts(props) {

    let postElements = props.posts.map(post =>
        <Post message={post.text} likesCount={post.likesCount}/>
    )

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
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