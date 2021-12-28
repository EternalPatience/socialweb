import classes from "./myPosts.module.css";
import Post from "./Post/post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import myPosts from "./myPosts";
import MyPosts from "./myPosts";

function MyPostsContainer(props) {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}/>)

}

export default MyPostsContainer