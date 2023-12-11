export interface CustomFontDescriptors {
  ascentOverride?: string;
  descentOverride?: string;
  fontDisplay?: "auto" | "block" | "fallback" | "optional" | "swap";
  featureSettings?: string;
  lineGapOverride?: string;
  fontStretch?: string;
  fontStyle?: string;
  unicodeRange?: string;
  fontVariant?: string;
}

export interface CustomFontSource {
  url: string;
  format: string;
  /** Adds a preload link for this font weight */
  preload?: boolean;
  /** Adds crossorigin attribute to preload link, defaults to "anonymous" */
  crossorigin?: string;
}

export interface CustomFontWeight extends CustomFontDescriptors {
  sources: CustomFontSource[];
  weight: number;
}

export interface PreloadedFont {
  fontFamily: string;
  weights: CustomFontWeight[];
  /** Default options to apply to all weights */
  defaultOptions?: Omit<CustomFontWeight, "sources" | "weight">;
}

export interface FontPreloadConfig {
  fonts: PreloadedFont[];
}
