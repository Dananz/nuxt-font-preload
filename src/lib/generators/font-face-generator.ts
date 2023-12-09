import type { PreloadedFont } from "../types";
import { meta } from "../configs";
import { useLogger } from "@nuxt/kit";

const logger = useLogger(meta.name);
export function generateFontFaces(options: { fonts: PreloadedFont[] }): string {
  let styleContent = "";

  for (const font of options.fonts) {
    if (!font.weights?.length) {
      logger.warn(`${font.fontFamily} is missing weights array`);
      continue;
    }

    font.weights.forEach((weightConfig) => {
      if (!weightConfig.sources?.length)
        return logger.warn(
          `${font.fontFamily}:${weightConfig.weight} is missing sources array`
        );

      const { weight, sources, ...config } = {
        ...font.defaultOptions,
        ...weightConfig,
      };

      const cssSrc = sources
        .map((src) => `url("${src.url}") format("${src.format}")`)
        .join(",");

      const fontDescriptors = Object.entries(config)
        .map(([key, value]) => `${camelToKebabCase(key)}: ${value};`)
        .join(" ");

      // prettier-ignore
      styleContent += 
      ` @font-face {
        font-family: "${font.fontFamily}";
        src: ${cssSrc};
        font-weight: ${weight}; 
        ${fontDescriptors}
      }`;
    });
  }

  return styleContent.replaceAll(/\s+/g, " ").trim();
}

function camelToKebabCase(str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
