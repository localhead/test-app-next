import { FC } from "react";

import { SectionWrapper } from "@components/SectionWrapper";
import { CountryRecord } from "@features/countries/store/types";
import { Typography } from "@packages/uiKit/Typography";

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

  return (
    <SectionWrapper title={name} titleVariant="large">
      <div className={styles.container}>
        <Typography size={14} weight="400">
          Туристические SIM-карты с интернетом
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