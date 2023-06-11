/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./style.module.scss";

import Range from "../../components/Range";

const ButtonsSection = () => {
  const [radius, setRadius] = React.useState(20);
  const [smooth, setSmooth] = React.useState(0.8);

  return (
    <div className={styles.wrap}>
      <div
        style={
          {
            "--squircle-radius": `${radius}px`,
            "--squircle-smooth": `${smooth}`
          } as any
        }
        className={`${styles.button} ${styles.fill}`}
      >
        Fill
      </div>
      <div
        style={
          {
            "--squircle-radius": `${radius}px`,
            "--squircle-smooth": `${smooth}`
          } as any
        }
        className={`${styles.button} ${styles.outline}`}
      >
        Outline
      </div>
      <div
        style={
          {
            "--squircle-radius": `${radius}px`,
            "--squircle-smooth": `${smooth}`
          } as any
        }
        className={`${styles.button} ${styles.gradient}`}
      >
        Gradient
      </div>
      <div
        style={
          {
            "--squircle-radius": `${radius}px`,
            "--squircle-smooth": `${smooth}`
          } as any
        }
        className={`${styles.button} ${styles.shadow}`}
      >
        Shadow
      </div>
      <div
        style={
          {
            "--squircle-radius": `${radius}px`,
            "--squircle-smooth": `${smooth}`
          } as any
        }
        className={`${styles.button} ${styles.image}`}
      >
        Image
      </div>
      <div className={`${styles.controls}`}>
        <Range
          className={styles.range}
          value={radius.toString()}
          max={30}
          onChange={(e) => {
            setRadius(Number(e.target.value));
          }}
        />
        <Range
          className={styles.range}
          value={smooth.toString()}
          min={0.1}
          max={1}
          step={0.1}
          onChange={(e) => {
            setSmooth(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default ButtonsSection;
