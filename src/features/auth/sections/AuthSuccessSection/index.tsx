import { TitleWrapper } from "@components/TitleWrapper";
import { useAppSelector } from "@features/store/hooks";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const AuthSuccessSection: FC = () => {
  const authState = useAppSelector((store) => store.auth);

  const t = useTranslations("AuthPage");

  if (!authState.isAuth)
    return (
      <TitleWrapper textAlign="center">
        <TitleWrapper.Large>{t("NotAuth")}</TitleWrapper.Large>
      </TitleWrapper>
    );

  return (
    <TitleWrapper textAlign="center">
      <TitleWrapper.Large>
        {`${t("Success")} ${authState.email}`}
      </TitleWrapper.Large>
    </TitleWrapper>
  );
};
