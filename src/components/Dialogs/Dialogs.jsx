import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {addMessageActionCreator,updateNewMessageTextAction} from "../../redux/dialogs-reducer";
import state from "../../redux/store";

const Dialogs = () => {

    // let state = state.getState().messagesPage

    let dialogsElement = state._state.messagesPage.dialogs.map(element => <DialogItem key={element.id} name={element.name}
                                                                               id={element.id}/>)
    let messagesElement = state._state.messagesPage.messages.map(element => <Message message={element.message}
                                                                              key={element.id}/>)
    let newDialogElement = React.createRef()

    let newMessageText = state._state.messagesPage.newMessageText



    let  addMessage = () => {
        {
            state.dispatch(addMessageActionCreator())
            //     //console.log(this._state)
            // console.log(newPost)
            // // ID KEY нужен уникальный айди для корректной работы
            // let postData = [{id: 5, message: newPost, likesCount: 0}]
            // this._state.profilePage.posts.push(...postData);
            // console.log(this._state)
            // //this._state.profilePage.newPostText = '';
            // this._callSubscriber(this._state);
            //
            // let text = newDialogElement.current.value
            // let messageData = [{id: 5, message: text}]
            // this._state.dialogs.push(...postData);
            // store.dispatch(ADD_MASSAGE)
            // // alert(text)
            // // store._state.messagesPage.messages.push(text)
            // console.log( 'new message' , text )

        }
    }

    let handleChangeNewPost = (event) => {
        let text = newDialogElement.current.value
        console.log(text)
        state.dispatch(updateNewMessageTextAction(text))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>

                {dialogsElement}
            </div>
            <div className="card">
                <div className={'message-area'} >
                    <textarea onChange={handleChangeNewPost} defaultValue={newMessageText} ref={newDialogElement}/>
                    <button  onClick={addMessage}>send</button>
                </div>

                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;