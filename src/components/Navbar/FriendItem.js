import React from 'react';
import style from "../Dialogs/Dialogs.module.css";

const FriendItem = (props) => {

    let path = "/friend/" + props.id
    return (
        <div className={style.friend + ' ' + style.active}>
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt="friendAva"/>
            <img className={style.avatar} src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="userpic"/>
            <a href={path} className={style.userName}>{props.name}</a>
        </div>
    )

};

export default FriendItem;