import { TitleLargeProps } from "@components/TitleWrapper";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { PuffLoader } from "react-spinners";
import styles from "./styles.module.scss";

interface LoadingProps extends Omit<TitleLargeProps, "maxLines" | "children"> {
  text?: string;
}

export const Loading: FC<LoadingProps> = (props) => {
  const {
    textAlign = "center",
    padding = "45px 0px",
    text,
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
      <div className={`${styles.container__loader} `}>
        <PuffLoader
          loading={true}
          cssOverride={{ background: "transparent" }}
          aria-label="загрузка"
          data-testid="loader"
        />
      </div>
      <div className={`${styles.container__title} `}>
        {text ? text : t("Loading")}
      </div>
    </div>
  );
};
