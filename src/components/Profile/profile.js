import classes from "./profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif" alt="main wallpaper"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile