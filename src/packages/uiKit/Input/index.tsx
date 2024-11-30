import React, { ReactNode, useMemo } from "react";
import styles from "./styles.module.scss";
import { InputSize, InputVariant } from "./types";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "size"
  > {
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  left?: ReactNode;
  right?: ReactNode;
  variant?: InputVariant;
  size?: InputSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      onChange,
      left,
      right,
      variant = "outlined",
      size = "medium",
      className,
      style,
      ...restProps
    } = props;

    const onChangeHandler = useMemo(() => {
      return onChange
        ? (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value, event);
          }
        : undefined;
    }, [onChange]);

    return (
      <div
        className={`${styles.inputContainer} ${
          styles[`inputContainer--${variant}`]
        } ${styles[`inputContainer--${size}`]} ${className || ""}`}
        style={style}
      >
        {left && <div className={styles.inputContainer__left}>{left}</div>}
        <input
          ref={ref}
          onChange={onChangeHandler}
          className={`${styles.inputContainer__input} ${
            styles[`inputContainer__input--${size}`]
          }`}
          {...restProps}
        />
        {right && <div className={styles.inputContainer__right}>{right}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
