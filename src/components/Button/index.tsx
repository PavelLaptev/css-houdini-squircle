import React from "react";
import styles from "./style.module.scss";

interface ButtonProps {
  text?: string;
  link?: string;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={styles.buttonWrap}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className={`${styles.button} ${props.className}`}
      >
        {props.text}
      </a>
    </div>
  );
};

Button.defaultProps = {
  onClick: () => {},
  text: "Button",
  link: "#"
};

export default Button;
