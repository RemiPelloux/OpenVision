import { Azt } from "./Aeg.js";
import { E } from "./tslib.es6.js";
var KTi, Lxn, crl;
export { KTi, Lxn, crl };
var __wakaru_Mze_initialized = false;
export function Mze() {
if (__wakaru_Mze_initialized) return;
__wakaru_Mze_initialized = true;
"use strict";
E(), KTi = "workbench.action.openCustomizeEditor", Lxn = [
    Azt({
        commandId: "workbench.action.customize.openPlugins",
        label: "Open Plugins",
        tab: "plugins",
        keywords: [
            "customize",
            "marketplace",
            "plugins",
            "extensions"
        ]
    }),
    Azt({
        commandId: "workbench.action.customize.openMCPs",
        label: "Open MCPs",
        tab: "mcps",
        keywords: [
            "customize",
            "mcp",
            "mcps",
            "model context protocol",
            "servers",
            "tools"
        ]
    }),
    Azt({
        commandId: "workbench.action.customize.openSkills",
        label: "Open Skills",
        tab: "skills",
        keywords: [
            "customize",
            "skills"
        ]
    }),
    Azt({
        commandId: "workbench.action.customize.openSubagents",
        label: "Open Subagents",
        tab: "agents",
        keywords: [
            "customize",
            "subagents",
            "agents"
        ]
    }),
    Azt({
        commandId: "workbench.action.customize.openRules",
        label: "Open Rules",
        tab: "rules",
        keywords: [
            "customize",
            "rules"
        ]
    }),
    Azt({
        commandId: "workbench.action.customize.openCommands",
        label: "Open Commands",
        tab: "commands",
        keywords: [
            "customize",
            "commands",
            "slash commands"
        ]
    }),
    Azt({
        commandId: "workbench.action.customize.openHooks",
        label: "Open Hooks",
        tab: "hooks",
        keywords: [
            "customize",
            "hooks"
        ]
    })
], crl = new Map(Lxn.map((t)=>[
        t.tab,
        t
    ]));

}
