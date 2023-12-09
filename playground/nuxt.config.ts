export default defineNuxtConfig({
  modules: ["../src/module"],

  fontPreload: {
    fonts: [
      {
        fontFamily: "Montserrat",
        weights: [
          {
            weight: 400,
            sources: [{ url: "fonts/Montserrat-Regular.woff2", format: "woff2", preload: true }],
          },
        ],
        defaultOptions: { fontDisplay: "swap" },
      },
    ],
  },

  devtools: { enabled: true },
})
