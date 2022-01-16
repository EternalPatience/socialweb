import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST'
const SET_IMAGE_SUCCESS = 'profile/SET_IMAGE_SUCCESS'


let initialState = {
    posts: [
        {id: 1, text: 'Hi, how are you?', likesCount: 12},
        {id: 2, text: 'It\'s my first post', likesCount: 23},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postID)
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
        case SET_IMAGE_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: {...state.profile.photos, large: action.image}}
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
export const deletePost = (postID) => ({type: DELETE_POST, postID})
export const setImageSuccess = (images) => ({type: SET_IMAGE_SUCCESS, images})

//Thunks
export const getProfile = (userID) =>
    async (dispatch) => {
        let data = await profileAPI.getProfile(userID)
        dispatch(setUserProfile(data))
    }


export const getStatus = (userID) =>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userID)
        dispatch(setStatus(response.data))
    }


export const updateStatus = (status) =>
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }

export const saveImage = (image) =>
    async (dispatch) => {
        let response = await profileAPI.saveImage(image)
        if (response.data.resultCode === 0) {
            dispatch(setImageSuccess(response.data.data.photos))
        }
    }

export const saveProfile = (profileData) =>
    async (dispatch) => {
        let response = await profileAPI.saveProfile(profileData)
        if (response.data.resultCode === 0) {
            dispatch(setUserProfile(response.data))
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('profile_edit', {_error: message}))
            return Promise.reject(message)
        }
    }


export default profileReducer