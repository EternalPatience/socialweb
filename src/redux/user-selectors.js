import {createSelector} from "reselect";

// simple selectors
const requestUsersSelector = (state) => {
    return state.usersPage.users
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getPartitionSize = (state) => {
    return state.usersPage.partitionSize
}

// selectors with dependencies
export const requestUsers = createSelector(requestUsersSelector, (users) => {
    return users
})

