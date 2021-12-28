import './App.css';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs"
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import DialogsContainer from "./components/Dialogs/dialogsContainer";




function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element=
                            {<DialogsContainer state={props.state.messagesPage}
                                               dispatch={props.dispatch}/>}/>
                        <Route path="/profile" element=
                            {<Profile profilePage={props.state.profilePage}
                                      dispatch={props.dispatch}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}


export default App;
