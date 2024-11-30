import { FC, PropsWithoutRef } from "react";

import styles from "./styles.module.scss";
import { ContainerVariants } from "./types";

interface ContainerProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
  variant: ContainerVariants;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, variant } = props;

  return (
    <div className={`${styles.container} ${styles[variant]}`}>{children}</div>
  );
};
