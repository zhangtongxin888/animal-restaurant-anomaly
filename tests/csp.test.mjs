import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

function directivesOf(policy) {
  const directives = new Map();
  for (const part of policy.split(";")) {
    const tokens = part.trim().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) continue;
    directives.set(tokens[0], tokens.slice(1));
  }
  return directives;
}

function assertSchemeOnly(name, sources) {
  for (const source of sources) {
    assert.equal(
      /:\/\//.test(source) || (source.includes(".") && !source.startsWith("'")),
      false,
      `${name} must not hardcode a host allowlist (${source})`,
    );
  }
}

test("CSP allows rotating https creatives without a host allowlist", async () => {
  const vercel = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
  const header = vercel.headers
    .flatMap((group) => group.headers)
    .find((entry) => entry.key === "Content-Security-Policy");
  assert.ok(header?.value, "Content-Security-Policy header is missing");

  const directives = directivesOf(header.value);
  assert.deepEqual(directives.get("default-src"), ["'self'"]);

  for (const name of ["script-src", "frame-src", "img-src", "connect-src"]) {
    const sources = directives.get(name);
    assert.ok(sources?.includes("https:"), `${name} must allow the https: scheme`);
    assertSchemeOnly(name, sources);
  }

  const scriptSrc = directives.get("script-src");
  assert.ok(scriptSrc.includes("'unsafe-inline'"));
  assert.ok(scriptSrc.includes("'unsafe-eval'"));
  assert.ok(scriptSrc.includes("blob:"));
  assert.equal(scriptSrc.includes("'strict-dynamic'"), false);
  assert.equal(scriptSrc.some((source) => source.startsWith("'nonce-") || source.startsWith("'sha")), false);

  const frameSrc = directives.get("frame-src");
  assert.ok(frameSrc.includes("blob:"));
  assert.ok(frameSrc.includes("data:"));

  assert.ok(directives.get("img-src").includes("data:"));
  assert.ok(directives.get("img-src").includes("blob:"));
  assert.ok(directives.get("connect-src").includes("wss:"));
  assert.ok(directives.get("worker-src").includes("https:"));
  assert.ok(directives.get("worker-src").includes("blob:"));
  assert.ok(header.value.includes("upgrade-insecure-requests"));
});

test("banner and native stay enabled while popunder and social bar stay off", async () => {
  const source = await readFile(new URL("../lib/adsterra.generated.ts", import.meta.url), "utf8");
  assert.match(source, /adsterraBanner728x90ScriptUrl: "https:\/\/www\.highperformanceformat\.com\//);
  assert.match(source, /adsterraNative1ScriptUrl: "https:\/\/pl30928376\.effectivecpmnetwork\.com\//);
  assert.match(source, /adsterraEnablePopunder: false/);
  assert.match(source, /adsterraEnableSocialBar: false/);
});
