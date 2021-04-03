/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./style.module.scss";

const JSSection = () => {
  return (
    <div className={styles.wrapWidth}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>How to add the module:</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.CodeExample}>
            <p>
              <span>// Add this script somewhere in your JS</span>
            </p>
            <p>if ("paintWorklet" in CSS) &#123;</p>
            <p>  CSS.paintWorklet.addModule(</p>
            <p>
                  "https://www.unpkg.com/squircle-houdini-css@0.1.1/squircle.js"
            </p>
            <p>  );</p>
            <p>&#125;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSSection;
