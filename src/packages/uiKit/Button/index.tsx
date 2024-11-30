import { ButtonColors, ButtonSize } from "./types";

import React, { FC, PropsWithChildren, memo } from "react";
import styles from "./styles.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColors;
  size?: ButtonSize;

  disabled?: boolean;
  isActive?: boolean;
  block?: boolean;
}

export const ButtonComponent: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    color = "medium",
    size = "primary",
    block = false,
    children,
    isActive = false,
    ...restProps
  } = props;

  const blockClass = block ? "block" : "";

  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${styles[blockClass]}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
