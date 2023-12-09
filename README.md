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

A Nuxt 3 module designed to reduce Cumulative Layout Shift (CLS) by preloading fonts using best practices. It generates `<link rel="preload">` tags based on the provided fonts and declares the fonts using `@font-face`.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-font-preload?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- ⛰ &nbsp;Reduces CLS by preloading fonts
- 🚠 &nbsp;Declares fonts using `@font-face`
- 🌲 &nbsp;Easy integration with Nuxt 3

## Quick Setup

1. Add `nuxt-font-preload` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-font-preload

# Using yarn
yarn add --dev nuxt-font-preload

# Using npm
npm install --save-dev nuxt-font-preload
```

2. Add `nuxt-font-preload` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-font-preload"],
  preloadFonts: {
    fonts: [
      {
        // Font family name
        fontFamily: "RAG-Sans",

        // Weights to declare
        weights: [
          {
            weight: 400,
            sources: [{ url: "assets/fonts/Roboto-Regular.ttf", format: "ttf" }],
          },
          {
            weight: 700,
            sources: [{ url: "assets/fonts/Roboto-Bold.ttf", format: "ttf" }],
          },
        ],

        // Default options for all weights
        defaultOptions: {
          display: "swap",
          ascentOverride: "80%",
        },
      },
    ],

    // Optional, if not provided, will preload all weights
    preloadWeights: [400, 700],

    // Optional, if not provided, will use the first format in the sources array
    preloadFormat: "ttf",
  },
});
```

That's it! Your Nuxt app will now preload fonts efficiently ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## Main Module

The main module is defined with the interface `ExtendedNuxtOptions` and uses `defineNuxtModule` for setup.

```javascript
// Main module code (as provided)
```

## Types

The module includes the following type declarations:

```typescript
// Type declarations (as provided)
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-font-preload/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-font-preload
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-font-preload.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-font-preload
[license-src]: https://img.shields.io/npm/l/nuxt-font-preload.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-font-preload
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
