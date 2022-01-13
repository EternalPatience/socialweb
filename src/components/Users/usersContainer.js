// noinspection JSUnresolvedFunction,JSUnresolvedVariable

import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    getUsers,
    pageChange
} from "../../redux/users-reducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, requestUsers
} from "../../redux/user-selectors";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.pageChange(pageNumber, this.props.pageSize)
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
                   followingProgressStatus={this.props.followingInProgress}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    connect(mapStateToProps,{
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        pageChange,
    }),
    withAuthRedirect)
(UsersAPIComponent)