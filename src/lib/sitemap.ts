export const SITE_URL = "https://seokh1213.github.io";

export function buildSitemapUrls(postIds: string[]): string[] {
	const postUrls = postIds
		.filter((postId) => postId !== "index")
		.map((postId) => {
			const encodedPostId = postId
				.split("/")
				.map((segment) => encodeURIComponent(segment))
				.join("/");

			return `${SITE_URL}/posts/${encodedPostId}/`;
		});

	return [`${SITE_URL}/`, `${SITE_URL}/posts/`, ...postUrls];
}

export function renderTextSitemap(urls: string[]): string {
	return `${urls.join("\n")}\n`;
}

export function renderXmlSitemap(urls: string[]): string {
	const entries = urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`);

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>\n`;
}
