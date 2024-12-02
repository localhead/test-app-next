import { Breakpoints } from "@features/adaptive/breakpoints";
import { getDeviceType } from "@features/adaptive/getDeviceType";
import { useWindow } from "@features/adaptive/hooks/useWindow";
import { WindowWidth } from "@features/adaptive/types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const getWindowWidth = (windowWidthPx: number): WindowWidth =>
  windowWidthPx >= Breakpoints.desktop ? "desktop" : "mobile";

const Context = createContext<{ windowWidth: WindowWidth }>({
  windowWidth: "desktop",
});

interface AdaptiveContextProps extends PropsWithChildren {
  userAgent?: string;

  initWidth?: number;
}

export const AdaptiveContext: FC<AdaptiveContextProps> = (props) => {
  const { userAgent, children } = props;
  const window = useWindow();

  let initWidth = Breakpoints.mobile;

  if (!userAgent) {
    const deviceType = getDeviceType();

    if (deviceType === "isMobile") initWidth = Breakpoints.desktop - 1;
  }

  const [windowWidth, setWindowWidth] = useState<WindowWidth>(
    getWindowWidth(initWidth)
  );

  useEffect(() => {
    function handleResize() {
      if (window) {
        const windowWidthPx = window.innerWidth;
        const newWidth = getWindowWidth(windowWidthPx);
        setWindowWidth(newWidth);
      }
    }

    if (window) {
      setWindowWidth(getWindowWidth(window.innerWidth));
      window.addEventListener("resize", handleResize);

      return () => {
        if (window) {
          window.removeEventListener("resize", handleResize);
        }
      };
    }
  }, [window]);

  const value = useMemo(() => {
    return {
      windowWidth,
    };
  }, [windowWidth]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAdaptiveContext = () => {
  return useContext(Context);
};
