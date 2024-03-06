import React from "react";

export default function Button({text,onClick,style}){
    return(
        <button className={style} onClick={onClick}>{text}</button>
    )
}