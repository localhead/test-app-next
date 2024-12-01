import { FC, memo } from "react";

import { TitleWrapper } from "@components/TitleWrapper";
import { FunctionCardItem } from "@features/productFunctionality/types";
import styles from "./styles.module.scss";

interface TitleLargeProps {
  title: FunctionCardItem["title"];
  image: FunctionCardItem["image"];
}

const FunctionsCardComponent: FC<TitleLargeProps> = (props) => {
  const { title, image, ...restProps } = props;

  const isImage = Boolean(image);

  return (
    <div className={`${styles.container}`} {...restProps}>
      <div className={`${styles.container__title}`}>
        <TitleWrapper textAlign="center" maxLines="3">
          <TitleWrapper.Small>{title}</TitleWrapper.Small>
        </TitleWrapper>
      </div>
      {isImage ? <div /> : <div className={`${styles.container__image}`}></div>}
    </div>
  );
};

export const FunctionsCard = memo(FunctionsCardComponent);
