import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {FormControl} from "../common/formControls/formControls";
import {required} from "../../utilities/validators/validators";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        )
    }

    if (props.isAuth) {
        return <Navigate to={'/profile/21697'}/>
    }

    return (
        <div>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const Input = FormControl("Input")

const LoginForm = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
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
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}


const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout, login})(Login)