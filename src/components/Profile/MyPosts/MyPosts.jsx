import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import store from "../../../redux/state";

const MyPosts = (props) => {
    console.log(props.state)
    let postsElements = props.state.map(element => <Post message={element.message}
                                                                     likesCount={element.likesCount} key={element.id}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        {
           let text = newPostElement.current.value
            alert(text)
        }
    }
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} className="form-control">how are u?</textarea>
                </div>
                <div>
                    <button onClick={addPost} className="btn btn-light">Send</button>
                </div>

            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;