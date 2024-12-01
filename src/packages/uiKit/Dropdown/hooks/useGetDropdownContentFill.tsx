import { ReactNode } from "react";
import { DropdownItem } from "../types";

export const useGetDropdownContentFill = (
  data: ReactNode[] | null
): DropdownItem[] | null => {
  if (!data) return null;
  return data.map((item, index) => {
    return { content: item, value: index };
  });
};
