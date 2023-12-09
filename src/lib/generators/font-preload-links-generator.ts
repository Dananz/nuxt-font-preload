import type { AppHeadMetaObject } from "@nuxt/schema";
import type { FontPreloadConfig } from "../types";

export function generatePreloadLinks(
  options: FontPreloadConfig
): AppHeadMetaObject["link"] {
  const { fonts } = options;

  const preloadSources = fonts.flatMap((font) => {
    return font.weights?.flatMap((weightConfig) => {
      return weightConfig.sources?.filter((source) => source.preload);
    });
  });

  return preloadSources.map((src) => {
    return {
      rel: "preload",
      as: "font",
      href: src.url,
      type: `font/${src.format}`,
      crossorigin: (src.crossorigin || "anonymous") as "anonymous",
    };
  });
}
