import { defineNuxtModule } from "@nuxt/kit";
import type { FontPreloadConfig } from "./runtime/types";
import { generateFontFaces, generatePreloadLinks } from "./lib/generators";
import { meta } from "./lib/configs";

export default defineNuxtModule<FontPreloadConfig>({
  meta: {
    name: meta.name,
    configKey: meta.configKey,
    compatibility: { nuxt: meta.compatibility.nuxt },
  },
  defaults: {
    fonts: [],
  },
  setup(options, nuxt) {
    const customFonts = options?.fonts || [];

    // If no fonts are defined, don't do anything
    if (!customFonts?.length) return;

    const fontFacesStyle = generateFontFaces({ fonts: customFonts });
    const preloadLinks = generatePreloadLinks({ fonts: customFonts });

    nuxt.options.app.head.style?.push({ innerHTML: fontFacesStyle });
    nuxt.options.app.head.link?.push(...preloadLinks);
  },
});
