import { useAdaptiveContext } from "./components/AdaptiveContext";
import { WindowWidth } from "./types";

export const useWindowWidth = (): WindowWidth => {
  const adaptive = useAdaptiveContext();

  return adaptive.windowWidth;
};
