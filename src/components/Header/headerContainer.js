import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


function HeaderContainer(props) {
    return <Header {...props} logout={props.logout} login={props.login}/>
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)