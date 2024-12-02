import { FC, memo } from "react";

import { TitleWrapper } from "@components/TitleWrapper";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import styles from "./styles.module.scss";

interface TitleLargeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  margin?: string;

  titleVariant?: "large" | "medium";
}

const SectionWrapperComponent: FC<TitleLargeProps> = (props) => {
  const {
    children,
    title,
    margin = "24px 0px 0px 0px",
    titleVariant = "medium",
    ...restProps
  } = props;

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const isMobileClass = isMobile ? "mobile" : "";

  return (
    <div
      className={`${styles.container} ${styles[isMobileClass]}`}
      style={{ margin: margin }}
      {...restProps}
    >
      {titleVariant === "large" && (
        <TitleWrapper.Large>{title}</TitleWrapper.Large>
      )}
      {titleVariant === "medium" && (
        <TitleWrapper.Medium>{title}</TitleWrapper.Medium>
      )}
      <div className={`${styles.container__content}`}>{children}</div>
    </div>
  );
};

export const SectionWrapper = memo(SectionWrapperComponent);
