import type { Metadata } from "next";
import Link from "next/link";
import { ContinueRoute, GuideShell, PageHero } from "../site-components";

export const metadata: Metadata = { title: "Anomaly Field Guide", description: "Verified anomaly signs and rejection controls for Animal Restaurant (Anomaly) on Roblox.", alternates: { canonical: "/anomalies" } };

export default function Anomalies() {
  return (
    <GuideShell>
      <PageHero step="02 / 04" eyebrow="Inspection manual" title="Anomaly field guide" intro="The game is updated, so memorizing one gallery will eventually fail. Use a decision process that still works when a new customer appears." image="/images/animal-restaurant-anomaly.png" alt="Clearly anomalous cat at an Animal Restaurant table" />
      <section className="article-section"><div className="shell article-grid">
        <aside className="article-toc"><strong>FIELD GUIDE</strong><a href="#confirmed">Confirmed signs</a><a href="#not-signs">Not enough alone</a><a href="#groups">Groups</a><a href="#reject">Reject controls</a><a href="#uncertain">When uncertain</a></aside>
        <article className="article-body">
          <section id="confirmed"><h2>Confirmed visual signs</h2><p>Current gameplay guides identify two recurring early-access patterns: a visibly glitched face and a stretched or distorted head. Official game thumbnails also show large unnatural mouths and glowing eyes as the central horror motif.</p><table className="fact-table"><thead><tr><th>Check</th><th>Normal baseline</th><th>Suspicious change</th></tr></thead><tbody><tr><td>Face</td><td>Clean, readable animal features</td><td>Glitching, misplaced features, extreme mouth</td></tr><tr><td>Head</td><td>Stable species silhouette</td><td>Stretched or unnaturally distorted shape</td></tr><tr><td>Group</td><td>Every member looks consistent</td><td>Any single member shows a confirmed distortion</td></tr></tbody></table></section>
          <section id="not-signs"><h2>Not enough on its own</h2><p>In the currently documented guide version, a country label is a normal player-country display rather than an anomaly sign. The label alone is therefore not enough to reject a customer. Some normal characters can also move their head strangely, so movement alone can produce false positives.</p><div className="article-note"><strong>Use visible comparison, not vibes.</strong>Reject for a concrete mismatch in the model. Do not reject only because a guest feels unusual.</div></section>
          <section id="groups"><h2>Inspect the whole group</h2><p>Group orders are a deliberate attention trap. Do not focus only on the first customer. Look across every face before serving: left to right, then one final full-table scan.</p></section>
          <section id="reject"><h2>Know both reject controls</h2><ul><li><strong>Counter:</strong> ring the counter bell twice.</li><li><strong>Drive-thru:</strong> toggle the drive-thru reject control.</li></ul><p>Use the appropriate control before committing time to the order. If you accidentally accept an anomaly in the currently documented version, one walkthrough shows that allowing its timer to expire can make it leave; treat that as recovery, not your normal plan.</p></section>
          <section id="uncertain"><h2>When you are uncertain</h2><ol><li>Pause and inspect the full model again.</li><li>Compare it with the same species you have already served safely.</li><li>Check the rest of the group and any camera angle available.</li><li>If no concrete distortion exists, do not invent a new rule.</li></ol><p>This guide intentionally avoids claiming a permanent, exhaustive anomaly list. The live game can change, while this method remains useful.</p><Link href="/beginner-guide">Return to the full shift loop →</Link></section>
          <ContinueRoute current="anomalies" />
        </article>
      </div></section>
    </GuideShell>
  );
}
