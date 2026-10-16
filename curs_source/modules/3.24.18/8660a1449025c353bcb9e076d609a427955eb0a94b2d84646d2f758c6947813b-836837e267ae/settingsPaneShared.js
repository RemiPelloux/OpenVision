import { C6w, CNn, T6w, w6w, yLi } from "./BA.js";
import { dN } from "./settingsScrollIds.js";
import { E } from "./tslib.es6.js";
var DUl, SLi, Ezf, NUl, Izf, xzf, Azf, Rzf, oCs, Pzf, Mzf, Dzf, Nzf, Lzf, Ozf, kLi, LUl, OUl, Fzf, TNn, Bzf, Uzf, jzf;
export { Azf, Bzf, DUl, Dzf, Ezf, Fzf, Izf, LUl, Lzf, Mzf, NUl, Nzf, OUl, Ozf, Pzf, Rzf, SLi, TNn, Uzf, jzf, kLi, oCs, xzf };
var __wakaru_wDe_initialized = false;
export function wDe() {
if (__wakaru_wDe_initialized) return;
__wakaru_wDe_initialized = true;
"use strict";
E(), dN(), DUl = "general", SLi = [
    "general",
    "profile",
    "vscode-settings",
    "appearance",
    "plan-usage",
    "chat",
    "background-composer",
    "models",
    "voice",
    "git-prs",
    "customize",
    "plugins",
    "rules",
    "mcp",
    "hooks",
    "browser",
    "indexing",
    "beta",
    "developer"
], Ezf = [
    "docs"
], NUl = [
    "appearance",
    "profile"
], Izf = [
    "chat",
    "general",
    "plan-usage",
    "git-prs",
    "browser",
    "beta",
    "developer",
    "background-composer",
    "indexing",
    "models",
    "voice"
], xzf = [
    ...NUl,
    ...Izf
], Azf = new Set(xzf), Rzf = new Set(NUl), oCs = new Map([
    [
        "vscode-settings",
        "workbench.action.openSettings"
    ]
]), Pzf = [
    "customize"
], Mzf = new Set(Pzf), Dzf = [
    "plugins",
    "rules",
    "mcp",
    "hooks"
], Nzf = [
    "fun",
    "network",
    "self-driving",
    "tab",
    "worktrees"
], Lzf = new Set(Nzf), Ozf = new Set(SLi.filter((t)=>!w6w(t) && !yLi(t) && !CNn(t) && !T6w(t) && !C6w(t))), kLi = {
    docs: "Docs",
    contact: "Contact"
}, LUl = {
    docs: "https://cursor.com/docs",
    contact: "mailto:hi@cursor.com"
}, OUl = new Map([
    [
        "background-composer",
        "https://cursor.com/dashboard/cloud-agents"
    ]
]), Fzf = ()=>"Rules, Skills, Subagents", TNn = {
    general: "General",
    profile: "Profile",
    "vscode-settings": "VS Code Settings",
    appearance: "Appearance",
    fun: "Fun",
    "plan-usage": "Plan & Usage",
    chat: "Agents",
    browser: "Browser & Network",
    tab: "Tab",
    models: "Models",
    voice: "Voice",
    "git-prs": "Source Control",
    rules: "Rules, Skills, Subagents",
    plugins: "Plugins",
    customize: "Customize",
    indexing: "Code Intelligence",
    mcp: "Tools & MCPs",
    hooks: "Hooks",
    beta: "Beta",
    network: "Network",
    "background-composer": "Cloud Agents",
    "self-driving": "Self-Driving PRs",
    worktrees: "Worktrees",
    developer: "Developer"
}, Bzf = (t)=>({
        ...TNn,
        rules: Fzf()
    }), Uzf = [
    [
        "vscode-settings"
    ],
    [
        "appearance"
    ],
    [
        "background-composer",
        "models",
        "voice",
        "git-prs"
    ]
], jzf = {
    fun: "appearance",
    network: "browser",
    "self-driving": "git-prs",
    worktrees: "git-prs",
    tab: "indexing"
};

}
