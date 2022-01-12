import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userID: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


//ActionCreators
export const setAuthUserData = (userID, login, email, isAuth) => (
    {type: SET_USER_DATA, payload: {userID, login, email, isAuth}})


//ThunksCreators
export const authChecker = () => {
    return (dispatch) => {
        authAPI.checkAuth().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                dispatch(setAuthUserData(email, id, login, true))
            }
        })
    }
}


export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe, captcha).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}


export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer