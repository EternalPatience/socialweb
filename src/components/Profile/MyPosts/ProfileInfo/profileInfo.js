import classes from "./profileinfo.module.css";
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./profileStatus";


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
           {/* <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif" alt="main wallpaper"/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='large'/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
)
}

export default ProfileInfo