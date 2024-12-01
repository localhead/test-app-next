import { useMemo } from "react";

import { LanguageInfoCard } from "../components/LanguageInfoCard";
import { LanguageItem } from "../types";

export const useGetLanguageInfoCards = (data: LanguageItem[] | null) => {
  return useMemo(() => {
    return data
      ? data.map((item) => {
          return <LanguageInfoCard key={item.id} lang={item.label} />;
        })
      : null;
  }, [data]);
};
