import { NotFoundText } from "@components/NotFoundText";
import { FC, PropsWithChildren, forwardRef, memo } from "react";
import styles from "./styles.module.scss";
import { DropdownItem } from "./types";

interface DropdownComponentProps
  extends PropsWithChildren,
    React.RefAttributes<HTMLDivElement> {
  options: DropdownItem[] | null;
  onChange: (item: DropdownItem) => void;
  isOpen: boolean;
  isLoading?: boolean;

  isOverlay?: boolean;
  notFoundTitle?: string;
}

const DropdownComponent: FC<DropdownComponentProps> = forwardRef<
  HTMLDivElement,
  DropdownComponentProps
>(
  (
    {
      options,
      children,
      onChange,
      isOpen,
      isLoading,
      isOverlay = false,
      notFoundTitle,
    },
    ref
  ) => {
    const isLoadingClass = isLoading ? styles["dropdown__item-loading"] : "";
    const isEmpty = options && options.length === 0;

    return (
      <>
        {isOverlay && (
          <div
            className={`${styles.dropdown__overlay} ${
              isOpen ? styles["dropdown__overlay--open"] : ""
            }`}
          />
        )}

        <div className={styles.dropdown} ref={ref}>
          <div>{children}</div>
          <div
            className={`${styles["dropdown__menu"]} ${
              isOpen
                ? styles["dropdown__menu--open"]
                : styles["dropdown__menu--closed"]
            }`}
          >
            {options &&
              options.map((item) => {
                const onSelectHandler = () => {
                  onChange(item);
                };

                return (
                  <div
                    key={item.value}
                    className={`${styles["dropdown__item"]} ${isLoadingClass}`}
                    onClick={onSelectHandler}
                  >
                    {item.content}
                  </div>
                );
              })}
            {!isLoading && isEmpty && (
              <div className={styles["dropdown__not-found"]}>
                <NotFoundText />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
);

DropdownComponent.displayName = "DropdownComponent";

export const Dropdown = memo(DropdownComponent);
