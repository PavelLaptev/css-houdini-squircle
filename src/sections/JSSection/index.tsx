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
          <pre className={styles.CodeExample}>
            <code>// Add this script somewhere in your JS</code>
            <code>if (&quot;paintWorklet&quot; in CSS) &#123;</code>
            <code>  CSS.paintWorklet.addModule(</code>
            <code>
                  &quot;https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js&quot;
            </code>
            <code>  );</code>
            <code>&#125;</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default JSSection;
