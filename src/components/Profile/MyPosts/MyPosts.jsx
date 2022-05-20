import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    //
    // let postsData = [
    //     {id: 1, message: 'hi, its my first post', likesCount: 11},
    //     {id: 2, message: 'hi, where lorem ipsum gjhgfkj djf jhd jfhkjdsh ', likesCount: 66},
    //     {id: 3, message: 'Ikj djfhfsk sdk skdjkdfj sdwoels woewiqow odkk', likesCount: 131},
    //
    // ]

     let postsElements = props.posts.map(element => <Post message={element.message} likesCount={element.likesCount}/>)

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