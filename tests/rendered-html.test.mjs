import assert from "node:assert/strict";
import test from "node:test";
import { access } from "node:fs/promises";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("home leads with beginner retention content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /New player\? Do this next/);
  assert.match(html, /first shift/i);
  assert.match(html, /Four moves\. One safe loop\./);
  assert.match(html, /Core gameplay loop/);
  assert.match(html, /Small rushes become failed shifts/);
  assert.match(html, /Before the bell rings/i);
  assert.match(html, /href="\/beginner-guide"[^>]*>[^<]*(?:<[^>]+>[^<]*<\/[^>]+>)*Start the first-shift tutorial/i);
  assert.doesNotMatch(html, /class="[^"]*(?:button-primary|header-cta)[^"]*"[^>]*href="https:\/\/www\.roblox\.com/i);
  assert.match(html, /mobile-tutorial-cta/);
  assert.match(html, /New here\?/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("all public pages keep the beginner tutorial one tap away", async () => {
  for (const path of ["/", "/beginner-guide", "/anomalies", "/upgrades", "/codes", "/faq", "/sources"]) {
    const html = await (await render(path)).text();
    assert.match(html, /mobile-tutorial-cta/, path);
    assert.match(html, /Follow shift one/, path);
  }
});

test("guide routes render and internally connect", async () => {
  for (const path of ["/beginner-guide", "/anomalies", "/upgrades", "/codes", "/faq", "/sources"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /ANOMALY SHIFT MANUAL/);
    assert.match(html, /Research &amp; sources/);
    assert.match(html, /CONTINUE YOUR TRAINING/);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://animalrestaurantanomaly\\.wiki${path}"`));
  }
});

test("beginner guide is a task-based walkthrough", async () => {
  const response = await render("/beginner-guide");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /beginner walkthrough: your first shift, step by step/i);
  assert.match(html, /FIRST-SHIFT OBJECTIVE/);
  assert.match(html, />GOAL</);
  assert.match(html, />AVOID</);
  assert.match(html, />DONE WHEN</);
  assert.match(html, /Inspect before accepting/);
  assert.match(html, /Add the drive-thru/);
});

test("SEO endpoints render", async () => {
  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /https:\/\/animalrestaurantanomaly\.wiki\/sitemap\.xml/);
  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.match(xml, /https:\/\/animalrestaurantanomaly\.wiki\/beginner-guide/);
  assert.doesNotMatch(xml, /localhost|codex-preview|roblox_game/);
});

test("static deployment uses public image files", async () => {
  for (const path of ["/", "/beginner-guide", "/anomalies"]) {
    const html = await (await render(path)).text();
    assert.doesNotMatch(html, /\/_next\/image\?/);
    for (const match of html.matchAll(/<img[^>]+src="(\/images\/[^"]+)"/g)) {
      await access(new URL(`../public${match[1]}`, import.meta.url));
    }
  }
});

test("codes status page owns no-verified-codes answer", async () => {
  const response = await render("/codes");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /No verified public codes as of September 23, 2026/);
  assert.match(html, /There is no confirmed working Animal Restaurant \(Anomaly\) Roblox code/);
  assert.match(html, /mobile Animal Restaurant/i);
  assert.match(html, new RegExp(`<link rel="canonical" href="https://animalrestaurantanomaly\\.wiki/codes"`));
});

test("homepage states Roblox identity and codes handoff", async () => {
  const html = await (await render()).text();
  assert.match(html, /Animal Restaurant Anomaly on Roblox/i);
  assert.match(html, /href="\/codes"/);
});
