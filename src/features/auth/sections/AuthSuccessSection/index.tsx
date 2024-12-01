import { TitleWrapper } from "@components/TitleWrapper";
import { useAppSelector } from "@features/store/hooks";
import { FC } from "react";

export const AuthSuccessSection: FC = () => {
  const authState = useAppSelector((store) => store.auth);

  if (!authState.isAuth)
    return (
      <TitleWrapper textAlign="center">
        <TitleWrapper.Large>Вы не авторизованы</TitleWrapper.Large>
      </TitleWrapper>
    );

  return (
    <TitleWrapper textAlign="center">
      <TitleWrapper.Large>
        {`Вы успешно вошли через почту ${authState.email}`}
      </TitleWrapper.Large>
    </TitleWrapper>
  );
};
