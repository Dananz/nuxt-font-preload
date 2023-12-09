import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, $fetch } from "@nuxt/test-utils";
import { generateFontFaces, generatePreloadLinks } from "../src/lib/generators";
import { MontserratBasicTest } from "./mockups";
import { JSDOM } from "jsdom";

describe("ssr", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  it("renders the index page", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).toContain("<h1>basic</h1>");
  });

  it("applied montserrat font face", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    const fontFace = generateFontFaces({ fonts: [MontserratBasicTest] });
    expect(html).toContain(fontFace);
  });

  it("applied montserrat preload link", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    const preloadLinks = generatePreloadLinks({ fonts: [MontserratBasicTest] });

    expect(preloadLinks).not.toBeNull();
    expect(preloadLinks).toHaveLength(1);

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const linkTag = document.querySelector('link[rel="preload"]');
    expect(linkTag).not.toBeNull();

    for (const link of preloadLinks!) {
      expect(link).not.toBeNull();
      expect(linkTag?.getAttribute("as")).toEqual(link.as);
      expect(linkTag?.getAttribute("href")).toEqual(link.href);
      expect(linkTag?.getAttribute("type")).toEqual(link.type);
    }
  });
});
