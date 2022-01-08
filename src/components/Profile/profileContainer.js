import React from "react";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useMatch} from 'react-router-dom'


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userID = this.props.match.params.userID
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render () {
       return <Profile {...this.props} profile={this.props.profile}/>
    }
}


const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userID/");
    return (
        <ProfileContainer {...props} match={match} />
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileMatch)