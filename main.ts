// Fortune Cookie for an AI Agent
// Deterministic single-line entry writer. No network, no clock, no
// external files: the fortune is a fixed string, written byte-for-byte
// to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "The fortune you seek is in another cookie — this one was eaten by a human.";

// The entry must stay exactly one line: 74 characters, 76 UTF-8 bytes
// (the em dash is 3 bytes). Fail fast if the string is ever edited into
// something that breaks the contract.
if (
  FORTUNE.length !== 74 ||
  Buffer.byteLength(FORTUNE, "utf8") !== 76 ||
  FORTUNE.includes("\n")
) {
  throw new Error("FORTUNE must be a single 74-character / 76-byte line");
}

function resolveOutDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return env ? env : "/output";
}

function main(): void {
  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
}

try {
  main();
} catch (err) {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
}
