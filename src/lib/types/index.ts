export interface CustomFontFaceDescriptors {
  ascentOverride?: string;
  descentOverride?: string;
  fontDisplay?: "auto" | "block" | "fallback" | "optional" | "swap";
  featureSettings?: string;
  lineGapOverride?: string;
  fontStretch?: string;
  fontStyle?: string;
  unicodeRange?: string;
  fontTariant?: string;
}

export interface CustomFontFaceSource {
  url: string;
  format: string;
  /** Adds a preload link for this font weight */
  preload?: boolean;
  /** Adds crossorigin attribute to preload link, defaults to "anonymous" */
  crossorigin?: string;
}
export interface CustomFontFace extends CustomFontFaceDescriptors {
  sources: CustomFontFaceSource[];
  weight: number;
}

export interface PreloadedFont {
  fontFamily: string;
  weights: CustomFontFace[];
  /** Default options to apply to all weights */
  defaultOptions?: Omit<CustomFontFace, "sources" | "weight">;
}

export interface FontPreloadConfig {
  fonts: PreloadedFont[];
}
