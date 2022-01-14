import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, text: 'Hi, how are you?', likesCount: 12},
        {id: 2, text: 'It\'s my first post', likesCount: 23},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                text: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state
        }

    }
}

//ActionCreators
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

//Thunks
export const getProfile = (userID) =>
    (dispatch) => {
        profileAPI.getProfile(userID).then(data => {
                dispatch(setUserProfile(data))
            })
    }


export const getStatus = (userID) =>
     (dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setStatus(response.data))
        })
    }


export const updateStatus = (status) =>
    (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode ===0) {
                dispatch(setStatus(status))
            }
        })
    }


export default profileReducer