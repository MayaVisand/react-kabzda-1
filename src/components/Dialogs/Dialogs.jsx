import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(element => <DialogItem name={element.name} id={element.id}/>)
    let messagesElement = props.messages.map(element => <Message message={element.message}/>)

    return (

        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className="card">
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;