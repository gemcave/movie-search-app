import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie";

const App = () => {
  return (
    <div>
      <Movie />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
