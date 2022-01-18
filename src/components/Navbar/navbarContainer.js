import Navbar from "./navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        login: state.auth.login
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)


export default NavbarContainer