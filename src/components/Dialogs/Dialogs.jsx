import React from "react";
import s from "./Dilogs.module.css"
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.img} src={props.url} alt=""/>
            <NavLink to={`/dialogs/${props.id}`} className={s.person}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    const dialogsPerson = props.dialogsData.map(obj => <DialogItem id={obj.id} name={obj.name} url={obj.url}/>)
    const messagesItem = props.messagesPerson.map(obj => <Message id={obj.id} message={obj.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsPerson}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
        </div>
    );
}

export default Dialogs