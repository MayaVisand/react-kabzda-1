import React from "react";
import style from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img className={style.avatar} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="userpic"/>
            <a href={path} className={style.userName}>{props.name}</a>
        </div>
    )

}


export default DialogItem;