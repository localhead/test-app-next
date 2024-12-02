import { FC, PropsWithoutRef } from "react";
import styles from "./styles.module.scss";

interface TitleLargeProps
  extends PropsWithoutRef<JSX.IntrinsicElements["h4"]> {}

export const Small: FC<TitleLargeProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <h4 className={styles.title} {...restProps}>
      {children}
    </h4>
  );
};
