import React from "react";
import "./index.css";

function registerWorklet() {
  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(
      `${process.env.PUBLIC_URL}/paintWorklet/mask.js`
    );
  }
}

registerWorklet();

export default function () {
  return <div className="mask">mask-image</div>;
}
