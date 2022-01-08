import classes from "./profileinfo.module.css";
import Preloader from "../../../common/preloader/preloader";


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif" alt="main wallpaper"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='large'/>
                                ava + description
            </div>
        </div>
)
}

export default ProfileInfo