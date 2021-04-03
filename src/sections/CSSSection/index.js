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
          <h2>How to use with CSS:</h2>
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

          <div
            className={styles.CSSExample}
            style={{ display: toggleBtn ? "none" : "flex" }}
          >
            <p>background: color</p>
            <p>mask-image: paint(squircle)</p>
            <p>--squircle-radius: px</p>
            <p>--squircle-smooth: number</p>
            <p>
              <span>
                // if you want to use property as background instead of mask
              </span>
            </p>
            <p>background: paint(squircle)</p>
            <p>
              --squircle-color: color <span>// accept CSS variables</span>
            </p>
          </div>

          <div
            className={styles.CSSExample}
            style={{ display: !toggleBtn ? "none" : "flex" }}
          >
            <p>
              <span>// Outline via background</span>
            </p>
            <p>background: paint(squircle)</p>
            <p>--squircle-radius: px</p>
            <p>--squircle-smooth: number</p>
            <p>--squircle-outline: px</p>
            <p></p>
            <p>
              <span>
                // Outline via{" "}
                <a href="#sd" target="_blank">
                  pseudo-element
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSSection;
