import { useMemo } from "react";
import {
  CountryInfoCard,
  CountryInfoCardProps,
} from "../components/CountryInfoCard";
import { CountryRecord } from "../store/types";

export const useGetCountryInfoCards = (
  data: CountryRecord[] | null,
  background?: CountryInfoCardProps["background"],
  paddingVariant?: CountryInfoCardProps["paddingVariant"]
) => {
  return useMemo(() => {
    return data
      ? data.map((item) => {
          return (
            <CountryInfoCard
              key={item.id}
              country={item.country}
              iso={item.iso}
              price={item.price_per_day.amount}
              symbol={item.price_per_day.symbol}
              background={background}
              paddingVariant={paddingVariant}
              url={item.url}
            />
          );
        })
      : null;
  }, [background, data, paddingVariant]);
};
