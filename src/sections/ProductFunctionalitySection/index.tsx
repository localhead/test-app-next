import { SectionWrapper } from "@components/SectionWrapper";
import { FunctionsCard } from "@features/productFunctionality/components/FunctionCard";
import { FC, useState } from "react";
import styles from "./styles.module.scss";

export const ProductFunctionalitySection: FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.target.offsetLeft);
    setScrollLeft(e.target.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - e.target.offsetLeft;
    const walk = (x - startX) * 2;
    e.target.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <SectionWrapper title="Как это работает" margin="24px 0px 0px 0px">
      <div className={styles.container}>
        <div className={styles.scrollable}>
          <FunctionsCard />
          <FunctionsCard />
          <FunctionsCard />
          <FunctionsCard />
          <FunctionsCard />
        </div>
      </div>
    </SectionWrapper>
  );
};
