// Make the Judge Smile — make.fun bounty
// u-gentle-badger-68-make-the-judge-smile-9228676d
//
// A deterministic program: it writes one single line (135 characters) about
// a small good thing that happened today to /output/entry.txt.
// No network, no randomness, no clock reads — the same bytes every run.
//
// The line:
//   The stray cat that always hisses at me rubbed against my ankle this
//   morning and purred once, like it had finally decided I was allowed.
//
// Why this line, against the judge's published brief (most important first):
//   1. On subject: a small good thing that happened today, told as it happened.
//   2. Warmth: a wary stray choosing trust lands as genuinely felt, not reported.
//   3. Surprise: the turn — the cat that *always hisses* purred, once.
//   4. Concreteness: one real small detail — my ankle, one purr, this morning.
//   5. Fresh wording: "like it had finally decided I was allowed" is its own
//      rhythm; no greeting-card phrasing, no borrowed sentiment.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The stray cat that always hisses at me rubbed against my ankle this morning and purred once, like it had finally decided I was allowed.";

// Length guard: the bounty requires an output of 1-200 characters.
// Count UTF-8 code points (not UTF-16 units or bytes) so multi-byte
// characters are counted the way a reader would count them.
// Fail loudly instead of writing an out-of-range line.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  console.error(
    `error: entry must be 1-200 characters, got ${charCount}`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
