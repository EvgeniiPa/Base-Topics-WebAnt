import axios from "axios";
import React, { useState } from "react";
import Button from "../components/Button/Button";
import Comments from "../components/Comments/Comments";
import url from "../url/url";
import style from "../styles.module.css";

export default function Posts() {
  const [listComments, setListComments] = useState();
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(4);

  function addedPosts() {
    axios
      .get(url + "/posts")
      .then((res) => {
        listComments !== undefined
          ? setListComments(
              listComments.concat(res.data.slice(sliceStart, sliceEnd))
            )
          : setListComments(res.data.slice(sliceStart, sliceEnd));
      })
      .catch((error) => console.error("Ошибка", error));

    setSliceStart((sliceStart) => sliceStart + 4);
    setSliceEnd((sliceEnd) => sliceEnd + 4);

    console.log(listComments, process.env.REACT_APP_BASE);
  }


  function handleClickReload() {
    setListComments([]);
    setSliceStart(0);
    setSliceEnd(4);
  }

  return (
    <div className={style.box}>
      <Comments comments={listComments} />
      <div className={style.boxButton}>
        <Button
          style={style.btn}
          text={"Load more POSTS"}
          onClick={addedPosts}
        />
        <Button style={style.btn} text={"Reload"} onClick={handleClickReload} />
      </div>
    </div>
  );
}
