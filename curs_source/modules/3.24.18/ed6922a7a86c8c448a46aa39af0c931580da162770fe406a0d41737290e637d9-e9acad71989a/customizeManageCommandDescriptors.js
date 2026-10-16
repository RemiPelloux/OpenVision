import { iCt } from "./cgh.js";
import { x } from "./tslib.es6.js";
var GFn, DXi, hvh;
export { DXi, GFn, hvh };
var __wakaru_FVt_initialized = false;
export function FVt() {
if (__wakaru_FVt_initialized) return;
__wakaru_FVt_initialized = true;
"use strict";
x(), GFn = "workbench.action.openCustomizeEditor", DXi = [
    iCt({
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
    iCt({
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
    iCt({
        commandId: "workbench.action.customize.openSkills",
        label: "Open Skills",
        tab: "skills",
        keywords: [
            "customize",
            "skills"
        ]
    }),
    iCt({
        commandId: "workbench.action.customize.openSubagents",
        label: "Open Subagents",
        tab: "agents",
        keywords: [
            "customize",
            "subagents",
            "agents"
        ]
    }),
    iCt({
        commandId: "workbench.action.customize.openRules",
        label: "Open Rules",
        tab: "rules",
        keywords: [
            "customize",
            "rules"
        ]
    }),
    iCt({
        commandId: "workbench.action.customize.openCommands",
        label: "Open Commands",
        tab: "commands",
        keywords: [
            "customize",
            "commands",
            "slash commands"
        ]
    }),
    iCt({
        commandId: "workbench.action.customize.openHooks",
        label: "Open Hooks",
        tab: "hooks",
        keywords: [
            "customize",
            "hooks"
        ]
    })
], hvh = new Map(DXi.map((e)=>[
        e.tab,
        e
    ]));

}
