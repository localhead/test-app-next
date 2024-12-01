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
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      onChange,
      left,
      right,
      variant = "filled",
      size = "medium",
      className,
      error,
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

    const errorClass = error ? "errorStyle" : "";

    return (
      <div
        className={`${styles["input-container"]} ${
          styles[`input-container--${variant}`]
        } ${styles[`input-container--${size}`]} ${className || ""}`}
        style={style}
      >
        <div
          className={`${styles["input-container__inner"]} ${
            styles[`input-container__inner--${size}`]
          } ${styles[`input-container__inner--${variant}`]} ${
            styles[`input-container__inner--${errorClass}`]
          }`}
        >
          {left && (
            <div className={styles["input-container__inner_left"]}>{left}</div>
          )}
          <input
            ref={ref}
            onChange={onChangeHandler}
            className={`${styles["input-container__inner_input"]} ${
              styles[`input-container__inner_input--${size}`]
            } ${styles[`input-container__inner_input--${variant}`]}`}
            {...restProps}
          />

          {right && (
            <div className={styles["input-container__inner_right"]}>
              {right}
            </div>
          )}
        </div>
        {error && (
          <div className={styles["input-container__errorText"]}>{error}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
