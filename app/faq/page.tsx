import type { Metadata } from "next";
import Link from "next/link";
import { ContinueRoute, GuideShell, PageHero } from "../site-components";

export const metadata: Metadata = { title: "FAQ", description: "Answers to common Animal Restaurant (Anomaly) questions about customers, rejection, drive-thru, fires, sanity, and upgrades.", alternates: { canonical: "/faq" } };

const groups = [
  { title: "Basics", entries: [
    ["Is this the mobile game Animal Restaurant?", "No. This site covers the Roblox horror experience Animal Restaurant (Anomaly), universe ID 10418505887 and place ID 85733030843250."],
    ["What is the basic objective?", "Work restaurant shifts: inspect animal customers, reject anomalies, accept safe orders, cook the requested food, deliver plates, clear completed service, and manage new shift systems as they unlock."],
    ["What restores sanity?", "Coffee. Current walkthrough footage and the in-game briefing show coffee being used for sanity recovery. The official Keep Their Head Clear badge also says to feed a Head Banger coffee."],
    ["Is there a manager office unlock?", "Not as a documented restaurant route on this experience. Public manager-office guides usually describe Animal Hospital Dr. Harlow's Office—a different Roblox game. Do not expect that Hospital escort path here."],
  ]},
  { title: "Anomaly decisions", entries: [
    ["How do I reject an anomaly?", "Ring the counter bell twice for a counter customer. At the drive-thru, use the shutter control."],
    ["How can I recognize one?", "Current verified footage shows glitched faces and stretched or distorted heads. Inspect every member of a group, and remember that Alpha updates may add more signs."],
    ["Is a country label an anomaly sign?", "A country label alone is not enough to reject a customer. In the currently documented guide version it is a normal player-country display; still inspect the face and head."],
  ]},
  { title: "Shift events", entries: [
    ["What do I do if the kitchen catches fire?", "A current community walkthrough shows the extinguisher being retrieved from the back area. Follow the current on-screen event prompt because event details can change during Alpha."],
    ["When do CCTV and drive-thru unlock?", "They are introduced after the early teaching shift in current gameplay. The exact timing can move between updates, so reread each new briefing."],
  ]},
  { title: "Progression", entries: [
    ["What should I upgrade first?", "Start with the repeated bottleneck that slowed your last shift. If coffee recovery already keeps pace, cooking and order efficiency are usually the more useful early improvements."],
    ["Are there codes?", "No verified public Animal Restaurant (Anomaly) Roblox codes as of September 23, 2026. The Codes status page owns the full checked-surface list, redeem steps, and mobile-game boundary."],
    ["Will the anomaly list change?", "It can. The official listing marks the game as Alpha, so use the comparison method and review the fact-check date instead of relying on a permanent list."],
  ]},
];

export default function FAQ() {
  return <GuideShell><PageHero step="04 / 04" eyebrow="Verified answers" title="Frequently asked questions" intro="Open the section that matches your problem. Each answer separates confirmed controls from version-sensitive advice." /><section className="article-section"><div className="shell article-grid"><aside className="article-toc"><strong>QUICK LINKS</strong><Link href="/beginner-guide">Beginner guide</Link><Link href="/anomalies">Anomaly checks</Link><Link href="/codes">Codes status</Link><Link href="/upgrades">Upgrade route</Link><Link href="/sources">Research log</Link></aside><article className="article-body faq-reference-list">{groups.map((group) => <section key={group.title}><h2>{group.title}</h2>{group.entries.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</section>)}<p>For the full codes Owner, open the <Link href="/codes">Codes status page</Link>.</p><ContinueRoute current="faq" /></article></div></section></GuideShell>;
}
