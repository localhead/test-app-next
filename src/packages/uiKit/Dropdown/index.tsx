import { CaretIcon } from "@packages/icons";
import { FC, memo, useRef, useState } from "react";
import useOutsideClick from "../utils/useOutsideClick";
import styles from "./styles.module.scss";
import { DropdownItem } from "./types";

interface DropdownComponentProps {
  selected: DropdownItem;
  options: DropdownItem[];
  onChange: (item: DropdownItem) => void;
}

const DropdownComponent: FC<DropdownComponentProps> = ({
  selected,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const isButtonActive = isOpen ? styles.active : "";

  const selectRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick([selectRef, dropdownRef], toggleHandler, isOpen);

  return (
    <div className={styles.dropdown}>
      <button
        ref={selectRef}
        className={`${styles["dropdown__button"]} ${isButtonActive}`}
        onClick={toggleHandler}
      >
        {selected.content}
        <CaretIcon
          size={12}
          strokeWidth={2}
          className={`${styles["dropdown__icon"]} ${
            isOpen ? styles["dropdown__icon--rotated"] : ""
          }`}
        />
      </button>
      <div
        ref={dropdownRef}
        className={`${styles["dropdown__menu"]} ${
          isOpen ? styles["dropdown__menu--open"] : ""
        }`}
      >
        {options.map((item) => {
          const onSelectHandler = () => {
            onChange(item);
            setIsOpen(false);
          };

          return (
            <div
              key={item.value}
              className={styles["dropdown__item"]}
              onClick={onSelectHandler}
            >
              {item.content}
              <CaretIcon
                size={12}
                strokeWidth={2}
                className={styles["dropdown__item-icon"]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Dropdown = memo(DropdownComponent);
