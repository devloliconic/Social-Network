import React from "react";


import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import store from "./components/redux/reduxStore";
import App from "./App";




const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});


