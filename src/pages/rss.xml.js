import rss from '@astrojs/rss';

export function get(context) {
const postImportResult = import.meta.glob('./**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

return rss({
  title: 'The Blog of Random',
  description: "A blog about the most random things you can think of, brought to you by the most interesting boring person you've ever met.",
  site: context.site,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description
  })),
  stylesheet: '/rss.xsl'
});
}
