// noinspection JSUnresolvedFunction,JSUnresolvedVariable

import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader/preloader";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
       this.props.toggleIsFetching(true)
        // noinspection JSUnresolvedVariable
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                // noinspection JSUnresolvedFunction
                this.props.setUsers(response.data.items)
                // noinspection JSUnresolvedFunction,JSUnresolvedVariable
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        // noinspection JSUnresolvedVariable
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      users={this.props.users}
        />
        </>
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (Users) => {
            dispatch(setUsersAC(Users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export default connect(mapStateToProps, {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPIComponent)