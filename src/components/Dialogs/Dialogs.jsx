import React, {useState} from "react";
import s from "./Dilogs.module.css"
import {NavLink} from "react-router-dom";
import {addMessageCreater, updateNewMessageCreater} from "../redux/dialogsReducer";

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

    const dialogsPerson = props.state.dialogsData.map(obj => <DialogItem id={obj.id} name={obj.name} url={obj.url}/>)
    const messagesItem = props.state.messagesPerson.map(obj => <Message id={obj.id} message={obj.message}/>)

    const [message, setMessage] = useState(props.state.newMessageText)

    const onTextChange = (e) =>{
        setMessage(e.target.value);
        props.dispatch(updateNewMessageCreater(message))
    }

    const addMessage = () =>{
        props.dispatch(addMessageCreater())
        setMessage(props.state.newMessageText)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsPerson}
            </div>
            <div className={s.messages}>
                {messagesItem}
                <textarea value={message} onChange={onTextChange}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
}

export default Dialogs