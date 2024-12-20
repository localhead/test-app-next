import { CaretIcon } from "@packages/icons";
import { FC, memo, useRef, useState } from "react";

import { useGetLanguageInfoCards } from "@features/languages/hooks/useGetLanguageInfoCards";
import { languageMockData } from "@features/languages/mock/constants";

import { LanguageItem } from "@features/languages/types";
import { Button } from "@packages/uiKit/Button";
import { Dropdown } from "@packages/uiKit/Dropdown";
import { useGetDropdownContentFill } from "@packages/uiKit/Dropdown/hooks/useGetDropdownContentFill";
import { DropdownItem } from "@packages/uiKit/Dropdown/types";
import useOutsideClick from "@packages/uiKit/utils/useOutsideClick";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const LanguageSelectorComponent: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { locale, push, asPath } = useRouter();

  // Подгружаем в стейт изначальный язык в урле
  const initLocale = languageMockData.find((lang) => locale === lang.locale);

  const [selectedValue, setSelectedValue] = useState<LanguageItem["label"]>(
    initLocale?.label ?? languageMockData[0].label
  );

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownSelectHandler = (item: DropdownItem) => {
    // ищем выбранный язык в базе
    const selectedLang =
      languageMockData.find((lang) => lang.id === item.value) ??
      languageMockData[0];

    setSelectedValue(selectedLang.label);
    push(asPath, undefined, { locale: selectedLang.locale });

    setIsOpen(false);
  };

  const selectRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const nodes = useGetLanguageInfoCards(languageMockData);
  const dropdownNodes = useGetDropdownContentFill(nodes);

  useOutsideClick([selectRef, dropdownRef], toggleHandler, isOpen);

  return (
    <div className={styles.dropdown}>
      <Dropdown
        isOpen={isOpen}
        onChange={dropdownSelectHandler}
        options={dropdownNodes}
        ref={dropdownRef}
      >
        <Button
          ref={selectRef}
          color="text"
          size="small"
          icon={
            <CaretIcon
              size={12}
              strokeWidth={2}
              className={`${styles["dropdown__icon"]} ${
                isOpen ? styles["dropdown__icon--rotated"] : ""
              }`}
            />
          }
          onClick={toggleHandler}
          isActive={isOpen}
          style={{ textTransform: "uppercase" }}
        >
          {selectedValue}
        </Button>
      </Dropdown>
    </div>
  );
};

export const LanguageSelector = memo(LanguageSelectorComponent);
