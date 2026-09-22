import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const SITE_URL = "https://seokh1213.github.io";

test("text and XML sitemaps contain the same canonical URLs", async () => {
	const [textSitemap, xmlSitemap] = await Promise.all([
		readFile("dist/sitemap.txt", "utf8"),
		readFile("dist/sitemap.xml", "utf8"),
	]);
	const textUrls = textSitemap.trim().split("\n");
	const xmlUrls = [...xmlSitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
		(match) => match[1],
	);

	assert.deepEqual(xmlUrls, textUrls);
	assert.equal(new Set(textUrls).size, textUrls.length);
	assert.ok(textUrls.every((url) => url.startsWith(`${SITE_URL}/`)));
	assert.ok(textUrls.includes(`${SITE_URL}/posts/`));
	assert.ok(!textUrls.includes(`${SITE_URL}/posts/index`));
});

test("robots.txt advertises the text sitemap", async () => {
	const robots = await readFile("dist/robots.txt", "utf8");

	assert.match(
		robots,
		/^Sitemap: https:\/\/seokh1213\.github\.io\/sitemap\.txt$/m,
	);
});
