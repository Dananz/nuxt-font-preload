import { MontserratBasicTest } from "../../mockups";
import FontPreloadModule from "../../../src/module";

export default defineNuxtConfig({
  // @ts-ignore
  modules: [FontPreloadModule],

  fontPreload: {
    fonts: [MontserratBasicTest],
  },
});
