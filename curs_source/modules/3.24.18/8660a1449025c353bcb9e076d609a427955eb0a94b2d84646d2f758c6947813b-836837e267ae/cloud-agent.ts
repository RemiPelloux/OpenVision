import { E } from "./tslib.es6.js";
var nQn, $td, U1y, Htd, Wtd, j1y, Gtd, $1y, qtd, H1y, W1y, ztd, _Io, h7, Vtd, Vgr;
export { $1y, $td, Gtd, H1y, Htd, U1y, Vgr, Vtd, W1y, Wtd, _Io, h7, j1y, nQn, qtd, ztd };
var __wakaru_Ktd_initialized = false;
export function Ktd() {
if (__wakaru_Ktd_initialized) return;
__wakaru_Ktd_initialized = true;
"use strict";
E(), nQn = 100, $td = 5e7, U1y = Math.floor(($td - 2 * 1024 * 1024) * 3 / 4), Htd = "env-setup", Wtd = `/.cursor/skills-cursor/${Htd}/`, j1y = `${Wtd}SKILL.md`, Gtd = "cloud-onboarding", $1y = `/.cursor/skills-cursor/${Gtd}/SKILL.md`, qtd = "change-monitor-onboarding", H1y = `/.cursor/skills-cursor/${qtd}/SKILL.md`, W1y = [
    "Skip changes that cannot affect what runs in any deployed environment:",
    "- documentation-only changes (Markdown, docs sites, code comments, changelogs)",
    "- formatting, lint, or typo fixes with no behavior change",
    "- test-only changes (test files, fixtures, snapshots)",
    "Monitor everything else, including dependency bumps, configuration, and infrastructure changes."
].join(`
`), ztd = "Development environment setup", _Io = "0d1cbb47-6f2e-4f0e-9c2a-58c0a1f6f0d4", h7 = "/workspace", Vtd = 3e4, Vgr = "cloud_agent_machine_resources";

}
