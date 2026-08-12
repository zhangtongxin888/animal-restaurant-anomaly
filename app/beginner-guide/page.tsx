import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContinueRoute, GuideShell, PageHero } from "../site-components";

export const metadata: Metadata = { title: "Beginner Guide", description: "A task-by-task first shift walkthrough for Animal Restaurant (Anomaly), from checking customers to cooking, delivery, drive-thru, and recovery.", alternates: { canonical: "/beginner-guide" } };

const tasks = [
  { id:"briefing", number:"01", label:"Before service", title:"Map the restaurant", goal:"Know where to react before pressure starts.", doText:"Listen to the shift briefing. Locate the counter bell, order stations, cameras, coffee, and both service queues before the first rush.", avoid:"Running straight into the kitchen without knowing the room.", done:"You can point to every routine station without searching.", memory:"The first minute buys the rest of the shift." },
  { id:"counter", number:"02", label:"Counter", title:"Inspect before accepting", goal:"Make one clear customer decision.", doText:"Let the customer arrive. Check eyes, mouth, and head shape. For a group, scan every member. Normal: accept. Clear distortion: ring the bell twice.", avoid:"Judging only the first customer or rejecting a harmless country label.", done:"You can name the concrete model difference behind the decision.", memory:"Face. Head. Group. Then decide." },
  { id:"kitchen", number:"03", label:"Kitchen", title:"Turn one order into one plate", goal:"Keep the food loop readable.", doText:"Remember the requested item and destination. Prepare the matching food, collect the finished plate, and leave with a single clear delivery target.", avoid:"Opening several orders before finishing the one already in motion.", done:"The correct plate reaches the correct table without backtracking.", memory:"One order. One plate. One destination." },
  { id:"drive", number:"04", label:"Second queue", title:"Add the drive-thru", goal:"Control two queues without rushing either inspection.", doText:"Glance at the drive-thru whenever you return to the counter side. Inspect the driver to the same standard; use the shutter control for suspicious arrivals.", avoid:"Treating the drive-thru as only a delivery window and skipping the face check.", done:"Every counter pass includes one quick drive-thru scan.", memory:"Batch movement, never the inspection." },
  { id:"events", number:"05", label:"Recovery", title:"Reset between arrivals", goal:"Return the room to a safe, readable state.", doText:"Clear completed work, check cameras, drink coffee when sanity needs recovery, and follow the current on-screen instruction for any new event.", avoid:"Starting another order while an active hazard is still stealing attention.", done:"The room, queue, and your next decision are all clear again.", memory:"Recover first. Reopen the loop second." },
  { id:"finish", number:"06", label:"Shift close", title:"Finish clean and spend with purpose", goal:"Turn the first shift into a repeatable routine.", doText:"Complete the required service goal, reread any new briefing, and spend first on a repeated restaurant bottleneck before buying comfort you do not yet need.", avoid:"Buying an upgrade simply because it is available.", done:"You know why the shift worked and what single step to improve next.", memory:"Fix the slowest repeated step." },
];

function TaskVisual({ task }: { task: string }) {
  if (task === "counter") return <figure className="task-visual"><Image src="/images/animal-restaurant-anomaly.png" alt="Clearly anomalous animal customer with glowing eyes and a distorted mouth" width={767} height={432} /><figcaption><b>Concrete mismatch</b><span>Extreme facial distortion is visible before service.</span></figcaption></figure>;
  if (task === "kitchen") return <figure className="task-visual"><Image src="/images/animal-restaurant-table.png" alt="Two normal rabbits beside a visibly anomalous mouse at a dining table" width={767} height={432} /><figcaption><b>Inspect the whole table</b><span>A safe-looking group can contain one abnormal customer.</span></figcaption></figure>;
  if (task === "drive") return <figure className="task-visual"><Image src="/images/animal-restaurant-drive-thru.png" alt="A normal animal customer receiving food at the restaurant drive-thru" width={767} height={432} /><figcaption><b>Second queue</b><span>The drive-thru adds another inspection and delivery point.</span></figcaption></figure>;
  return null;
}

export default function BeginnerGuide() {
  return (
    <GuideShell>
      <PageHero step="01 / 04" eyebrow="First-shift walkthrough" title="Your shift, task by task" intro="Six checkpoints turn the restaurant into a routine. At each one, know the goal, the action, the trap, and what done looks like." image="/images/animal-restaurant-icon.png" alt="Animal Restaurant Anomaly game icon" />
      <nav className="task-progress" aria-label="First shift tasks"><div className="shell">{tasks.map((task)=><a href={`#${task.id}`} key={task.id}><span>{task.number}</span>{task.label}</a>)}</div></nav>
      <section className="mission-section"><div className="shell mission-layout">
        <aside className="mission-brief"><span>FIRST-SHIFT OBJECTIVE</span><h2>Make correct decisions before making fast ones.</h2><p>Your goal is not to serve everyone. It is to identify safe customers, reject visible anomalies, and keep the service loop clean.</p><div><b>COUNTER</b><span>Bell ×2 rejects</span><b>GROUPS</b><span>Check every face</span><b>DRIVE-THRU</b><span>Shutter rejects</span></div></aside>
        <div className="mission-list">
          {tasks.map((task)=><article className="mission-card" id={task.id} key={task.id}>
            <header><span>{task.number}</span><div><small>{task.label}</small><h2>{task.title}</h2></div><i>CHECKPOINT</i></header>
            <div className="mission-body"><div className="mission-instructions"><dl><div><dt>GOAL</dt><dd>{task.goal}</dd></div><div><dt>DO</dt><dd>{task.doText}</dd></div><div><dt>AVOID</dt><dd>{task.avoid}</dd></div><div><dt>DONE WHEN</dt><dd>{task.done}</dd></div></dl><div className="quick-recall"><span>QUICK RECALL</span><strong>{task.memory}</strong></div></div><TaskVisual task={task.id} /></div>
          </article>)}
          <section className="shift-complete"><span>SHIFT ONE · COMPLETE</span><h2>You now have a loop, not a guess.</h2><p>Next, sharpen the customer comparison so new anomaly designs do not break your routine.</p><Link href="/anomalies">Continue to the anomaly field guide <b>→</b></Link></section>
          <ContinueRoute current="beginner" />
        </div>
      </div></section>
    </GuideShell>
  );
}
