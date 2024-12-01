import { FC } from "react";

import { LanguageItem } from "@features/languages/types";
import { CaretIcon } from "@packages/icons";
import { Typography } from "@packages/uiKit/Typography";
import styles from "./styles.module.scss";

interface LanguageInfoCardProps {
  lang: LanguageItem["label"];
}

export const LanguageInfoCard: FC<LanguageInfoCardProps> = (props) => {
  const { lang } = props;

  return (
    <div className={styles.container}>
      <Typography size={14} weight="500" maxLines="1" ellipsis>
        {lang}
      </Typography>
      <CaretIcon className={styles.container__icon} size={12} strokeWidth={2} />
    </div>
  );
};
