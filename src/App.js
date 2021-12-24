import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs"
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";




function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element=
                            {<Dialogs state={props.state.messagesPage}/>}/>
                        <Route path="/profile" element=
                            {<Profile state={props.state.profilePage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
