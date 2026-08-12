import Link from "next/link";
import Image from "next/image";

export const learningPath = [
  { href: "/beginner-guide", number: "01", label: "Survive shift one", meta: "8 min read" },
  { href: "/anomalies", number: "02", label: "Learn the face check", meta: "Field guide" },
  { href: "/upgrades", number: "03", label: "Plan your upgrades", meta: "Progression" },
];

export const guideLinks = [
  { href: "/beginner-guide", label: "First shift" },
  { href: "/anomalies", label: "Field guide" },
  { href: "/upgrades", label: "Progression" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Animal Restaurant Anomaly Guide home">
          <span className="brand-mark"><span>AR</span></span>
          <span><strong>ANIMAL RESTAURANT</strong><small>ANOMALY SHIFT MANUAL</small></span>
        </Link>
        <nav aria-label="Main navigation">
          {guideLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open guide navigation">Guide <span>+</span></summary>
          <div>{guideLinks.map((item, index) => <Link href={item.href} key={item.href}>0{index + 1} · {item.label}</Link>)}</div>
        </details>
        <Link className="header-cta" href="/beginner-guide"><span>01</span> Start the tutorial <b>→</b></Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="brand brand-footer"><span className="brand-mark"><span>AR</span></span><span><strong>ANIMAL RESTAURANT</strong><small>ANOMALY SHIFT MANUAL</small></span></Link>
          <p>A spoiler-light, independent field manual built from the live Roblox listing, official game media, and current gameplay walkthroughs.</p>
          <span className="verified-stamp">FACT-CHECKED · AUG 12 2026</span>
        </div>
        <div><h3>Complete the route</h3>{learningPath.map((item) => <Link href={item.href} key={item.href}><span>{item.number}</span>{item.label}</Link>)}</div>
        <div><h3>Reference desk</h3><Link href="/faq">Common questions</Link><Link href="/sources">Research & sources</Link><a href="https://www.roblox.com/games/85733030843250/Animal-Restaurant" rel="nofollow">Official game listing</a></div>
      </div>
      <div className="shell footer-bottom"><span>Game facts can change after updates.</span><span>Not affiliated with Roblox or the game developer.</span></div>
    </footer>
  );
}

export function SectionHeading({ kicker, title, text, light = false }: { kicker: string; title: string; text: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading-light" : ""}`}><span>{kicker}</span><h2>{title}</h2><p>{text}</p></div>;
}

export function GuideShell({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main-content">Skip to guide content</a><Header /><main id="main-content">{children}</main><MobileTutorialCta /><Footer /></>;
}

export function MobileTutorialCta() {
  return <Link className="mobile-tutorial-cta" href="/beginner-guide"><span><b>New here?</b> Follow shift one</span><i>Start →</i></Link>;
}

export function PageHero({ eyebrow, title, intro, image, alt, step }: { eyebrow: string; title: string; intro: string; image?: string; alt?: string; step?: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <div className="page-hero-index"><span>{step ?? "MANUAL"}</span><i /></div>
          <span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>
          <div className="page-hero-status"><span>●</span> CURRENT GUIDE · VERIFIED AUG 12, 2026</div>
        </div>
        {image && <div className="page-hero-photo"><Image src={image} alt={alt ?? ""} width={768} height={480} priority unoptimized /><span>SHIFT EVIDENCE</span></div>}
      </div>
    </section>
  );
}

export function ContinueRoute({ current }: { current: "beginner" | "anomalies" | "upgrades" | "faq" | "sources" }) {
  const next = current === "beginner" ? learningPath[1] : current === "anomalies" ? learningPath[2] : current === "upgrades" ? { href: "/faq", number: "04", label: "Clear the final questions", meta: "FAQ" } : learningPath[0];
  return <aside className="continue-route"><span>CONTINUE YOUR TRAINING</span><div><b>{next.number}</b><p>{next.label}<small>{next.meta}</small></p><Link href={next.href} aria-label={`Continue to ${next.label}`}>→</Link></div></aside>;
}
