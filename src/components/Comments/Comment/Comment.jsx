import React, { useContext } from "react";
import style from "./Comment.module.css";
import { MyContext } from "../../../context/context";
import PersonComment from "../PersonComment/PersonComment";    

export default function Comment({ id, title, body, onClick }) {
  const { сommentsList } = useContext(MyContext);

  return (
    <>
      <div className={style.comments}>
        <div className={style.box}>
          <h6 className={style.id}>{id}</h6>
          <h5 className={style.title}>{title}</h5>
        </div>
        <div>{body}</div>
        {сommentsList !== undefined ? (
  сommentsList.map((item, index) => {
    return (
      <PersonComment key={item.name + index} name={item.name} email={item.email} body={item.body}/>
    );
  })
) : (
  <></>
)} 
        <button className={style.btn} onClick={onClick}>
          Load Comment
        </button>
      </div>
    </>
  );
}

// {сommentsList !== undefined ? (
//   сommentsList.map((item, index) => {
//     return (
//       <PersonComment key={item.name + index} name={item.name} email={item.email} body={item.body}/>
//     );
//   })
// ) : (
//   <></>
// )}
