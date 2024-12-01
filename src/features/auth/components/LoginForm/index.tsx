import { FC } from "react";

//@ts-ignore
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@packages/uiKit/Button";
import { Input } from "@packages/uiKit/Input";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { LoginFormValues } from "./types";
import { validationSchema } from "./validation";

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = handleSubmit((data: LoginFormValues) => {
    onSubmit(data);
  });

  return (
    <form className={styles.form}>
      <Controller
        control={control}
        name={"email"}
        render={({ field, fieldState: { error } }) => {
          return (
            <Input
              {...field}
              variant="filled"
              size="medium"
              error={error?.message}
              placeholder="Введи email"
            />
          );
        }}
      />
      <Button size="large" color="primary" block onClick={onSubmitHandler}>
        Войти
      </Button>
    </form>
  );
};
