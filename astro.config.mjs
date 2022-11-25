import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import critters from "astro-critters";
import mdx from "@astrojs/mdx";
import serviceWorker from "astrojs-service-worker";
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.zerolimits.dev",
  experimental: {
    integrations: true
  },
  integrations: [mdx(), serviceWorker(), webmanifest({
    name: "The Blog of Random",
    icon: "src/icon/favicon.svg",
    description: "A blog about the most random things you can think of, brought to you by the most interesting boring person you've ever met.",
    start_url: "/",
    theme_color: "#013",
    background_color: "#def",
    display: "fullscreen"
  }), robotsTxt(), sitemap(), critters(), compress()]
});
