import { FC, PropsWithoutRef } from "react";
import styles from "./styles.module.scss";

interface TitleLargeProps
  extends PropsWithoutRef<JSX.IntrinsicElements["h2"]> {}

export const Large: FC<TitleLargeProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <h2 className={styles.title} {...restProps}>
      {children}
    </h2>
  );
};
