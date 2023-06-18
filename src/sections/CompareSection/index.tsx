import React from "react";
import styles from "./style.module.scss";

import Range from "../../components/Range";

const CompareSection = () => {
  const [radius, setRadius] = React.useState(80);
  const [smooth, setSmooth] = React.useState(1);

  return (
    <div className={styles.wrapWidth}>
      <div className={styles.wrap}>
        <div className={`${styles.controls}`}>
          <Range
            className={styles.range}
            value={radius.toString()}
            min={30}
            max={100}
            tooltip={`Radius: ${radius}px`}
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
            tooltip={`Smooth: ${smooth}`}
            onChange={(e) => {
              setSmooth(Number(e.target.value));
            }}
          />
        </div>
        <div className={styles.compare}>
          <div
            style={{
              borderRadius: `${radius}px`
            }}
            className={`${styles.standart}`}
          />
          <div
            style={
              {
                "--squircle-radius": `${radius}px`,
                "--squircle-smooth": `${smooth}`
              } as any
            }
            className={`${styles.squircle}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
