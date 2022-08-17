import React, { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  text: string;
  variant?: string;
}

const Button: FC<IButton> = ({ variant = "primary", text }) => {
  return (
    <>
      <button className={[styles.btn, styles[variant]].join(" ")}>
        {text}
      </button>
    </>
  );
};

export default Button;
