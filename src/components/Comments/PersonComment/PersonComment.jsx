import React from "react";
import style from "./PersonComment.module.css"

export default function PersonComment(item){
    return(
        <div className={style.box}>
            <div className={style.name}>{item.name}</div>
            <div className={style.email}>{item.email}</div>
            <div className={style.body}>{item.body}</div>
        </div>
    )
}