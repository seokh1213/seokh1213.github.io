import type {APIRoute} from 'astro';
import {getCollection} from 'astro:content';

const SITE_URL = 'https://seokh1213.github.io';

export const GET: APIRoute = async () => {
  // 게시물 가져오기 (프로덕션에서는 published된 것만)
  const posts = (await getCollection("post"))
    .filter(post => post.data.published === true);

  // sitemap XML 생성
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>2025-02-01</lastmod>
  </url>
  <url>
    <loc>${SITE_URL}/posts/</loc>
    <lastmod>2025-02-01</lastmod>
  </url>
  ${posts.map(post => `<url>
    <loc>${SITE_URL}/posts/${post.id}${!post.id.endsWith("index") ? "/" : ""}</loc>
    <lastmod>${post.data.updatedAt ? new Date(post.data.updatedAt).toISOString() : new Date().toISOString()}</lastmod>    
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};