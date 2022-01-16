import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import NavbarContainer from "./components/Navbar/navbarContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileMatch from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import LoginPage from "./components/Login/login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import {compose} from "redux";
import store from "./redux/redux-store";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return (
                <Preloader/>
            )
        }

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


const SocialWeb = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}

let AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App)

export default SocialWeb
