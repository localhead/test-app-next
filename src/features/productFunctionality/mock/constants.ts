import { useTranslations } from "next-intl";
import { FunctionCardItem } from "./../types";

export const useMockFunctionCardsData = (): FunctionCardItem[] => {
  const t = useTranslations("MainPage");

  return [
    {
      id: 0,
      title: t("ProductFunctionalityMockCard1"),
      image: null,
    },
    { id: 1, title: t("ProductFunctionalityMockCard2"), image: null },
    { id: 2, title: t("ProductFunctionalityMockCard3"), image: null },
    {
      id: 3,
      title: t("ProductFunctionalityMockCard4"),
      image: null,
    },
  ];
};
