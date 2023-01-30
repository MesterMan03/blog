import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function get(context) {
  const tech = await getCollection("tech")
  const science = await getCollection("science")
  const history = await getCollection("history")
  const psa = await getCollection("psa")

  const posts = [].concat(tech, science, history, psa)

  return rss({
    title: 'The Blog of Random',
    description: "A blog about the most random things you can think of, brought to you by the most interesting boring person you've ever met.",
    site: context.site,
    items: posts.map((post) => ({
      link: (post.collection == "psa" ? `/tech/${post.collection}/${post.slug}` : `/${post.collection}/${post.slug}`),
      title: post.data.title,
      pubDate: (post.data.lastmod ? post.data.lastmod : post.data.date),
      description: post.data.description
    })),
    stylesheet: '/rss.xsl'
  });
}
