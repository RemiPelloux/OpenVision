import { sU } from "./prLifecycle.js";
import { E } from "./tslib.es6.js";
var Bhf, Uhf, jhf;
export { Bhf, Uhf, jhf };
var __wakaru_Nvs_initialized = false;
export function Nvs() {
if (__wakaru_Nvs_initialized) return;
__wakaru_Nvs_initialized = true;
"use strict";
E(), sU(), Bhf = {
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
}, Uhf = {
    name: "git-pull-request",
    color: "secondary",
    label: "pull request"
}, jhf = {
    open: "git-added",
    draft: "secondary",
    merged: "purple",
    closed: "git-removed"
};

}
