import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {Navigate, useMatch} from 'react-router-dom'


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userID = this.props.match.params.userID
        this.props.getProfile(userID)
    }

    render () {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userID/");

    if (!props.isAuth) {
        return <Navigate to={"/login"}/>
    }

    return (
        <ProfileContainer {...props} match={match} />
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {getProfile})(ProfileMatch)