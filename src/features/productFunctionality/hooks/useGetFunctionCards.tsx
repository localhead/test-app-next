import { useMemo } from "react";
import { FunctionsCard } from "../components/FunctionCard";
import { FunctionCardItem } from "../types";

export const useGetFunctionCards = (data: FunctionCardItem[]) => {
  return useMemo(() => {
    return data.map((card) => {
      return (
        <FunctionsCard image={card.image} key={card.id} title={card.title} />
      );
    });
  }, [data]);
};
