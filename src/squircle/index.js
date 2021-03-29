import React from "react";
import "./index.css";

function registerWorklet() {
  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(
      `${process.env.PUBLIC_URL}/paintWorklet/squircle.js`
    );
  }
}

registerWorklet();

export default function (props) {
  return <div style={props.style} className="mask"></div>;
}
