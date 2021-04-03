import React from "react";
import styles from "./style.module.scss";

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(props.link, "_blank", "noopener,noreferrer");
    props.onClick(e);
  };

  return (
    <button
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
      className={`${styles.button} ${props.className}`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  text: "Button",
  link: "#",
};

export default Button;
