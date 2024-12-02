import { TitleWrapper } from "@components/TitleWrapper";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const MainTitle: FC = () => {
  const t = useTranslations("MainPage");

  const width = useWindowWidth();
  const isMobile = width === "mobile";

  const padding = isMobile ? "25px 8px" : "45px 0px";

  return (
    <TitleWrapper padding={padding} textAlign="center">
      <TitleWrapper.Large>{t("title")}</TitleWrapper.Large>
    </TitleWrapper>
  );
};