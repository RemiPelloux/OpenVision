import { Bt } from "./nls.js";
import { Nos } from "./pullRequestMergeability.js";
import { E } from "./tslib.es6.js";
var Pw_;
export { Pw_ };
var __wakaru_C4s_initialized = false;
export function C4s() {
if (__wakaru_C4s_initialized) return;
__wakaru_C4s_initialized = true;
"use strict";
E(), Bt(), Nos(), Pw_ = {
    draft: {
        tone: "default",
        icon: "git-pull-request-draft",
        iconColor: "tertiary"
    },
    conflict: {
        tone: "orange",
        icon: "git-compare",
        iconColor: "orange"
    },
    "ready-to-merge": {
        tone: "green",
        icon: "git-pull-request-done",
        iconColor: "green"
    },
    "ci-failing": {
        tone: "red",
        icon: "close",
        iconColor: "red"
    },
    "action-required": {
        tone: "yellow",
        icon: "exclamation-triangle",
        iconColor: "yellow"
    },
    "needs-review": {
        tone: "green",
        icon: "rect-magnifying-glass",
        iconColor: "yellow"
    },
    merged: {
        tone: "purple",
        icon: "git-merge",
        iconColor: "purple"
    },
    closed: {
        tone: "red",
        icon: "git-pull-request-closed",
        iconColor: "red"
    }
};

}
