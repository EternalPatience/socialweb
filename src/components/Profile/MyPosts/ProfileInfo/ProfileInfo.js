import classes from "./Profileinfo.module.css";


function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif" alt="main wallpaper"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
)
}

export default ProfileInfo