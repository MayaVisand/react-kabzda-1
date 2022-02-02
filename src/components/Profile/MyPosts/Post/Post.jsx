import React from "react";
import style from "./Post.module.css";
const Post = (props) => {
    return         <div className={style.item}>
        <img src="https://static.thenounproject.com/png/364587-200.png" alt="carl"/>
        { props.message }
        <div>Like
            { props.like }
        </div>
    </div>

}
 export default Post;