import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.zerolimits.dev",
  integrations: [mdx(), sitemap(), critters(), compress()]
});
