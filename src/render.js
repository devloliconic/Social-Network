import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, addText} from "./components/redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (state) =>{
    root.render(
        <BrowserRouter>
            <App appState={state} addPost = {addPost} addText = {addText}/>
        </BrowserRouter>
    );
}




