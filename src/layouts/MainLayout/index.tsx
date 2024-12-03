import { FC, PropsWithoutRef, memo } from "react";
import { Header } from "./Header";

import { Container } from "./Container";
import styles from "./styles.module.scss";

interface MainLayoutProps
  extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {}

const MainLayoutComponent: FC<MainLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles["layout-container"]}>
      <MainLayout.Header />
      <Container variant="inner">{children}</Container>
    </div>
  );
};

export const MainLayout = memo(
  MainLayoutComponent
) as unknown as typeof MainLayoutComponent & {
  Header: typeof Header;
};

MainLayout.Header = Header;
