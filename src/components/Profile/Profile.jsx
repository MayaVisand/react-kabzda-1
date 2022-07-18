import React from "react";
import state from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    //console.log(props)
    //console.log(props.state.profilePage.posts)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.profilePage.posts}
            newPostText={props.state.newPostText}/>
        </div>
    )
}
export default Profile;