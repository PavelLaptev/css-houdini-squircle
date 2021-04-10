/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapWidth}>
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          Notice a bug, want to improve the module or have an idea?
        </h3>
        <h3 className={styles.subtitle}>
          Let me know{" "}
          <a
            href="https://github.com/PavelLaptev/squircle-houdini-css/issues"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            in the GitHub issues
          </a>{" "}
          or send a pull request
        </h3>
      </div>
    </div>
  );
};

export default Footer;
