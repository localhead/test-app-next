import { SectionWrapper } from "@components/SectionWrapper";
import { useGetFunctionCards } from "@features/productFunctionality/hooks/useGetFunctionCards";
import { useMockFunctionCardsData } from "@features/productFunctionality/mock/constants";
import { useTranslations } from "next-intl";
import { FC } from "react";
import styles from "./styles.module.scss";

export const ProductFunctionalitySection: FC = () => {
  const getTranslatedMocks = useMockFunctionCardsData();

  const cardNodes = useGetFunctionCards(getTranslatedMocks);

  const t = useTranslations("MainPage");

  return (
    <SectionWrapper
      title={t("ProductFunctionality")}
      margin="24px 0px 216px 0px"
    >
      <div className={`${styles.wrapper}`}>
        <div className={styles.content}>{cardNodes}</div>
      </div>
    </SectionWrapper>
  );
};
