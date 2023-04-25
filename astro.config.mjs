import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.zerolimits.dev",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax]
  },
  integrations: [mdx(), sitemap()]
});
