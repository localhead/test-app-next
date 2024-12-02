import { FC, useState } from "react";

import { Loading } from "@components/Loading";
import { SectionWrapper } from "@components/SectionWrapper";
import { CountryInfoCardWrapper } from "@features/countries/components/CountryInfoCardWrapper";
import { useGetCountriesApiData } from "@features/countries/hooks/useGetCountriesApiData";
import { useGetCountryInfoCards } from "@features/countries/hooks/useGetCountryInfoCards";
import { sortCountriesByPopularity } from "@features/countries/utils/sortByCountriesPopularity";
import { Button } from "@packages/uiKit/Button";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const PopularCountriesSection: FC = () => {
  const { data, isLoading, isError } = useGetCountriesApiData();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const countiesFromMostPopular = sortCountriesByPopularity(data);
  const nodes = useGetCountryInfoCards(countiesFromMostPopular, "gray");

  const expandableNodes = nodes && nodes.slice(0, isExpanded ? -1 : 10);

  const onExpandHandler = () => {
    setIsExpanded((prev) => !prev);
  };

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
