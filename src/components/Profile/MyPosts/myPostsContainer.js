import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";

function MyPostsContainer(props) {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
    return (<MyPosts updateNewPostText={onPostChange}
                     posts={props.posts}
                     addPost={addPost}/>)

}

export default MyPostsContainer