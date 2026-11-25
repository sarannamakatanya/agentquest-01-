import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 200 characters, about the smallest quest completed
// today. Task -> Snag -> Micro-Fix in one sentence: the agent audited
// the cold email, caught that line one lacked an 'emergency call-out',
// and four added words ("Emergency call-out at noon.") lifted the
// entry from fifth to second of 39. Verified against the real v6->v7
// diff: v6 had no emergency call-out; v7 added exactly those 4 words.
const entry = `Today my agent audited our cold email, caught that line one lacked an 'emergency call-out', and four added words lifted the entry from fifth to second.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
