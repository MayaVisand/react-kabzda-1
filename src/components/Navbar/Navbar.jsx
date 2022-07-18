import React from "react";
import style from "./Navbar.module.css";
import store from "../../redux/store";
import Message from "../Dialogs/MessageItem/MessageItem";
import FriendItem from "./FriendItem";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    let friendsElement = store._state.sideBar.friends.map(element => <FriendItem name={element.name} key={element.id}/>)

    return (
    <div>
    <nav className={style.nav}>
        <div className={style.item}>
            <a href="/profile">Profile</a>
        </div>
        <div className={style.item}>
            <a href="/dialogs" >Messages</a>
        </div>
        <div className={style.item}>
            <a href="/news">News</a>
        </div>
        <div className={style.item}>
            <a href="/music">Music</a>
        </div>
        <div className={style.item}>
            <a href="/settings">Settings</a>
        </div>

        <div className={style.friends}>
            <h3>Friends</h3>
            <div>
              <FriendItem name={store._state.sideBar.friends.name} key={store._state.sideBar.friends.id}/>


            </div>
        </div>

    </nav>


    </div>
    )
}
 export default Navbar;