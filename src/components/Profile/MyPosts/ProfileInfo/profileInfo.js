import classes from "./profileinfo.module.css";
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./profileStatus";
import userPhoto from "../../../Users/images/anonimousAvatar.png";
import {useState} from "react";
import ProfileReduxForm from "../../profileDataForm";

function ProfileInfo(props) {

    let [editMode, setEditMode] = useState(false)

    const onImageLoad = (e) => {
        if (e.target.files.length) {
            props.saveImage(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || {userPhoto}} alt='large'/>
                {props.isOwner === props.profile.userId &&
                    <div>
                        <input type={'file'}
                               onChange={onImageLoad}/>
                    </div>}
                {editMode ?
                    <ProfileReduxForm initialValues={props.profile}
                                      profile={props.profile}
                                      onSubmit={onSubmit}/> :
                    <ProfileData profile={props.profile}
                                 isOwner={props.isOwner}
                                 setEditMode={() => setEditMode(true)}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
)
}

const ProfileData = ({profile, isOwner, setEditMode}) => {
    return (
        <div>
            {isOwner === profile.userId &&
                <div><button onClick={setEditMode}>Edit</button></div>}
            <div>
                <b>{profile.fullName}</b>
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                profile.lookingForAJob && <div><b>My skills:</b>{profile.lookingForAJobDescription}</div>
            }
            <div>
                <b>About me:</b>{profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contacts}>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default ProfileInfo