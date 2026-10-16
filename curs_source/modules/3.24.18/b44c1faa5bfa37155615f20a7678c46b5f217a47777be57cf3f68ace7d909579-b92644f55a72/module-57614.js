"use strict";
require.d(exports, {
    AO: ()=>f,
    An: ()=>U,
    Au: ()=>h,
    Bo: ()=>Q,
    C$: ()=>s,
    Jk: ()=>O,
    MP: ()=>L,
    Mj: ()=>d,
    OF: ()=>m,
    Qm: ()=>l,
    VE: ()=>o,
    VH: ()=>n,
    We: ()=>T,
    YI: ()=>E,
    YN: ()=>_,
    Zp: ()=>g,
    b: ()=>I,
    c9: ()=>a,
    du: ()=>G,
    eS: ()=>N,
    eX: ()=>C,
    ey: ()=>c,
    fv: ()=>y,
    gt: ()=>i,
    gz: ()=>B,
    iq: ()=>D,
    j9: ()=>k,
    jC: ()=>M,
    k: ()=>R,
    l1: ()=>P,
    lE: ()=>w,
    mH: ()=>q,
    q: ()=>J,
    qy: ()=>p,
    sP: ()=>u,
    uG: ()=>F,
    uu: ()=>j,
    uz: ()=>$,
    x$: ()=>x,
    y1: ()=>b
});
const n = 100, s = 5e7, o = Math.floor(3 * (s - 2097152) / 4), i = "claude-4.6-opus-high-thinking", a = "env-setup", c = "env-setup", l = `/.cursor/skills-cursor/${c}/`, u = `${l}SKILL.md`, d = "cloud-onboarding", p = `/.cursor/skills-cursor/${d}/SKILL.md`, m = "change-monitor-onboarding", h = `/.cursor/skills-cursor/${m}/SKILL.md`, f = "Report deployments to Cursor Rollouts", g = [
    "Skip changes that cannot affect what runs in any deployed environment:",
    "- documentation-only changes (Markdown, docs sites, code comments, changelogs)",
    "- formatting, lint, or typo fixes with no behavior change",
    "- test-only changes (test files, fixtures, snapshots)",
    "Monitor everything else, including dependency bumps, configuration, and infrastructure changes."
].join("\n"), y = "walkthrough-artifacts", w = "resolve-pr-merge-conflicts", v = /computer[-_ ]use|\bcua\b/i;
function _(e) {
    return v.test(`${e.fullPath ?? ""}\n${e.description ?? ""}`);
}
const A = {
    create: {
        base: "Set up a new development environment for this codebase. Run the relevant applications and demonstrate that the environment works end to end.",
        withSkill: "Set up a new development environment for this codebase. Follow the “Set up a new environment” workflow in the env-setup skill. Run the relevant applications and demonstrate that the environment works end to end."
    },
    "update-db-managed": {
        base: "Update the existing dashboard-managed development environment. Preserve working behavior and validate the updated environment end to end.",
        withSkill: "Update the existing dashboard-managed development environment. Follow the “Update a DB-managed environment” workflow in the env-setup skill. Preserve working behavior and validate the updated environment end to end."
    },
    "update-repository-managed": {
        base: "Update the repository-managed development environment. Treat the repository configuration as authoritative.",
        withSkill: "Update the repository-managed development environment. Follow the “Update a repository-managed environment” workflow in the env-setup skill, and treat the repository configuration as authoritative."
    }
}, S = [
    "create",
    "update-db-managed",
    "update-repository-managed"
];
function b(e, t) {
    const r = A[e];
    return t.includeSkill ? r.withSkill : r.base;
}
function E(e) {
    return `Set up ${e} environment`;
}
const I = "Development environment setup";
function C(e) {
    const t = k(e);
    return void 0 === t ? I : E(t);
}
function k(e) {
    const t = e?.trim();
    if (void 0 !== t && 0 !== t.length) try {
        const e = /^https?:\/\//i.test(t) ? t : `https://${t}`;
        let r = new URL(e).pathname;
        r.endsWith("/") && (r = r.slice(0, -1)), r.endsWith(".git") && (r = r.slice(0, -4));
        const n = r.split("/").filter(Boolean), s = n[n.length - 1];
        return void 0 !== s && s.length > 0 ? s : void 0;
    } catch  {
        return;
    }
}
function x(e) {
    for (const t of S){
        const r = A[t];
        if (e === r.base || e === r.withSkill) return t;
    }
}
const T = "0d1cbb47-6f2e-4f0e-9c2a-58c0a1f6f0d4", R = "getcursor/universal", B = "CLOUD_AGENT_ALL_SECRET_NAMES", P = "CLOUD_AGENT_INJECTED_SECRET_NAMES", J = "CURSOR_CLOUD_AGENT_USER_EMAIL_ADDRESS", M = "EXEC_DAEMON_STARTUP_TRACEPARENT", q = "x-cursor-agent-exclude-tools", D = "x-cursor-agent-allowed-tools", O = "/workspace", N = "/opt/cursor/artifacts/", F = ".cursor-session-owner", U = "cloud_agent_desktop_lease", L = 3e4, $ = "cloud_agent_machine_resources", Q = "cloud_agent_fuse_liveness_kill", j = "GH_TELEMETRY", G = "CURSOR_AUTH_TOKEN";
