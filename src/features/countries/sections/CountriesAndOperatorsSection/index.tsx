import { FC } from "react";

import { SectionWrapper } from "@components/SectionWrapper";
import { CountryRecord } from "@features/countries/store/types";

import { Typography } from "@packages/uiKit/Typography";
import Flag from "react-world-flags";
import styles from "./styles.module.scss";

interface CountriesAndOperatorsSectionProps {
  name: CountryRecord["country"];
  iso: CountryRecord["iso"];
}

export const CountriesAndOperatorsSection: FC<
  CountriesAndOperatorsSectionProps
> = (props) => {
  const { name, iso, ...restProps } = props;

  return (
    <SectionWrapper title={"Страны и операторы"} titleVariant="medium">
      <div className={styles.container}>
        <div className={styles.container__left}>
          <Flag
            code={iso}
            style={{ width: 32, height: 32 }}
            className={styles["container__left-flag"]}
          />
          <Typography size={17} weight="400">
            {name}
          </Typography>
        </div>
        <div className={styles.container__right}>
          <Typography size={14} weight="500">
            Оператор 1
          </Typography>
          <Typography size={14} weight="500">
            Оператор 2
          </Typography>
        </div>
      </div>
    </SectionWrapper>
  );
};