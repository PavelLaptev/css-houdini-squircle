/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./style.module.scss";

const Scalable = () => {
  const [mousePos, setMousePos] = React.useState({ x: 400, y: 400 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.screenX, y: e.screenY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div
        style={{
          height: `${mousePos.x / 14}%`,
          flex: `1 1 ${mousePos.y / 2}%`,
          "--squircle-radius": "10px",
          "--squircle-smooth": "0.3",
        }}
        className={styles.block}
      >
        <span
          style={{
            transform: `scale(${(mousePos.y / 100) * 0.2 + 1})`,
          }}
        >
          SC
        </span>
      </div>
      <div
        style={{
          height: `${mousePos.y / 7}%`,
          flex: `1 1 ${mousePos.x / 3}%`,
          "--squircle-radius": "40px",
          "--squircle-smooth": "0.1",
        }}
        className={styles.block}
      >
        <span style={{ transform: `scale(${(mousePos.x / 90) * 0.2 + 1})` }}>
          AL
        </span>
      </div>
      <div
        style={{
          height: `${mousePos.x / 4}%`,
          flex: `1 1 ${mousePos.y / 4}%`,
          "--squircle-radius": "40px",
          "--squircle-smooth": "0.8",
        }}
        className={styles.block}
      >
        <span style={{ transform: `scale(${(mousePos.x / 100) * 0.1 + 1})` }}>
          AB
        </span>
      </div>
      <div
        style={{
          height: `${mousePos.y / 10}%`,
          flex: `1 1 ${mousePos.x / 1}%`,
          "--squircle-radius": "50px",
          "--squircle-smooth": "0.3",
        }}
        className={styles.block}
      >
        <span style={{ transform: `scale(${(mousePos.y / 100) * 0.2 + 1})` }}>
          LE
        </span>
      </div>
    </div>
  );
};

export default Scalable;
