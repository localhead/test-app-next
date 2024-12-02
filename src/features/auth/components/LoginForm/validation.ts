import { useTranslations } from "next-intl";
import * as yup from "yup";
import { LoginFormValues } from "./types";

export const validationSchema = (
  t: ReturnType<typeof useTranslations>
): yup.SchemaOf<LoginFormValues> =>
  yup
    .object({
      email: yup
        .string()
        .nullable() // @ts-ignore
        .defined(t("validationEmailRequired"))
        .trim() // @ts-ignore
        .email(t("validationEmailWrong")) // @ts-ignore
        .required(t("validationEmailRequired")),
    })
    .required();
