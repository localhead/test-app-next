import { useEffect } from "react";

export const useDisableBodyScroll = (disable?: boolean) => {
  useEffect(() => {
    if (disable ?? true) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [disable]);
};
