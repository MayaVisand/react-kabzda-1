import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import store from "../../redux/state";
import Post from "../Profile/MyPosts/Post/Post";

const Dialogs = () => {

    let dialogsElement = store._state.messagesPage.dialogs.map(element => <DialogItem key={element.id} name={element.name}
                                                                               id={element.id}/>)
    let messagesElement = store._state.messagesPage.messages.map(element => <Message message={element.message}
                                                                              key={element.id}/>)

    let newDialogElement = React.createRef()

    let  addPost = () => {
        {

            let text = newDialogElement.current.value
            alert(text)
        }
    }

    let handleChangeNewPost = (event) => {
        let text = newDialogElement.current.value
        store._state.profilePage.posts.push(text)
        console.log( 'new text' , text )
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>

                {dialogsElement}
            </div>
            <div className="card">
                <div className={'message-area'} >
                    <textarea onChange={handleChangeNewPost} defaultValue={store._state.profilePage.newPostText} ref={newDialogElement}/>
                    <button  onClick={addPost}>send</button>
                </div>

                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;