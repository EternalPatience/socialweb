import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userID, login, email) => ({type: SET_USER_DATA, data: {userID, login, email}})


export const authChecker = () => {
    return (dispatch) => {
        authAPI.checkAuth().then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                dispatch(setAuthUserData(email, id, login))
            }
        })
    }
}


export default authReducer