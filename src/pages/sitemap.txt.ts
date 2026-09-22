import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { buildSitemapUrls, renderTextSitemap } from "@/lib/sitemap";

export const GET: APIRoute = async () => {
	const posts = (await getCollection("post")).filter(
		(post) => post.data.published === true,
	);
	const urls = buildSitemapUrls(posts.map((post) => post.id));

	return new Response(renderTextSitemap(urls), {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
