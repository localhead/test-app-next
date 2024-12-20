import {
  CountryPricePerDay,
  CountryRecord,
} from "@features/countries/store/types";
import { FC } from "react";

import { CustomLink } from "@components/CustomLink";
import { CountryFlagIcon } from "@features/countries/components/CountryFlagIcon";
import { paths } from "@features/routes/paths";
import { CaretIcon } from "@packages/icons";
import { Typography } from "@packages/uiKit/Typography";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import {
  CountryInfoCardBackground,
  CountryInfoCardPaddingVariant,
} from "./types";

export interface CountryInfoCardProps {
  country: CountryRecord["country"];
  price: CountryPricePerDay["amount"];
  symbol: CountryPricePerDay["symbol"];
  iso: CountryRecord["iso"];

  background?: CountryInfoCardBackground;
  url: CountryRecord["url"];

  paddingVariant?: CountryInfoCardPaddingVariant;
}

export const CountryInfoCard: FC<CountryInfoCardProps> = (props) => {
  const {
    country,
    price,
    symbol,
    iso,
    background = "white",
    paddingVariant = "padding-both",
    url,
  } = props;

  const t = useTranslations("MainPage");

  const flag = <CountryFlagIcon iso={iso} />;

  return (
    <CustomLink href={paths.countryDetail(url)}>
      <div
        className={`${styles.container} ${styles[`container-${background}`]} ${
          styles[`container-${paddingVariant}`]
        }`}
      >
        <div className={styles.container__left}>
          {flag}
          {/*           <Flag
            code={iso}
            style={{ width: 32, height: 32 }}
            className={styles["container__left-flag"]}
          /> */}
          <div className={styles["container__left-info"]}>
            <Typography size={14} weight="500" maxLines="1" ellipsis>
              {country}
            </Typography>
            <Typography size={10} weight="400">
              {`${t("CountryPriceFrom")} ${symbol} ${price}/GB`}
            </Typography>
          </div>
        </div>
        <CaretIcon
          className={styles.container__icon}
          size={12}
          strokeWidth={2}
        />
      </div>{" "}
    </CustomLink>
  );
};
