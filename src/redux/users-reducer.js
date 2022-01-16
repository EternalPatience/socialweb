import {usersAPI} from "../api/api";
import {updateObjectPropertyInArray} from "../utilities/object-handlers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_ITEMS_COUNT = "SET_TOTAL_ITEMS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGlE_IS_FOLLOWING_PROGRESS = "TOGGlE_IS_FOLLOWING_PROGRESS"


let initialState = {
    users: [],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectPropertyInArray(state.users,
                    'id',
                    action.userID,
                    {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectPropertyInArray(state.users,
                    'id',
                    action.userID,
                    {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_ITEMS_COUNT:
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGlE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default: {
            return state
        }
    }
}


//ActionCreators
export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalItemsCount = (totalItemsCount) => ({type: SET_TOTAL_ITEMS_COUNT, totalItemsCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (followingInProgress, userID) => ({
    type: TOGGlE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userID
})

//Thunks
export const getUsers = (currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        // noinspection JSUnresolvedFunction,JSUnresolvedVariable
        dispatch(setTotalItemsCount(data.totalCount))
    }


export const pageChange = (pageNumber, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        let data = await usersAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }


const followUnfollow = async (userID, apiMethod, actionCreator, dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    let data = await apiMethod(userID)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}


export const follow = (userID) =>
    async (dispatch) => {
        await followUnfollow(userID, usersAPI.followUser.bind(usersAPI), followSuccess, dispatch)
}


export const unfollow = (userID) =>
    async (dispatch) => {
        await followUnfollow(userID, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess, dispatch)
    }


export default usersReducer