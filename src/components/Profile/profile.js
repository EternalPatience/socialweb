import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile(props) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile