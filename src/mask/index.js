import React from "react";
import "./index.css";

function registerWorklet() {
  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(
      `${process.env.PUBLIC_URL}/paintWorklet/mask.js`
    );
    CSS.registerProperty({
      name: "--squircle-radius",
      syntax: "*",
      inherits: true,
      initialValue: 10,
    });
    CSS.registerProperty({
      name: "--squircle-smooth",
      syntax: "<number>",
      inherits: true,
      initialValue: 1,
    });
  }
}

registerWorklet();

export default function (props) {
  return <div style={props.style} className="mask"></div>;
}
