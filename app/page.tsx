import Link from "next/link";
import Image from "next/image";
import { Footer, Header, SectionHeading, learningPath } from "./site-components";

const quickStart = [
  { number: "01", title: "Inspect", text: "Stop at the counter. Check eyes, mouth, head shape, then every member of the group.", tag: "LOOK FIRST" },
  { number: "02", title: "Decide", text: "Normal customer: accept the order. Clear distortion: reject before you enter the kitchen.", tag: "NO GUESSING" },
  { number: "03", title: "Cook", text: "Prepare the requested food, collect the correct plate, and keep its destination in mind.", tag: "ONE ORDER" },
  { number: "04", title: "Deliver", text: "Match the plate to the table or drive-thru, then reset for the next arrival.", tag: "FINISH CLEAN" },
];

const mistakes = [
  ["Serving from memory", "A familiar species can still arrive distorted. Re-check every face."],
  ["Checking only the leader", "A group is safe only after you inspect every member."],
  ["Cooking before deciding", "Wrong orders cost time and make the kitchen harder to read."],
  ["Forgetting the second queue", "Once unlocked, scan the drive-thru on every counter pass."],
];

const faqs = [
  ["What counts as an anomaly?", "Verified footage shows visibly glitched faces and stretched or distorted heads. Compare the whole model with normal customers you already know."],
  ["How do I reject a counter guest?", "Ring the counter bell twice. At the drive-thru, use the shutter control."],
  ["Is the country label suspicious?", "In the currently documented version, the country label is a normal display. The label alone is not enough reason to reject a customer."],
];

const websiteJsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: "Animal Restaurant Anomaly Guide", url: "https://animalrestaurantanomaly.wiki", description: "A verified first-shift guide to Animal Restaurant (Anomaly), with anomaly checks, progression, common mistakes, and FAQs." };

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#main-content">Skip to guide content</a>
      <Header />
      <main id="main-content">
      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> Beginner route · spoiler-light</div>
            <h1>Your first shift,<br /><em>under control.</em></h1>
            <p className="hero-lede">A practical survival manual for <strong>Animal Restaurant (Anomaly)</strong>. Learn the repeatable inspect → decide → cook → deliver loop before the restaurant gets busy.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/beginner-guide"><span className="button-no">01</span><span>Start the first-shift tutorial<small>Step by step · about 8 minutes</small></span><b>→</b></Link>
              <Link className="button button-quiet" href="/anomalies">Open the anomaly field guide</Link>
            </div>
            <div className="hero-trust"><span>✓ FACT-CHECKED</span><span>✓ NO GUESSED CODES</span><span>✓ UPDATE-AWARE</span></div>
          </div>
          <div className="hero-console">
            <div className="console-top"><span>CAM 02 · DINING ROOM</span><span className="rec"><i /> REC</span></div>
            <div className="console-frame">
              <Image src="/images/animal-restaurant-table.png" alt="Two normal rabbit customers beside a visibly anomalous mouse at a restaurant table" width={768} height={432} priority />
              <div className="target target-a"><span>CHECK</span></div><div className="target target-b"><span>BASELINE</span></div>
              <div className="scan-sweep" />
            </div>
            <div className="console-readout"><div><small>CURRENT TASK</small><strong>CHECK EVERY FACE</strong></div><div className="alert-chip">ANOMALY?</div></div>
            <div className="console-note"><span>FIRST RULE</span><strong>Look before you cook.</strong></div>
          </div>
        </div>
        <div className="hero-strip shell"><span>SHIFT 01</span><b>COUNTER</b><i /> <b>KITCHEN</b><i /> <b>DINING ROOM</b><i /> <b>RESET</b><small>YOUR FIRST 10 MINUTES</small></div>
      </section>

      <section className="start-section" id="quick-start">
        <div className="shell">
          <SectionHeading kicker="01 · Quick start" title="Four moves. One safe loop." text="Ignore speed for now. Repeat this exact order until every customer feels like a simple decision." />
          <div className="steps-grid">{quickStart.map((step) => <article className="step-card" key={step.number}><div><span className="step-number">{step.number}</span><small>{step.tag}</small></div><h3>{step.title}</h3><p>{step.text}</p><span className="step-arrow">↘</span></article>)}</div>
          <div className="memory-bar"><strong>THE 15-SECOND CHECK</strong><p><span>FACE</span> eyes + mouth</p><p><span>HEAD</span> shape + stretch</p><p><span>GROUP</span> every member</p><Link href="/beginner-guide">Practice it in the tutorial →</Link></div>
        </div>
      </section>

      <section className="loop-section" id="loop">
        <div className="shell loop-grid">
          <div className="loop-copy"><SectionHeading light kicker="02 · Core gameplay loop" title="Run the room like a checkpoint." text="Complete one decision before opening another. The restaurant gets noisier; your loop stays the same." /><Link href="/beginner-guide#counter" className="underlined-link">See the full counter walkthrough →</Link></div>
          <div className="loop-board">
            {[ ["01","INSPECT","Face · head · group"], ["02","DECIDE","Accept or reject"], ["03","PREPARE","Correct food · plate"], ["04","DELIVER","Table or drive-thru"], ["05","RECOVER","Clear · coffee · camera"] ].map(([n,t,d],i)=><div className="loop-row" key={n}><span>{n}</span><div><strong>{t}</strong><small>{d}</small></div><b>{i<4?"↓":"↺"}</b></div>)}
          </div>
        </div>
      </section>

      <section className="evidence-section">
        <div className="shell evidence-grid">
          <div className="evidence-photo"><div><span>FIELD NOTE 02</span><span>DINING ROOM CHECK</span></div><Image src="/images/animal-restaurant-counter.png" alt="An anomalous cat customer seated with a plate in the restaurant dining room" width={768} height={432} /><small>Visible facial distortion is a strong early clue.</small></div>
          <div className="evidence-copy"><span className="eyebrow">03 · Anomaly check</span><h2>Use a comparison.<br />Not a hunch.</h2><p>Current guides show obvious visual breaks such as glitched faces and stretched heads. In the documented guide version, a country label is normal. When the game updates, a repeatable comparison lasts longer than a memorized gallery.</p><ul><li><b>Face</b><span>Do the eyes and mouth match the normal model?</span></li><li><b>Head</b><span>Is the silhouette unnaturally stretched or distorted?</span></li><li><b>Group</b><span>Did you inspect every customer, not only the first?</span></li></ul><Link className="button button-dark" href="/anomalies">Study the anomaly field guide <b>→</b></Link></div>
        </div>
      </section>

      <section className="route-section" id="route">
        <div className="shell route-grid">
          <div><SectionHeading kicker="04 · Progression" title="Your next three shifts" text="Build accuracy, then rhythm, then speed. Upgrades help only when they support a loop you can already run." /><div className="shift-stack"><div><span>SHIFT 01</span><b>Accuracy</b><small>Learn normal faces. Finish clean.</small></div><div><span>SHIFT 02</span><b>Rhythm</b><small>Check both queues on every pass.</small></div><div><span>SHIFT 03+</span><b>Efficiency</b><small>Shorten cooking and handling time.</small></div></div><Link className="underlined-link dark-link" href="/upgrades">Plan the upgrade route →</Link></div>
          <aside className="learning-card"><span>YOUR LEARNING PATH</span>{learningPath.map((item)=><Link href={item.href} key={item.href}><b>{item.number}</b><p>{item.label}<small>{item.meta}</small></p><i>→</i></Link>)}<div><strong>PROGRESS PRINCIPLE</strong><p>Batch movement, never the inspection.</p></div></aside>
        </div>
      </section>

      <section className="mistakes-section" id="mistakes"><div className="shell mistakes-grid"><SectionHeading kicker="05 · Common mistakes" title="Small rushes become failed shifts." text="Most bad runs begin with one avoidable shortcut." /><div className="mistakes-list">{mistakes.map(([title,text],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="faq-section" id="faq"><div className="shell faq-grid"><div><SectionHeading kicker="06 · Quick answers" title="Before the bell rings" text="Clear the three questions that slow down a first run." /><Link className="underlined-link dark-link" href="/faq">Open all verified answers →</Link></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="shell"><span>READY FOR SHIFT ONE?</span><h2>Inspect first.<br />Serve second.</h2><p>Follow the full tutorial once. Then keep the field guide open for your next run.</p><Link className="button button-paper" href="/beginner-guide"><span className="button-no">01</span>Start the first-shift tutorial <b>→</b></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
