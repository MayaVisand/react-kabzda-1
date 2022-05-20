import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import state from "../../redux/state";

const Dialogs = () => {


    let dialogsElement = state.messagesPage.dialogs.map(element => <DialogItem key={element.id} name={element.name} id={element.id}/>)
    let messagesElement = state.messagesPage.messages.map(element => <Message message={element.message} key={element.id}/>)

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