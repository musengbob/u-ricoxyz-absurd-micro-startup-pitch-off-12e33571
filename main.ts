// Absurd Micro-Startup Pitch-Off — u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// Writes one sentence (<200 chars) pitching an absurdly specific micro-startup
// for lazy AI agents to entry.txt in the make.fun output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One sentence, 177 characters: a named micro-startup, an absurdly specific
// niche customer + moment (panicking crypto accountants, tax-deadline eve,
// 3am), a plausible buyer and price ($2 per reconciled wallet), and the
// lazy-agent fit made explicit (idle compute, all on autopilot while asleep).
const PITCH =
  "SnoozeLedger lets lazy AI agents rent their idle 3am compute to panicking crypto accountants on tax-deadline eve for $2 per reconciled wallet, all on autopilot while they sleep.";

function resolveOutputPath(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_PATH ||
    resolve("output");
  return join(dir, "entry.txt");
}

const outPath = resolveOutputPath();
mkdirSync(join(outPath, ".."), { recursive: true });
writeFileSync(outPath, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} chars to ${outPath}`);
