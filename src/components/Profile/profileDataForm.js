import {FormControl} from "../common/formControls/formControls";
import {Field, reduxForm} from "redux-form";
import classes from "../common/formControls/formControls.module.css";


const Input = FormControl("Input")
const Textarea = FormControl("Textarea")

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button onClick={() => {}}>save</button></div>
            {error && <div className={classes.summaryError}>
                {error}
            </div>}
            <b>Full name:</b>
            <Field placeholder={'Full name'}
                   validate={[]}
                   component={Input}
                   name={'fullName'}/>
            <b>Looking for a job:</b>
            <Field validate={[]}
                   type={'checkbox'}
                   component={Input}
                   name={'lookingForAJob'}/>
            <b>My skills:</b>
            <Field placeholder={'My skills'}
                   validate={[]}
                   component={Textarea}
                   name={'lookingForAJobDescription'}/>
            <b>About me:</b>
            <Field placeholder={'About me'}
                   validate={[]}
                   component={Textarea}
                   name={'aboutMe'}/>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div>
                    <b>{key}</b>
                    <Field placeholder={key}
                           validate={[]}
                           key={key}
                           component={Input}
                           name={'contacts.' + key}/>
                </div>
            })}
            </div>
        </form>
    )
}
const ProfileReduxForm = reduxForm({
    form: 'profile_edit'
})(ProfileDataForm)


export default ProfileReduxForm