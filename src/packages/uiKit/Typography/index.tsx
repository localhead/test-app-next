import React from "react";

export type TypographyProps = {
  size?: number;
  color?: string;
  weight?: "400" | "500" | "600" | "700";
  lineHeightMultiplier?: string;
  nowrap?: boolean;
  ellipsis?: boolean;
  as?: keyof JSX.IntrinsicElements;
  maxLines?: number;
  lines?: number;
  title?: string;
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
    lines,
    ...restProps
  } = props;

  return (
    <p
      className={styles.typography}
      style={{
        
        fontSize: size ? `${size}px` : "16px",
        fontWeight: weight ? `${weight}` : "400",
        color: color ? `var(${color})` : "black",
        whiteSpace: nowrap ? `nowrap` : "normal",
        textOverflow: ellipsis ? "ellipsis" : "initial",
        overflow: ellipsis ? "hidden" : "auto",
      }}
      {...restProps}
    />
  );
};
