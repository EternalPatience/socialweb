import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA';


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
export const authChecker = () =>
    async (dispatch) => {
        let data = await authAPI.checkAuth()
        if (data.resultCode === 0) {
            let {email, id, login} = data.data
            dispatch(setAuthUserData(email, id, login, true))

        }
    }


export const login = (email, password, rememberMe, captcha) =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }


export const logout = () =>
    async (dispatch) => {
        let data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }


export default authReducer