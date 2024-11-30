import localFont from "next/font/local";

export const interFont = localFont({
  // font weights in usage 400, 500, 600, 700,
  src: [
    {
      path: "../../../../public/assets/fonts/inter/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../public/assets/fonts/inter/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../../public/assets/fonts/inter/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/assets/fonts/inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],

  preload: true,
  adjustFontFallback: "Times New Roman",
});
