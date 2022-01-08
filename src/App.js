import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/header";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import NavbarContainer from "./components/Navbar/navbarContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileMatch from "./components/Profile/profileContainer";


function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/profile/:userID" element={<ProfileMatch/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}


export default App;
