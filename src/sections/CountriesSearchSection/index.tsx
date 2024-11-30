import { Input } from "@packages/uiKit/Input";
import { FC, useState } from "react";

import { GlassIcon } from "@packages/icons";
import styles from "./styles.module.scss";

export const CountriesSearchSection: FC = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <Input
        onChange={setSearchValue}
        placeholder="Найти направление"
        left={<GlassIcon size={20} />}
        variant="filled"
        size="medium"
      />
    </div>
  );
};
