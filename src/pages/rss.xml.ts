import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET = async (context: { site: any; }) => {

  const blogPosts = await getCollection('blog');


  return rss({
    stylesheet: '/styles/rss.xsl',
    // `<title>` field in output xml
    title: 'Asbel Blog',
    // `<description>` field in output xml
    description: 'A humble Astronaut’s guide to the stars',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site ?? '',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link:  `/posts/${post.slug}`
    })),
    // (optional) inject custom xml
    customData: `<language>es-mx</language>`,
  });
}


// export const GET: APIRoute = async ({params, request, site}) => {
//   const blogPosts = await getCollection('blog');

//   return rss({
//     stylesheet: '/styles/rss.xsl',
//     title: 'Asbel Blog',
//     description: 'A humble Astronaut guide',
//     site: site ?? '',
//     items: blogPosts.map(post => ({
//       title: post.data.title,
//       pubDate: post.data.date,
//       description: post.data.description,
//       link:  `/posts/${post.slug}`
//     })),
//     customData: `<languaje>es-mx</languaje>`
//   })
// }