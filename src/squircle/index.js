import React from "react";
import "./index.css";

function registerWorklet() {
  if ("paintWorklet" in CSS) {
    // CSS.paintWorklet.addModule(
    //   `${process.env.PUBLIC_URL}/paintWorklet/squircle.js`
    // );
    CSS.paintWorklet.addModule(
      "https://raw.githubusercontent.com/PavelLaptev/css-houdini-experements/main/public/paintWorklet/squircle.js?token=AENEJGECIZRH4MFUJVKK72TAMJEZE"
    );
  }
}

registerWorklet();

export default function (props) {
  return <div style={props.style} className="mask"></div>;
}
