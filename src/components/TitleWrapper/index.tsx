import { FC } from "react";
import { Large } from "./Large";
import { Medium } from "./Medium";
import { Small } from "./Small";
import styles from "./styles.module.scss";
import { TitleTextAlignVariant } from "./types";

export interface TitleLargeProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  textAlign?: TitleTextAlignVariant;

  maxLines?: string;
}

export const TitleWrapper: FC<TitleLargeProps> & {
  Large: typeof Large;
  Medium: typeof Medium;
  Small: typeof Small;
} = (props) => {
  const {
    children,
    padding = "0",
    textAlign = "left",
    maxLines,
    ...restProps
  } = props;

  const textAlignClass = styles[`container--align-${textAlign}`];

  return (
    <div
      className={`${styles.container} ${textAlignClass}`}
      style={{ padding: padding, WebkitLineClamp: maxLines }}
      {...restProps}
    >
      {children}
    </div>
  );
};

TitleWrapper.Large = Large;
TitleWrapper.Medium = Medium;
TitleWrapper.Small = Small;
