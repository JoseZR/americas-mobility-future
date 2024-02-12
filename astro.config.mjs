import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";


// https://astro.build/config
export default defineConfig({
    site: "https://americas-mobility-future/",
  integrations: [sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        en: "en",
        es: "es"
      }
    }
  }), partytown(), tailwind(), react(), astroI18next()]
});