import React from "react";
import styles from "./style.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const [toggle, setToggle] = React.useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`${styles.toggle} ${props.className}`}
      onClick={handleClick}
    />
  );
};

ThemeSwitcher.defaultProps = {
  className: null
};

export default ThemeSwitcher;
