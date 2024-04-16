import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { sortByDate } from '@/utils';

export async function GET(context) {
  const posts = sortByDate(await getCollection("posts"));
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}