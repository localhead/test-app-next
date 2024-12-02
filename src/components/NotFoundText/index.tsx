import { TitleLargeProps } from "@components/TitleWrapper";
import { useTranslations } from "next-intl";
import { FC } from "react";
import styles from "./styles.module.scss";

interface NotFoundTextProps
  extends Omit<TitleLargeProps, "maxLines" | "children"> {}

export const NotFoundText: FC<NotFoundTextProps> & {} = (props) => {
  const {
    textAlign = "center",
    padding = "45px 0px",

    ...restProps
  } = props;

  const t = useTranslations("Misc");

  const textAlignClass = styles[`container--align-${textAlign}`];

  return (
    <div
      className={`${styles.container} ${textAlignClass}`}
      style={{ padding: padding }}
      {...restProps}
    >
      <div className={`${styles.container__title} `}>{t("NotFound")}</div>
    </div>
  );
};
