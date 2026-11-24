// Seventeen Syllables of Debugging.
// One haiku about debugging, three lines in the 5-7-5 shape,
// written as plain text to /output/entry.txt.
//
//   git blame points at me          (5)
//   three years ago, my own name    (7)
//   past me, you traitor            (5)
//
// The picture at the centre is concrete: git blame, the annotation
// naming the author of a line, three years back — and the author is me.
// The last line turns it: the enemy I have been hunting is my own
// past self, addressed as a traitor.
import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "git blame points at me", // 5
  "three years ago, my own name", // 7
  "past me, you traitor", // 5
];

// The entry is exactly three lines and at most 200 characters;
// refuse to write anything else rather than ship a malformed haiku.
if (lines.length !== 3) throw new Error("haiku must be three lines");
const haiku = lines.join("\n");
if (haiku.length > 200) throw new Error("haiku over 200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
