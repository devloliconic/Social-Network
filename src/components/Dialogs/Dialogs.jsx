import React from "react";
import s from "./Dilogs.module.css"
import {Link, Routes} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.img} src={props.url} alt=""/>
            <Link to={`/dialogs/${props.id}`} className={s.person}>{props.name}</Link>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {
            id: "1",
            name: "dima",
            url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
        },
        {
            id: "2",
            name: "kirill",
            url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
        },
        {
            id: "3",
            name: "lena",
            url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
        },
        {
            id: "4",
            name: "sasha",
            url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
        },
        {
            id: "5",
            name: "vitya",
            url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
        },
        {
            id: "6",
            name: "oleg",
            url: "https://sun9-36.userapi.com/impf/jy6NxffbaZzybTkSxIzULtbcEOzKkhcILVMKzg/RnWsVa4Z70U.jpg?size=749x750&quality=95&sign=ba78b22d8abe67d64d6658747e351857&type=album"
        }
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((obj) => <DialogItem id={obj.id} name={obj.name} url={obj.url}/>)}
            </div>
        </div>
    );
}

export default Dialogs