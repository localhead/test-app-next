import { FC, memo } from "react";

import { TitleWrapper } from "@components/TitleWrapper";
import styles from "./styles.module.scss";

interface TitleLargeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  margin?: string;
}

const SectionWrapperComponent: FC<TitleLargeProps> = (props) => {
  const { children, title, margin = "0", ...restProps } = props;

  return (
    <div
      className={`${styles.container}`}
      style={{ margin: margin }}
      {...restProps}
    >
      <TitleWrapper.Medium>{title}</TitleWrapper.Medium>
      <div className={`${styles.container__content}`}>{children}</div>
    </div>
  );
};

export const SectionWrapper = memo(SectionWrapperComponent);
