import { FC } from "react";

import { SectionWrapper } from "@components/SectionWrapper";
import { CountryRecord } from "@features/countries/store/types";
import { Typography } from "@packages/uiKit/Typography";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { useTranslations } from "next-intl";
import Flag from "react-world-flags";
import styles from "./styles.module.scss";

interface CountryDetailInfoSectionProps {
  name: CountryRecord["country"];
  iso: CountryRecord["iso"];
}

export const CountryDetailInfoSection: FC<CountryDetailInfoSectionProps> = (
  props
) => {
  const { name, iso, ...restProps } = props;

  const t = useTranslations("CountryPage");

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const margin = isMobile ? "12px 0px" : "40px 0px";

  return (
    <SectionWrapper title={name} titleVariant="large" margin={margin}>
      <div className={styles.container}>
        <Typography size={14} weight="400">
          {t("CountryDetailInfoDesc")}
        </Typography>
        <div className={styles.container__right}>
          <Flag
            code={iso}
            style={{ width: 32, height: 32 }}
            className={styles["container__right-flag"]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
