import { TitleWrapper } from "@components/TitleWrapper";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { useAppSelector } from "@features/store/hooks";
import { Typography } from "@packages/uiKit/Typography";
import { useTranslations } from "next-intl";
import { FC, memo } from "react";

const AuthSuccessSectionComponent: FC = () => {
  const authState = useAppSelector((store) => store.auth);

  const t = useTranslations("AuthPage");

  const width = useWindowWidth();
  const isMobile = width === "mobile";

  const size = isMobile ? 22 : 34;

  if (!authState.isAuth)
    return (
      <TitleWrapper textAlign="center">
        <Typography size={size} weight="700">
          {t("NotAuth")}
        </Typography>
      </TitleWrapper>
    );

  return (
    <TitleWrapper textAlign="center">
      <Typography size={size} weight="700">{`${t("Success")} ${
        authState.email
      }`}</Typography>
    </TitleWrapper>
  );
};

export const AuthSuccessSection = memo(AuthSuccessSectionComponent);
