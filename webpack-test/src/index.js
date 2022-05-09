import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button.js";

function Container() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(Button, { onClick: () => setLiked(!liked) }, text);
}
const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer);
