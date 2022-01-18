import React, {useEffect, useState} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getProfile, getStatus, saveImage, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useMatch, Navigate} from 'react-router-dom'
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.authorizedUserID
            if (!userID) {
                <Navigate to={'/login'}/>
            }
        }

        this.props.getProfile(userID)
        this.props.getStatus(userID)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userID !== this.props.match.params.userID) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} isOwner={this.props.login}
        />
    }
}


const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userID");

    return (
        <ProfileContainer {...props} match={match}/>
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.userID,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default compose(
    connect(mapStateToProps,
        {
            getProfile,
            getStatus,
            updateStatus,
            saveImage,
            saveProfile
        }),
    //withAuthRedirect
)(ProfileMatch)