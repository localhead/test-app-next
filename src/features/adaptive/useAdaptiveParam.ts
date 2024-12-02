import { useWindowWidth } from "./useWindowWidth";

type UseAdaptiveParamOptions<T> = {
  desktop: T;

  mobile?: T;
};

export const useAdaptiveParam = <T>(options: UseAdaptiveParamOptions<T>) => {
  const width = useWindowWidth();

  if (width === "desktop") {
    return options.desktop;
  }

  return options.mobile ?? options.desktop;
};
