import { SectionWrapper } from "@components/SectionWrapper";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { useGetFunctionCards } from "@features/productFunctionality/hooks/useGetFunctionCards";
import { useMockFunctionCardsData } from "@features/productFunctionality/mock/constants";
import { useTranslations } from "next-intl";
import { FC, memo } from "react";
import styles from "./styles.module.scss";

const ProductFunctionalitySectionComponent: FC = () => {
  const getTranslatedMocks = useMockFunctionCardsData();

  const cardNodes = useGetFunctionCards(getTranslatedMocks);

  const t = useTranslations("MainPage");

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const margin = isMobile ? "12px 0px 116px 0px" : "24px 0px 216px 0px";

  return (
    <SectionWrapper title={t("ProductFunctionality")} margin={margin}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.content}>{cardNodes}</div>
      </div>
    </SectionWrapper>
  );
};

export const ProductFunctionalitySection = memo(
  ProductFunctionalitySectionComponent
);
