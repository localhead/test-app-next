import { Input } from "@packages/uiKit/Input";
import { FC, useRef, useState } from "react";

import { Loading } from "@components/Loading";
import { NotFoundText } from "@components/NotFoundText";
import { useGetCountriesApiData } from "@features/countries/hooks/useGetCountriesApiData";
import { useGetCountryInfoCards } from "@features/countries/hooks/useGetCountryInfoCards";
import { searchByCountryName } from "@features/countries/utils/searchByCountryName";
import { GlassIcon } from "@packages/icons";
import { Dropdown } from "@packages/uiKit/Dropdown";
import { useGetDropdownContentFill } from "@packages/uiKit/Dropdown/hooks/useGetDropdownContentFill";
import useOutsideClick from "@packages/uiKit/utils/useOutsideClick";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const CountriesSearch: FC = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const { data, isLoading, isError } = useGetCountriesApiData();

  const countries = searchByCountryName(data, searchValue);

  const countryNodes = useGetCountryInfoCards(countries, "white");

  const fetchedDateOptions = useGetDropdownContentFill(countryNodes);
  const loadingNode = useGetDropdownContentFill([<Loading key={"loading"} />]);
  const notFoundNode = useGetDropdownContentFill([
    <NotFoundText key={"not-found"} />,
  ]);

  const isEmptyResults = fetchedDateOptions && fetchedDateOptions.length === 0;

  const isOpen = Boolean(searchValue);

  const dropDownClickHandler = () => {
    setSearchValue("");
  };

  const options = isLoading
    ? loadingNode
    : isEmptyResults
    ? notFoundNode
    : fetchedDateOptions;

  const t = useTranslations("MainPage");

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick([dropdownRef], dropDownClickHandler, isOpen);

  return (
    <div className={styles.container}>
      <Dropdown
        isOpen={isOpen}
        onChange={dropDownClickHandler}
        options={options}
        ref={dropdownRef}
        isLoading={isLoading}
        isOverlay
      >
        <Input
          onChange={setSearchValue}
          placeholder={t("searchPlaceholder")}
          left={<GlassIcon size={20} />}
          variant="filled"
          size="medium"
        />
      </Dropdown>
    </div>
  );
};
