import { FC, PropsWithoutRef } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import styles from "./styles.module.scss";
import { ContainerVariants } from "./types";

interface ContainerProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
  variant: ContainerVariants;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, variant } = props;

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const isMobileClass = isMobile ? "mobile" : "";

  return (
    <div
      className={`${styles.container} ${styles[variant]} ${styles[isMobileClass]}`}
    >
      {children}
    </div>
  );
};
