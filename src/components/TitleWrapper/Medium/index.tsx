import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { FC, PropsWithoutRef } from "react";
import styles from "./styles.module.scss";

interface TitleLargeProps
  extends PropsWithoutRef<JSX.IntrinsicElements["h3"]> {}

export const Medium: FC<TitleLargeProps> = (props) => {
  const { children, ...restProps } = props;

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const isMobileClass = isMobile ? "mobile" : "";

  return (
    <h3 className={`${styles.title} ${styles[isMobileClass]}`} {...restProps}>
      {children}
    </h3>
  );
};
