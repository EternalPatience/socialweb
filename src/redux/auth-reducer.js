import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';


let initialState = {
    userID: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}


//ActionCreators
export const setAuthUserData = (userID, login, email, isAuth) => (
    {type: SET_USER_DATA, payload: {userID, login, email, isAuth}})
export const getCaptchaUrlSuccess = (CaptchaUrl) => (
    {type: GET_CAPTCHA_URL, payload: {CaptchaUrl}})


//ThunksCreators
export const authChecker = () =>
    async (dispatch) => {
        let data = await authAPI.checkAuth()
        if (data.resultCode === 0) {
            let {email, id, login} = data.data
            dispatch(setAuthUserData(email, id, login, true))

        }
    }


export const login = (email, password, rememberMe) =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }


export const logout = () =>
    async (dispatch) => {
        let response = await authAPI.logout()
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }


export const getCaptcha = () =>
    async (dispatch) => {
        let response = await authAPI.getCaptcha()
        let captchaURL = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaURL))
}



export default authReducer