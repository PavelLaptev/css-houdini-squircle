import React from "react";
import styles from "./style.module.scss";

interface RangeProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  value?: string;
  step?: number;
  className?: string;
  tooltip?: string;
}

const Range: React.FC<RangeProps> = (props) => {
  const [value, setValue] = React.useState(props.value || "0");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      {props.tooltip !== "" ? (
        <div
          style={{
            left: `${
              ((Number(value) - props.min!) / (props.max! - props.min!)) * 100
            }%`
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
  value: "1",
  step: 1,
  className: "",
  tooltip: ""
};

export default Range;
