import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {useMatch} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

    return (
        <ProfileContainer {...props} match={match} />
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export default compose(
    connect(mapStateToProps,{getProfile}),
    //withAuthRedirect
)(ProfileMatch)