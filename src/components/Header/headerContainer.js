import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {authChecker, logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authChecker()
    }

    render() {
        return <Header {...this.props} logout={this.props.logout} login={this.props.login}/>
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {authChecker, logout})(HeaderContainer)