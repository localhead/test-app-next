import { SectionWrapper } from "@components/SectionWrapper";
import { useGetFunctionCards } from "@features/productFunctionality/hooks/useGetFunctionCards";
import { mockFunctionCardsData } from "@features/productFunctionality/mock/constants";
import { FC } from "react";
import styles from "./styles.module.scss";

export const ProductFunctionalitySection: FC = () => {
  const cardNodes = useGetFunctionCards(mockFunctionCardsData);

  return (
    <SectionWrapper title="Как это работает" margin="24px 0px 216px 0px">
      <div className={`${styles.wrapper}`}>
        <div className={styles.content}>{cardNodes}</div>
      </div>
    </SectionWrapper>
  );
};
