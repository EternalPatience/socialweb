import ProfileInfo from "./MyPosts/ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import React from "react";



function Profile(props) {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile