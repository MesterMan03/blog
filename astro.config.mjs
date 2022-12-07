import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import critters from "astro-critters";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.zerolimits.dev",
  experimental: {
    integrations: true
  },
  integrations: [mdx(), robotsTxt(), sitemap(), critters(), compress()]
});
