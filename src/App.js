import React from "react";


import "normalize.css"
import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (

        <div className={"app-wrapper"}>
            <Header/>
            <Nav state = {props.appState.sidebar}/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/" element={<Profile state={props.appState.profilePage} dispatch = {props.dispatch}/>}/>
                    <Route path="/dialogs"
                           element={<Dialogs state={props.appState.dialogsPage} dispatch = {props.dispatch}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
