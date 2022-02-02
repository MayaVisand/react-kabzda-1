import React from "react";
import style from "./Profile.module.css";
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.18169-9/15894333_859018614201018_917931017327112310_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=a9TT_6fQVuMAX9dHz9U&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT8rTE4pxaA-jC84OKXSbZ_a2ZFH583IqpJTx-lUsqkO9w&oe=620FB16D"/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
        }
        export default Profile;