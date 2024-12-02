import { FC, ReactNode } from "react";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import styles from "./styles.module.scss";

interface CountryInfoCardWrapperProps {
  items: ReactNode[] | null;
}

export const CountryInfoCardWrapper: FC<CountryInfoCardWrapperProps> = (
  props
) => {
  const { items } = props;

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const isMobileClass = isMobile ? "mobile" : "";

  if (!items) return;

  return (
    <div className={`${styles.container} ${styles[isMobileClass]}`}>
      {items}
    </div>
  );
};
