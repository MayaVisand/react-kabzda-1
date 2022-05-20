import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import state from "../../../redux/state";

const MyPosts = (props) => {

     let postsElements = state.profilePage.posts.map(element => <Post message={element.message} likesCount={element.likesCount} key={element.id}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className="form-control">how are u?</textarea>
                </div>
                <div>
                    <button className="btn btn-light">Send</button>
                </div>

            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;