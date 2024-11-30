import { Button } from "@packages/uiKit/Button";
import { FC, useState } from "react";
import { Container } from "../Container";

import Image from "next/image";
import styles from "./styles.module.scss";

import { paths } from "@features/routes/paths";
import { Dropdown } from "@packages/uiKit/Dropdown";
import { DropdownItem } from "@packages/uiKit/Dropdown/types";
import Link from "next/link";
import logo from "public/assets/images/yesimLogo.png";



export const Header: FC = () => {
  const [selectedValue, setSelectedValue] = useState<DropdownItem>({
    content: <>Eng</>,
    value: 0,
  });

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
            <Dropdown
              onChange={setSelectedValue}
              selected={selectedValue}
              options={[
                { content: <>End</>, value: 0 },
                { content: <>Rus</>, value: 1 },
              ]}
            />
            <Button color="primary" size="medium">
              Войти
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
