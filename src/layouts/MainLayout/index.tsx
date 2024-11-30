import { FC, PropsWithoutRef } from "react";
import { Header } from "./Header";

import { Container } from "./Container";
import styles from "./styles.module.scss";

interface MainLayoutProps
  extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {}

export const MainLayout: FC<MainLayoutProps> & {
  Header: typeof Header;
} = (props) => {
  const { children } = props;

  return (
    <div className={styles["layout-container"]}>
      <MainLayout.Header />
      <main>
        <Container variant="inner">{children}</Container>
      </main>
    </div>
  );
};

MainLayout.Header = Header;
