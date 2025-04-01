import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";


// https://astro.build/config
export default defineConfig({
  site: "https://amofexpo.igeco.mx",
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), astroI18next(),sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        en: "en",
        es: "es"
      }
    }
  }),]
});