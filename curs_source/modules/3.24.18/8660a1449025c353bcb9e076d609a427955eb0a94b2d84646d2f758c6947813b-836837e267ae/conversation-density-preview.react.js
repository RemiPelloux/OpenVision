import { E } from "./tslib.es6.js";
var pDs, bsc;
export { bsc, pDs };
var __wakaru_G5v_initialized = false;
export function G5v() {
if (__wakaru_G5v_initialized) return;
__wakaru_G5v_initialized = true;
"use strict";
E(), pDs = {
    ariaLabel: "Detailed, edits with diffs and shells with output",
    label: "Detailed",
    value: "detailed"
}, bsc = [
    pDs,
    {
        ariaLabel: "Edits with diffs and compact shells",
        label: "Diff Focus",
        value: "compact-shells"
    },
    {
        ariaLabel: "Compact edits and compact shells, not grouped",
        label: "Balanced",
        value: "compact-ungrouped"
    },
    {
        ariaLabel: "Compact grouped edits and shells",
        label: "Grouped",
        value: "compact-grouped"
    },
    {
        ariaLabel: "Compact grouped tool calls",
        label: "Compact",
        value: "compact-all-grouped"
    }
];

}
