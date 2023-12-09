import type { PreloadedFont } from "~/src/runtime/types";

export const MontserratBasicTest: PreloadedFont = {
  fontFamily: "Montserrat",
  weights: [
    {
      weight: 400,
      sources: [
        {
          url: "fonts/Montserrat-Regular.woff2",
          format: "woff2",
          preload: true,
        },
      ],
    },
  ],
  defaultOptions: { fontDisplay: "swap" },
};
