import { FC, PropsWithoutRef } from "react";
import styles from "./styles.module.scss";

interface TitleLargeProps
  extends PropsWithoutRef<JSX.IntrinsicElements["h3"]> {}

export const Medium: FC<TitleLargeProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <h2 className={styles.title} {...restProps}>
      {children}
    </h2>
  );
};
