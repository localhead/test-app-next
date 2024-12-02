import {
  CountryPricePerDay,
  CountryRecord,
} from "@features/countries/store/types";
import { FC } from "react";
import Flag from "react-world-flags";

import { CustomLink } from "@components/CustomLink";
import { paths } from "@features/routes/paths";
import { CaretIcon } from "@packages/icons";
import { Typography } from "@packages/uiKit/Typography";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { CountryInfoCardBackground } from "./types";

interface CountryInfoCardProps {
  country: CountryRecord["country"];
  price: CountryPricePerDay["amount"];
  symbol: CountryPricePerDay["symbol"];
  iso: CountryRecord["iso"];

  background?: CountryInfoCardBackground;
  url: CountryRecord["url"];
}

export const CountryInfoCard: FC<CountryInfoCardProps> = (props) => {
  const { country, price, symbol, iso, background = "white", url } = props;

  const t = useTranslations("MainPage");

  return (
    <CustomLink href={paths.countryDetail(url)}>
      <div
        className={`${styles.container} ${styles[`container-${background}`]}`}
      >
        <div className={styles.container__left}>
          <Flag
            code={iso}
            style={{ width: 32, height: 32 }}
            className={styles["container__left-flag"]}
          />
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
