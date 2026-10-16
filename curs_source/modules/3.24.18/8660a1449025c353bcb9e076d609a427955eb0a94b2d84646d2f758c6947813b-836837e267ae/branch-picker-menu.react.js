import { Mt } from "./index_197.js";
import { Fi_ } from "./picker-trigger.react.js";
import { E } from "./tslib.es6.js";
var Ui_, ji_, $i_, Hi_, Wi_;
export { $i_, Hi_, Ui_, Wi_, ji_ };
var __wakaru_eyC_initialized = false;
export function eyC() {
if (__wakaru_eyC_initialized) return;
__wakaru_eyC_initialized = true;
"use strict";
E(), Mt(), Fi_(), Ui_ = 5, ji_ = {
    includeAgo: !0,
    includeSeconds: !0
}, $i_ = {
    opened: "Opened",
    drafted: "Drafted",
    merged: "Merged",
    closed: "Closed"
}, Hi_ = {
    name: "git-commit",
    color: "secondary"
}, Wi_ = {
    opened: {
        name: "git-pull-request",
        color: "git-added"
    },
    drafted: {
        name: "git-pull-request-draft",
        color: "secondary"
    },
    merged: {
        name: "git-pull-request-done",
        color: "purple"
    },
    closed: {
        name: "git-pull-request-closed",
        color: "git-removed"
    }
};

}
