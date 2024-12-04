import { PLACEHOLDER_IMAGE } from "@utils/globalConstants";
import Image from "next/image";
import { FC } from "react";

import styles from "./styles.module.scss";

interface CountryFlagIconProps {
  iso: string;
}

export const CountryFlagIcon: FC<CountryFlagIconProps> = (props) => {
  const { iso } = props;
  const flagSrc = `/flags/${props.iso}.svg`;

  if (!flagSrc)
    return (
      <Image
        src={PLACEHOLDER_IMAGE}
        alt="placeholder"
        width={32}
        height={32}
        className={styles.image}
      />
    );

  return (
    <Image
      src={flagSrc}
      alt={`flag of ${iso.toUpperCase()}`}
      width={32}
      height={32}
      quality={100}
      className={styles.image}
    />
  );
};
