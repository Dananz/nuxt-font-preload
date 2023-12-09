import type { PreloadedFont } from "~/src/lib/types";

export const MontserratBasicTest: PreloadedFont = {
  fontFamily: "Montserrat",
  weights: [
    {
      weight: 400,
      sources: [{ url: "fonts/Montserrat-Regular.woff2", format: "woff2" }],
    },
  ],
  defaultOptions: { fontDisplay: "swap" },
  preloadWeights: [400],
};
