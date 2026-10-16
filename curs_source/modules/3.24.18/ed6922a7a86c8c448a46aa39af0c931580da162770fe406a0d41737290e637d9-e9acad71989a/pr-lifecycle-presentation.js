import { Y1e } from "./prLifecycle.js";
import { x } from "./tslib.es6.js";
var J$h, eHh;
export { J$h, eHh };
var __wakaru_Krr_initialized = false;
export function Krr() {
if (__wakaru_Krr_initialized) return;
__wakaru_Krr_initialized = true;
"use strict";
x(), Y1e(), J$h = {
    merged: {
        name: "git-merge",
        color: "purple",
        label: "merged"
    },
    closed: {
        name: "git-pull-request-closed",
        color: "git-removed",
        label: "closed"
    },
    draft: {
        name: "git-pull-request-draft",
        color: "tertiary",
        label: "draft"
    },
    open: {
        name: "git-pull-request",
        color: "git-added",
        label: "open"
    }
}, eHh = {
    open: "git-added",
    draft: "secondary",
    merged: "purple",
    closed: "git-removed"
};

}
