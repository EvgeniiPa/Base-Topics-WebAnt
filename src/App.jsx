import "./App.css";
import React from "react";
import { MyProvider} from "./context/context";
import Posts from "./Posts/Posts";

function App() {

  return (
    <MyProvider>
      <Posts />
    </MyProvider>
  );
}

export default App;
