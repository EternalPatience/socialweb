import ProfileInfo from "./MyPosts/ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import React from "react";


function Profile(props) {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         saveImage={props.saveImage}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}


export default Profile