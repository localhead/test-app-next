import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";

interface CustomLinkProps extends LinkProps, PropsWithChildren {
  className?: string;
}

import styles from "./styles.module.scss";

export const CustomLink: FC<CustomLinkProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <Link
      className={`${className || ""} ${styles["custom-link"]}`}
      {...restProps}
    >
      {children}
    </Link>
  );
};
