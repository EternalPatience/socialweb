import './App.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import NavbarContainer from "./components/Navbar/navbarContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileMatch from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import LoginPage from "./components/Login/login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/profile/:userID" element={<ProfileMatch/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)


