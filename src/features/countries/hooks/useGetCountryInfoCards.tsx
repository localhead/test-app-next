import { useMemo } from "react";
import { CountryInfoCard } from "../components/CountryInfoCard";
import { CountryInfoCardBackground } from "../components/CountryInfoCard/types";
import { CountryRecord } from "../store/types";

export const useGetCountryInfoCards = (
  data: CountryRecord[] | null,
  background: CountryInfoCardBackground
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
              url={item.url}
            />
          );
        })
      : null;
  }, [background, data]);
};
