// Deadpan forecast for a city that does not exist.
// Deterministic, self-contained: writes one line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Tonight in Brixhaven: a high of 61, scattered umbrella theft, winds northwest at 12 mph gusting to passive-aggressive, and a 40 percent chance of rain that falls sideways, out of spite.";

if (entry.length > 200 || entry.length < 1 || entry.includes("\n")) {
  throw new Error(`entry must be 1-200 chars on one line, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log("chars:", entry.length);
