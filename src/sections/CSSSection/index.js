/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./style.module.scss";

const CSSSection = () => {
  const [toggleBtn, setToggleBtn] = React.useState(false);
  const handleClick = (e) => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className={styles.wrapWidth}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>How to use in CSS:</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.switcher}>
            <div
              className={`${styles.switcherButton} ${
                !toggleBtn ? styles.switcherActive : null
              }`}
              onClick={handleClick}
            >
              Fill
            </div>
            <div
              className={`${styles.switcherButton} ${
                toggleBtn ? styles.switcherActive : null
              }`}
              onClick={handleClick}
            >
              Outline
            </div>
            <div
              className={`${styles.switcherBack} ${
                toggleBtn ? styles.switcherBackActive : null
              }`}
            />
          </div>

          <pre
            className={styles.CSSExample}
            style={{ display: toggleBtn ? "none" : "flex" }}
          >
            <code>background: color</code>
            <code>mask-image: paint(squircle)</code>
            <code>background: color mask-image: paint(squircle)</code>
            <code>--squircle-radius: px</code>
            <code>--squircle-smooth: number</code>
            <code>
              <span>
                // if you want to use property as background instead of mask
              </span>
            </code>
            <code>background: paint(squircle)</code>
            <code>
              --squircle-fill: color <span>// accept CSS variables</span>
            </code>
          </pre>

          <pre
            className={styles.CSSExample}
            style={{ display: !toggleBtn ? "none" : "flex" }}
          >
            <code>
              <span>// Outline via background</span>
            </code>
            <code>background: paint(squircle)</code>
            <code>--squircle-radius: px</code>
            <code>--squircle-smooth: number</code>
            <code>--squircle-outline: px</code>
            <code>
              <span>
                // Outline via{" "}
                <a
                  href="https://codepen.io/PavelLaptev/pen/OJWgRWG"
                  rel="noreferrer"
                  target="_blank"
                >
                  pseudo-element
                </a>
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CSSSection;
