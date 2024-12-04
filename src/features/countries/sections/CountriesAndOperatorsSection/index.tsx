import { FC, memo } from "react";

import { SectionWrapper } from "@components/SectionWrapper";
import { CountryRecord } from "@features/countries/store/types";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { CountryFlagIcon } from "@features/countries/components/CountryFlagIcon";
import { Typography } from "@packages/uiKit/Typography";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

interface CountriesAndOperatorsSectionProps {
  name: CountryRecord["country"];
  iso: CountryRecord["iso"];
}

const CountriesAndOperatorsSectionComponent: FC<
  CountriesAndOperatorsSectionProps
> = (props) => {
  const { name, iso, ...restProps } = props;

  const t = useTranslations("CountryPage");

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const margin = isMobile ? "12px 0px" : "40px 0px";

  const flag = <CountryFlagIcon iso={iso} />;

  return (
    <SectionWrapper
      title={t("CountriesAndOperatorsTitle")}
      titleVariant="medium"
      margin={margin}
    >
      <div className={styles.container}>
        <div className={styles.container__left}>
          {flag}
          <Typography size={17} weight="400">
            {name}
          </Typography>
        </div>
        <div className={styles.container__right}>
          <Typography size={14} weight="500">
            {t("CountriesAndOperatorsOperator")} 1
          </Typography>
          <Typography size={14} weight="500">
            {t("CountriesAndOperatorsOperator")} 2
          </Typography>
        </div>
      </div>
    </SectionWrapper>
  );
};

export const CountriesAndOperatorsSection = memo(
  CountriesAndOperatorsSectionComponent
);
