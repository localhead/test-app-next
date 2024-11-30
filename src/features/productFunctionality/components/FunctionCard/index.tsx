import { FC, memo } from "react";

import { TitleWrapper } from "@components/TitleWrapper";
import styles from "./styles.module.scss";

interface TitleLargeProps {}

const FunctionsCardComponent: FC<TitleLargeProps> = (props) => {
  const { ...restProps } = props;

  return (
    <div className={`${styles.container}`} {...restProps}>
      <div className={`${styles.container__title}`}>
        <TitleWrapper textAlign="center">
          <TitleWrapper.Small style={{ userSelect: "none" }}>
            Очень длинный заголовок
          </TitleWrapper.Small>
        </TitleWrapper>
      </div>
      <div className={`${styles.container__image}`}></div>
    </div>
  );
};

export const FunctionsCard = memo(FunctionsCardComponent);
