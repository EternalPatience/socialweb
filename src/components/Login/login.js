import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCaptcha, login, logout} from "../../redux/auth-reducer";
import {FormControl} from "../common/formControls/formControls";
import {required} from "../../utilities/validators/validators";
import {Navigate} from "react-router-dom";
import classes from '../common/formControls/formControls.module.css'

const Input = FormControl("Input")


const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Email'}
                           validate={[required]}
                           component={Input}
                           name={'email'}/>
                </div>
                <div>
                    <Field placeholder={'Password'}
                           validate={[required]}
                           type={'password'}
                           component={Input}
                           name={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'}
                           component={Input}
                           name={'rememberMe'}/> remember me
                </div>
                {captchaURL && <img src={captchaURL} alt={'captcha'}/>}
                {captchaURL && <Field placeholder={'captcha'}
                                      validate={[required]}
                                      component={Input}
                                      name={'captcha'}/>}
                {error && <div className={classes.summaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = ({login, isAuth, captchaURL, getCaptcha}) => {
    const onSubmit = (formData) => {
        login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        )
    }
    if (isAuth) {
        return <Navigate to={'/profile/21697'}/>
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL} getCaptcha={getCaptcha}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout, login, getCaptcha})(Login)