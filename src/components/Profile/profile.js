import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile(props) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile