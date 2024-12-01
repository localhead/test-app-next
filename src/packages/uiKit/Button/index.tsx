import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  forwardRef,
  memo,
} from "react";
import styles from "./styles.module.scss";
import { ButtonColors, ButtonSize } from "./types";

// ButtonProps should extend React.RefAttributes<HTMLButtonElement> to allow ref forwarding
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
  color?: ButtonColors;
  size?: ButtonSize;
  disabled?: boolean;
  isActive?: boolean;
  block?: boolean;
  icon?: ReactNode;
}

const ButtonComponent: FC<PropsWithChildren<ButtonProps>> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    color = "medium",
    size = "primary",
    block = false,
    children,
    isActive = false,
    icon,
    ...restProps
  } = props;

  const blockClass = block ? "block" : "";
  const activeClass = isActive ? "active" : "";

  return (
    <button
      ref={ref}
      className={`${styles.button} ${styles[size]} ${styles[color]} ${styles[blockClass]} ${styles[activeClass]}`}
      {...restProps}
    >
      {children}
      {icon && icon}
    </button>
  );
});

ButtonComponent.displayName = "ButtonComponent";

export const Button = memo(ButtonComponent);
