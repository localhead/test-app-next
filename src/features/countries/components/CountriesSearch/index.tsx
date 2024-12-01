import { Input } from "@packages/uiKit/Input";
import { FC, useRef, useState } from "react";

import { Loading } from "@components/Loading";
import { useGetCountriesApiData } from "@features/countries/hooks/useGetCountriesApiData";
import { useGetCountryInfoCards } from "@features/countries/hooks/useGetCountryInfoCards";
import { searchByCountryName } from "@features/countries/utils/searchByCountryName";
import { GlassIcon } from "@packages/icons";
import { Dropdown } from "@packages/uiKit/Dropdown";
import { useGetDropdownContentFill } from "@packages/uiKit/Dropdown/hooks/useGetDropdownContentFill";
import styles from "./styles.module.scss";

export const CountriesSearch: FC = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const { data, isLoading, isError } = useGetCountriesApiData();

  const countries = searchByCountryName(data, searchValue);

  const countryNodes = useGetCountryInfoCards(countries, "white");
  const fetchedDateOptions = useGetDropdownContentFill(countryNodes);

  const loadingNode = useGetDropdownContentFill([<Loading key={"Loading"} />]);

  const isOpen = Boolean(searchValue);

  const dropDownClickHandler = () => {};

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.container}>
      <Dropdown
        isOpen={isOpen}
        onChange={dropDownClickHandler}
        options={isLoading ? loadingNode : fetchedDateOptions}
        ref={dropdownRef}
        isLoading={isLoading}
        isOverlay
      >
        <Input
          onChange={setSearchValue}
          placeholder="Найти направление"
          left={<GlassIcon size={20} />}
          variant="filled"
          size="medium"
        />
      </Dropdown>
    </div>
  );
};
