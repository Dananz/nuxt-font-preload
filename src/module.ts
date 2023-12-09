import { addTypeTemplate, createResolver, defineNuxtModule } from "@nuxt/kit";
import type { FontPreloadConfig } from "./lib/types";
import { generateFontFaces, generatePreloadLinks } from "./lib/generators";
import { meta } from "./lib/configs";

const resolver = createResolver(import.meta.url);

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
    addTypeTemplate({
      filename: "types/nuxt-preload-fonts.d.ts",
      src: resolver.resolve("lib/types/index.ts"),
    });

    const customFonts = options?.fonts || [];

    // If no fonts are defined, don't do anything
    if (!customFonts?.length) return;

    const fontFacesStyle = generateFontFaces({ fonts: customFonts });
    const preloadLinks = generatePreloadLinks({ fonts: customFonts });

    nuxt.options.app.head.style?.push({ innerHTML: fontFacesStyle });

    // TODO: remove assertion when types are fixed
    nuxt.options.app.head.link?.push(
      ...(preloadLinks as typeof nuxt.options.app.head.link)
    );
  },
});

/**
 *
 */
