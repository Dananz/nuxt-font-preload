
<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Font Preload
- Package name: nuxt-font-preload
- Description: My new Nuxt module
-->

# Font Preload

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Minimize Content Layout Shifts (CLS) by preloading fonts. A developer-focused tool for font preloading, `nuxt-font-preload` will automatically generates
 `<link rel="preload">` tags and `@font-face` declarations for your custom fonts.


> [!NOTE]
> This module is intended for use with self-hosted fonts, and does not support Google Fonts or other external font providers.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-font-preload?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- 💡 &nbsp;Declares custom fonts using `@font-face`
- ✋ &nbsp;Reduces CLS by preloading fonts
- ✨ &nbsp;Easy integration with Nuxt 3

## Quick Setup

1. Add `nuxt-font-preload` dependency to your project

```bash
npm i -D nuxt-font-preload
```

2. Add `nuxt-font-preload` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-font-preload"],
  fontPreload: {
    fonts: [
      {
        fontFamily: "Montserrat",
        weights: {
          400: [{ url: "fonts/Montserrat-Regular.woff2", format: "woff2", preload: true }],
          700: [{ url: "fonts/Montserrat-Bold.woff2", format: "woff2", preload: true }],
        },
        defaultOptions: { fontDisplay: "swap" }, // Applies to all weights
      },
    ],
  },
})
```

That's it! Your Nuxt app will now preload fonts efficiently ✨

## Contributing

You can contribute to this module and test it locally by following these steps:

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Prepare development server using `pnpm dev:prepare`
4. Build module using `pnpm prepack`
5. Launch playground using `pnpm dev`


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-font-preload/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-font-preload

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-font-preload.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-font-preload

[license-src]: https://img.shields.io/npm/l/nuxt-font-preload.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-font-preload

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
