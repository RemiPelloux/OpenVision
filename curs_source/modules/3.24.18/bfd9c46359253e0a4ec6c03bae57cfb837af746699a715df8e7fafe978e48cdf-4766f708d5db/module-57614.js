"use strict";
require.d(exports, {
    MP: ()=>d,
    VE: ()=>n,
    YN: ()=>i,
    c9: ()=>s,
    eS: ()=>u,
    gz: ()=>c,
    k: ()=>a,
    l1: ()=>l
});
const n = Math.floor(35927136), s = "env-setup", o = ([
    "Skip changes that cannot affect what runs in any deployed environment:",
    "- documentation-only changes (Markdown, docs sites, code comments, changelogs)",
    "- formatting, lint, or typo fixes with no behavior change",
    "- test-only changes (test files, fixtures, snapshots)",
    "Monitor everything else, including dependency bumps, configuration, and infrastructure changes."
].join("\n"), /computer[-_ ]use|\bcua\b/i);
function i(e) {
    return o.test(`${e.fullPath ?? ""}\n${e.description ?? ""}`);
}
const a = "getcursor/universal", c = "CLOUD_AGENT_ALL_SECRET_NAMES", l = "CLOUD_AGENT_INJECTED_SECRET_NAMES", u = "/opt/cursor/artifacts/", d = 3e4;
