import * as yup from "yup";
import { LoginFormValues } from "./types";

export const validationSchema: yup.SchemaOf<LoginFormValues> = yup
  .object({
    email: yup
      .string()
      .nullable()
      .defined("Заполните поле email")
      .trim()
      .email("Неправильный формат email")
      .required("Заполните поле email"),
  })
  .required();
