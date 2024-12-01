import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface CountryInfoCardWrapperProps {
  items: ReactNode[] | null;
}

export const CountryInfoCardWrapper: FC<CountryInfoCardWrapperProps> = (
  props
) => {
  const { items } = props;

  if (!items) return;

  return <div className={styles.container}>{items}</div>;
};
