import React from "react";
import styles from "./style.module.scss";

const Range = (props) => {
  const [value, setValue] = React.useState(props.value);

  const handleChange = (e) => {
    setValue(e.target.value);
    props.onChange(e);
  };

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      {props.tooltip !== "" ? (
        <div
          style={{
            left: `${((value - props.min) / (props.max - props.min)) * 100}%`,
          }}
          className={styles.tooltip}
        >
          {props.tooltip}
        </div>
      ) : null}
      <input
        className={`${styles.range} `}
        value={value}
        onChange={handleChange}
        type="range"
        step={props.step}
        min={props.min}
        max={props.max}
      />
    </div>
  );
};

Range.defaultProps = {
  onChange: () => {},
  min: 0,
  max: 10,
  value: 1,
  step: 1,
  className: null,
  tooltip: "",
};

export default Range;
