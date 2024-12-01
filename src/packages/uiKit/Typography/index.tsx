import React from "react";

export type TypographyProps = {
  size?: number;
  color?: string;
  weight?: "400" | "500" | "600" | "700";
  lineHeightMultiplier?: string;
  nowrap?: boolean;
  ellipsis?: boolean;
  as?: keyof JSX.IntrinsicElements;
  maxLines?: string;
} & React.PropsWithChildren<React.PropsWithoutRef<JSX.IntrinsicElements["p"]>>;

import styles from "./styles.module.scss";

export const Typography: React.FC<TypographyProps> = (props) => {
  const {
    size,
    color,
    weight,
    lineHeightMultiplier = 1.2,
    nowrap = false,
    ellipsis = false,
    maxLines,

    ...restProps
  } = props;

  const isEllipsis = ellipsis ? "ellipsis" : "";
  const isNowrap = nowrap ? "nowrap" : "";

  return (
    <p
      className={`${styles.typography} ${styles[isEllipsis]} ${styles[isNowrap]}`}
      style={{
        fontSize: size ? `${size}px` : "16px",
        fontWeight: weight ? `${weight}` : "400",
        color: color ? `var(${color})` : "black",
        WebkitLineClamp: maxLines,
      }}
      {...restProps}
    />
  );
};
