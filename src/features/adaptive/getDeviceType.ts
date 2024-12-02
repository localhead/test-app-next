export const getDeviceType = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("mobile")) {
    return "isMobile";
  }
  if (userAgent.includes("tablet")) {
    return "isTablet";
  }
  return "isDesktop";
};
