import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className="card">
        <img className={style.avatar} src="https://static.thenounproject.com/png/364587-200.png" alt="carl"/>
        <p className={style.message}>{props.message}</p>
        <div className={style.likeBlock}>
            Likes  <img className={style.like} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLudBUAQNGPerdvGD3gHqObUr1mYm7lk383w&usqp=CAU" alt="like"/>
            {props.likesCount}
        </div>
    </div>
    )
}
 export default Post;