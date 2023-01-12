import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('./**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: 'The Blog of Random',
  description: "A blog about the most random things you can think of, brought to you by the most interesting boring person you've ever met.",
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description
  })),
  stylesheet: '/rss.xsl'
});
