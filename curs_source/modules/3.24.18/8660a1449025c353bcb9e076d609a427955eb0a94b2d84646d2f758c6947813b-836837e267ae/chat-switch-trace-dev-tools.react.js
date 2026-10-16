import { PFn } from "./Ejv.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { QVe } from "./use-glass-panel-actions.react.js";
import { Bs } from "./window.js";
var Nlc, Llc, ren, D$v, oNs, N$v, L$v;
export { D$v, L$v, Llc, N$v, Nlc, oNs, ren };
var __wakaru_rrC_initialized = false;
export function rrC() {
if (__wakaru_rrC_initialized) return;
__wakaru_rrC_initialized = true;
"use strict";
E(), Mt(), Bs(), PFn(), QVe(), Nlc = 360, Llc = 360, ren = 12, D$v = 48, oNs = [
    {
        id: "trace-started",
        label: "Trace started",
        color: "active"
    },
    {
        id: "shell-presented",
        label: "Shell presented",
        color: "yellow"
    },
    {
        id: "visible-content-ready",
        label: "Visible content ready",
        color: "green"
    },
    {
        id: "transcript-settled",
        label: "Transcript settled",
        color: "green"
    }
], N$v = {
    color: "secondary",
    label: "Waiting for a chat switch"
}, L$v = [
    [
        "Branch",
        "branch"
    ],
    [
        "Agent Kind",
        "agent_kind"
    ],
    [
        "Surface",
        "surface"
    ],
    [
        "Present Size",
        "present_size"
    ],
    [
        "Revisit",
        "revisit"
    ]
];

}
