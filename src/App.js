import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/settings";
import NavbarContainer from "./components/Navbar/navbarContainer";
import HeaderContainer from "./components/Header/headerContainer";
import LoginPage from "./components/Login/login";
import React, {Component, Suspense} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import {compose} from "redux";
import store from "./redux/redux-store";
import GuestLayout from "./components/Profile/guestComponent";

//React.lazy
const DialogsContainer = React.lazy(() => import("./components/Dialogs/dialogsContainer"));
const ProfileMatch = React.lazy(() => import("./components/Profile/profileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/usersContainer"));
const News = React.lazy(() => import("./components/News/news"));
const Music = React.lazy(() => import("./components/Music/music"));


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
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/profile/:userID" element={<ProfileMatch/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="*" element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


const SocialWeb = () => {
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
