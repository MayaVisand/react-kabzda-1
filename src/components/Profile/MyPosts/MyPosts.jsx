import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={MyPosts}>
        My posts
        <div>
        <textarea>how are u?</textarea>
        <button>Send</button>
    </div>
        <div className={style.posts}>
        <Post message="Hi, post 1" like=" 10"/>
        <Post message="Buy, post 2"/>
        <Post />
        </div>
    </div>
}
export default MyPosts;