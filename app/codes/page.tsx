import type { Metadata } from "next";
import Link from "next/link";
import { ContinueRoute, GuideShell, PageHero } from "../site-components";

const CHECKED = "September 23, 2026";

export const metadata: Metadata = {
  title: { absolute: "Animal Restaurant Anomaly Codes (Sep 2026) — No Working Codes Yet" },
  description:
    "Current Animal Restaurant (Anomaly) Roblox codes status: no verified working codes as of September 23, 2026. Official-surface checks, safe redeem steps, and why mobile-game codes fail.",
  alternates: { canonical: "/codes" },
  keywords: [
    "Animal Restaurant Anomaly codes",
    "Animal Restaurant Anomaly access code",
    "Animal Restaurant Anomaly Roblox codes",
  ],
};

const faqs = [
  {
    question: "Are there any working Animal Restaurant Anomaly Roblox codes?",
    answer: `No working public Animal Restaurant (Anomaly) Roblox code was verified from the official Roblox experience listing checked on ${CHECKED}. That public surface does not document a redemption entry or publish an exact redeem string, so this page does not invent an active-codes list.`,
  },
  {
    question: "How do I redeem a code if one appears later?",
    answer:
      "Only use the official Roblox Animal Restaurant (Anomaly) experience. Look for a clearly labelled in-game codes or redeem entry, type the exact developer-published string, and read the result the game shows. Do not use third-party forms, browser extensions, downloads, or scripts.",
  },
  {
    question: "Why is an access code not working?",
    answer:
      "Confirm the string came from an official developer surface and that the live game actually has a redemption entry. Then check spelling, capitalization, spaces, expiry wording, and one-use limits. If no official redemption entry exists, the string cannot be treated as a valid game code.",
  },
  {
    question: "Do mobile Animal Restaurant codes work here?",
    answer:
      "No. Mobile Animal Restaurant redemption codes from other platforms are a different product. They are not verified for this Roblox Alpha experience and should not be pasted into unrelated menus.",
  },
  {
    question: "Where should I check for new codes?",
    answer:
      "Start with the official Roblox experience page for Animal Restaurant (Anomaly) and the Dine N' Dash creator group. An exact string, source context, and a visible in-game redemption path should all be verified before any code is labelled active.",
  },
];

export default function CodesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://animalrestaurantanomaly.wiki/" },
      { "@type": "ListItem", position: 2, name: "Codes", item: "https://animalrestaurantanomaly.wiki/codes" },
    ],
  };

  return (
    <GuideShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <PageHero
        step="CODES"
        eyebrow={`Official surfaces checked ${CHECKED}`}
        title="Animal Restaurant Anomaly Roblox codes"
        intro="This is the Owner page for codes and access-code search intent: current status, official-surface checks, safe redemption steps, and failed-code troubleshooting—without inventing strings."
      />
      <section className="article-section">
        <div className="shell article-grid">
          <aside className="article-toc">
            <strong>CODES</strong>
            <a href="#status">Current status</a>
            <a href="#checked">Surfaces checked</a>
            <a href="#redeem">If a code appears</a>
            <a href="#boundaries">Boundaries</a>
            <a href="#faq">FAQ</a>
          </aside>
          <article className="article-body">
            <section id="status" data-first-screen-answer>
              <div className="article-note">
                <strong>{`No verified public codes as of ${CHECKED}`}</strong>
                <p>
                  There is no confirmed working Animal Restaurant (Anomaly) Roblox code to redeem as of {CHECKED}. The official Roblox experience listing does not document a public redeem string or redemption entry.
                </p>
              </div>
              <h2>Current codes status</h2>
              <p>
                Players searching for an access code or reward code should treat any unverified string as unsafe. This site publishes status and safety steps only when a first-party surface can be checked.
              </p>
            </section>
            <section id="checked">
              <h2>Official surfaces checked</h2>
              <ul>
                <li>Roblox experience listing for Animal Restaurant (Anomaly) (universe 10418505887 / place 85733030843250)</li>
                <li>Creator group Dine N&apos; Dash public group record</li>
                <li>Public badge list (no redeem-code badge or reward-code instruction found)</li>
              </ul>
              <p>
                <a href="https://www.roblox.com/games/85733030843250/Animal-Restaurant" rel="nofollow">Open the official Roblox listing</a>
              </p>
            </section>
            <section id="redeem">
              <h2>If a labelled codes entry appears later</h2>
              <ol>
                <li>Join only the official Roblox experience.</li>
                <li>Open a clearly labelled Codes / Redeem control inside that experience.</li>
                <li>Paste the exact developer-published string with no extra spaces.</li>
                <li>Read the in-game result; do not retry through third-party forms.</li>
              </ol>
            </section>
            <section id="boundaries">
              <h2>Boundaries</h2>
              <ul>
                <li>No guessed or recycled code tables.</li>
                <li>Mobile Animal Restaurant Fandom codes are a different product.</li>
                <li>Manager-office unlock guides belong to Animal Hospital, not this restaurant.</li>
              </ul>
              <p>
                Need the shift loop instead? <Link href="/beginner-guide">Start the first-shift tutorial</Link>. Short answers live on the <Link href="/faq">FAQ</Link>.
              </p>
            </section>
            <section id="faq">
              <h2>Codes FAQ</h2>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <span>+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
            <ContinueRoute current="codes" />
          </article>
        </div>
      </section>
    </GuideShell>
  );
}
