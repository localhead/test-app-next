import { FC } from "react";
import { Large } from "./Large";
import { Medium } from "./Medium";
import { Small } from "./Small";
import styles from "./styles.module.scss";
import { TitleTextAlignVariant } from "./types";

interface TitleLargeProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  textAlign?: TitleTextAlignVariant;
}

export const TitleWrapper: FC<TitleLargeProps> & {
  Large: typeof Large;
  Medium: typeof Medium;
  Small: typeof Small;
} = (props) => {
  const { children, padding = "0", textAlign = "left", ...restProps } = props;

  const textAlignClass = styles[`container--align-${textAlign}`];

  return (
    <div
      className={`${styles.container} ${textAlignClass}`}
      style={{ padding: padding }}
      {...restProps}
    >
      {children}
    </div>
  );
};

TitleWrapper.Large = Large;
TitleWrapper.Medium = Medium;
TitleWrapper.Small = Small;
