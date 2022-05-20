import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
    <div>
        <div>
            <img className={style.wallpaper}
                src="https://i.pinimg.com/originals/92/46/8b/92468b1cae915802c213995efc614159.jpg"/>
        </div>
        <div className={style.descriptionBlock}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem eius, eos incidunt nam, nihil obcaecati perspiciatis quisquam soluta suscipit totam ullam veniam voluptatem. Aliquid asperiores dolorem itaque minus veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet deleniti deserunt esse ipsa nostrum odit, provident quisquam. Blanditiis culpa delectus est iusto laboriosam quo repellat veritatis? Corporis, hic ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, deleniti dicta esse hic illum itaque labore laudantium quis quisquam quo rerum tempore tenetur voluptate. Architecto aut dolores earum laborum odio?
        </div>
    </div>
    )
}
export default ProfileInfo;