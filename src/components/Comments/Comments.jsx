import React, { useContext } from "react";
import Comment from "./Comment/Comment";
import axios from "axios";
import { MyContext } from "../../context/context";
import axiosGetRequest from "../../axios-function/axios.function";

export default function Comments({ comments }) {
  const { setCommentsList } = useContext(MyContext);

  async function axiosGetRequest(url, id) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE}/comments?postId=${id}`
      );
      setCommentsList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {comments !== undefined ? (
        comments.map((comment, index) => {
          return (
            <Comment
              onClick={() => {
                axiosGetRequest("/comments", comment.id);
              }}
              id={comment.id + "."}
              title={comment.title}
              body={comment.body}
              key={comment.id + index}
            />
          );
        })
      ) : (
        <h4>Нажми на кнопку</h4>
      )}
    </div>
  );
}
