import { HBi, xyC } from "./gpc.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var zOs, ir_, rr_, Kmc, WBi;
export { Kmc, WBi, ir_, rr_, zOs };
var __wakaru_ByC_initialized = false;
export function ByC() {
if (__wakaru_ByC_initialized) return;
__wakaru_ByC_initialized = true;
"use strict";
E(), Mt(), zOs = 260, ir_ = "min(400px, calc(100vw - 16px))", rr_ = 320, Kmc = 6, WBi = {
    "files-changed": {
        icon: "diff-multiple",
        rowKind: "files-changed",
        label: ()=>"Uncommitted",
        pickStats: HBi
    },
    "last-agent-turn": {
        icon: "git-compare",
        rowKind: "last-agent-turn",
        label: ()=>"Last Agent Turn",
        pickStats: HBi
    },
    staged: {
        icon: "diff-added",
        rowKind: "staged",
        label: ()=>"Staged",
        pickStats: HBi
    },
    unstaged: {
        icon: "diff-ignored",
        rowKind: "unstaged",
        label: ()=>"Unstaged",
        pickStats: HBi
    },
    "all-changes": {
        icon: "diff-single",
        rowKind: "all-changes",
        label: ()=>"All Changes",
        pickStats: HBi
    },
    "all-commits": {
        icon: "git-branch",
        rowKind: "commits",
        label: ()=>"All Commits",
        pickStats: xyC
    }
};

}
