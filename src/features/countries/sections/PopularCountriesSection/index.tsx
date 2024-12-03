import { FC, memo, useCallback, useState } from "react";

import { Loading } from "@components/Loading";
import { SectionWrapper } from "@components/SectionWrapper";
import { CountryInfoCardWrapper } from "@features/countries/components/CountryInfoCardWrapper";
import { useGetCountriesApiData } from "@features/countries/hooks/useGetCountriesApiData";
import { useGetCountryInfoCards } from "@features/countries/hooks/useGetCountryInfoCards";
import { sortCountriesByPopularity } from "@features/countries/utils/sortByCountriesPopularity";
import { Button } from "@packages/uiKit/Button";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const PopularCountriesSectionComponent: FC = () => {
  const { data, isLoading, isError } = useGetCountriesApiData();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const width = useWindowWidth();
  const isMobile = width === "mobile";

  const countiesFromMostPopular = sortCountriesByPopularity(data);
  const nodes = useGetCountryInfoCards(
    countiesFromMostPopular,
    isMobile ? "white" : "gray",
    isMobile ? "padding-tops" : "padding-both"
  );

  const expandableNodes = nodes && nodes.slice(0, isExpanded ? -1 : 10);

  const onExpandHandler = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const t = useTranslations("MainPage");

  return (
    <SectionWrapper title={t("PopularCountriesTitle")}>
      <div className={styles.container}>
        {isLoading && <Loading padding="100px 0px" />}
        <CountryInfoCardWrapper items={expandableNodes} />
        <Button
          size="medium"
          color={isExpanded ? "secondary-outlined" : "primary"}
          block
          onClick={onExpandHandler}
        >
          {isExpanded
            ? t("PopularCountriesButtonExpanded")
            : t("PopularCountriesButtonShrink")}
        </Button>
      </div>
    </SectionWrapper>
  );
};

export const PopularCountriesSection = memo(PopularCountriesSectionComponent);
