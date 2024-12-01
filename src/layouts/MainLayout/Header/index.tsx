import { FC } from "react";
import { Container } from "../Container";

import Image from "next/image";
import styles from "./styles.module.scss";

import { AuthModal } from "@features/auth/components/AuthModal";
import { LanguageSelector } from "@features/languages/components/LanguageSelector";
import { paths } from "@features/routes/paths";
import Link from "next/link";
import logo from "public/assets/images/yesimLogo.png";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container variant="wide">
        <div className={styles["header__inner"]}>
          <Link href={paths.root()}>
            <Image
              alt="logo"
              src={logo}
              width={104}
              height={30}
              quality={100}
            />
          </Link>
          <div className={styles["header__buttons"]}>
            <LanguageSelector />
            <AuthModal />
          </div>
        </div>
      </Container>
    </header>
  );
};
