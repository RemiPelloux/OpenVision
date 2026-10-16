import { x } from "./tslib.es6.js";
var Dbn, rqc, ICg, sqc, oqc, ACg, aqc, RCg, cqc, DCg, MCg, lqc, bU;
export { ACg, DCg, Dbn, ICg, MCg, RCg, aqc, bU, cqc, lqc, oqc, rqc, sqc };
var __wakaru_uqc_initialized = false;
export function uqc() {
if (__wakaru_uqc_initialized) return;
__wakaru_uqc_initialized = true;
"use strict";
x(), Dbn = 100, rqc = 5e7, ICg = Math.floor((rqc - 2 * 1024 * 1024) * 3 / 4), sqc = "env-setup", oqc = `/.cursor/skills-cursor/${sqc}/`, ACg = `${oqc}SKILL.md`, aqc = "cloud-onboarding", RCg = `/.cursor/skills-cursor/${aqc}/SKILL.md`, cqc = "change-monitor-onboarding", DCg = `/.cursor/skills-cursor/${cqc}/SKILL.md`, MCg = [
    "Skip changes that cannot affect what runs in any deployed environment:",
    "- documentation-only changes (Markdown, docs sites, code comments, changelogs)",
    "- formatting, lint, or typo fixes with no behavior change",
    "- test-only changes (test files, fixtures, snapshots)",
    "Monitor everything else, including dependency bumps, configuration, and infrastructure changes."
].join(`
`), lqc = "0d1cbb47-6f2e-4f0e-9c2a-58c0a1f6f0d4", bU = "/workspace";

}
