import { zt } from "./LYd.js";
import { pdc } from "./_Hv.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { jsx as Y6 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var mdc, gdc;
export { gdc, mdc };
var __wakaru_mcC_initialized = false;
export function mcC() {
if (__wakaru_mcC_initialized) return;
__wakaru_mcC_initialized = true;
"use strict";
E(), Mt(), mdc = [
    {
        description: "Ready to merge \xB7 #142",
        id: "pr-ready",
        leading: Y6(zt, {
            "aria-hidden": !0,
            name: "git-pull-request-done",
            size: "base"
        }),
        title: "Fix habit streak off-by-one"
    },
    {
        description: "Merged \xB7 #128",
        id: "pr-merged",
        leading: Y6(zt, {
            "aria-hidden": !0,
            name: "git-merge",
            size: "base"
        }),
        title: "Raise dark-mode contrast"
    },
    {
        description: "Waiting for reviewers \xB7 #151",
        id: "pr-long",
        leading: Y6(zt, {
            "aria-hidden": !0,
            name: "rect-magnifying-glass",
            size: "base"
        }),
        title: "Recompute habit streaks from local midnight so timezone changes stop double-counting yesterday"
    }
], gdc = [
    {
        description: "Wiring the digest template",
        id: "agent-working",
        leading: Y6(pdc, {
            color: "var(--vscode-testing-iconQueued)"
        }),
        title: "Add weekly recap email"
    },
    {
        description: "Waiting on command approval",
        id: "agent-attention",
        leading: Y6(pdc, {
            color: "var(--vscode-list-warningForeground)"
        }),
        title: "Add-habit keyboard flow"
    },
    {
        description: "Reconciling streak totals against the reminder schedule",
        id: "agent-long",
        leading: Y6(pdc, {
            color: "var(--vscode-testing-iconQueued)"
        }),
        title: "Rewrite the weekly recap digest template and all supporting copy"
    }
];

}
