import React, { createContext, useState } from "react";

export const MyContext = createContext(null);

export function MyProvider({ children }) {
  const [сommentsList, setCommentsList] = useState();
  const [commentId, setCommendId] = useState(0)

  return (
    <MyContext.Provider
      value={{
        сommentsList,
        setCommentsList,
        commentId,
        setCommendId
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
