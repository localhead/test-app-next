import { Button } from "@packages/uiKit/Button";
import { FC, useState } from "react";

import { authSlice, initialAuthState } from "@features/auth/store/slices";
import { paths } from "@features/routes/paths";
import { useAppDispatch, useAppSelector } from "@features/store/hooks";
import Modal from "@packages/uiKit/Modal";
import { useRouter } from "next/router";
import { LoginForm } from "../LoginForm";
import { LoginFormValues } from "../LoginForm/types";
import styles from "./styles.module.scss";

export const AuthModal: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const router = useRouter();
  const isAuth = useAppSelector((store) => store.auth.isAuth);

  const dispatch = useAppDispatch();

  const onButtonClickHandler = () => {
    if (isAuth) {
      dispatch(authSlice.actions.setAuthDataInStorage(initialAuthState));
      router.push(paths.root());
    } else {
      setIsOpenModal(true);
    }
  };

  const closeClickHandler = () => {
    setIsOpenModal(false);
  };

  const onLoginFormSubmit = (data: LoginFormValues) => {
    if (data.email) {
      dispatch(
        authSlice.actions.setAuthDataInStorage({
          isAuth: true,
          email: data.email,
        })
      );
      router.push(paths.auth());
      setIsOpenModal(false);
    }
  };

  return (
    <div className={styles.container}>
      <Button color="primary" size="medium" onClick={onButtonClickHandler}>
        {!isAuth ? "Войти" : "Выйти"}
      </Button>
      <Modal
        isOpen={isOpenModal}
        onClose={closeClickHandler}
        title={`Войдите, чтобы продолжить`}
      >
        <LoginForm onSubmit={onLoginFormSubmit} />
      </Modal>
    </div>
  );
};
