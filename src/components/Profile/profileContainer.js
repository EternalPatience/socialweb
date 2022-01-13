import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {useMatch, Navigate} from 'react-router-dom'
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
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

    render () {
        return <Profile {...this.props}
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
})


export default compose(
    connect(mapStateToProps,{getProfile, getStatus, updateStatus}),
    //withAuthRedirect
)(ProfileMatch)