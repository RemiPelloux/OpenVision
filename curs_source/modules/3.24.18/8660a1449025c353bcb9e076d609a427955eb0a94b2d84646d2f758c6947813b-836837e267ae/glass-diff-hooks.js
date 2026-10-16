import { E } from "./tslib.es6.js";
import { Lh } from "./workspaceMetadataService.js";
var K0v, Y0v, AOn, l2s, X0v, Z0v;
export { AOn, K0v, X0v, Y0v, Z0v, l2s };
var __wakaru_qV_initialized = false;
export function qV() {
if (__wakaru_qV_initialized) return;
__wakaru_qV_initialized = true;
"use strict";
E(), Lh(), K0v = {
    filePaths: [],
    isLoading: !1,
    error: void 0
}, Y0v = Object.freeze({
    commits: Object.freeze([]),
    selection: {
        kind: "allCommits"
    },
    configuredTargetRefName: "HEAD",
    effectiveTargetRefName: "HEAD",
    mergeBaseRefName: "",
    hasEnumeratedCommits: !1
}), AOn = Object.freeze({
    filePaths: Object.freeze([]),
    statsByPath: new Map,
    additions: 0,
    deletions: 0,
    isLoaded: !1
}), l2s = new Map, X0v = Object.freeze({
    repoEpoch: 0,
    refreshEpoch: 0,
    scope: AOn
}), Z0v = {
    repositories: Object.freeze([]),
    activeRepositoryId: void 0,
    selectedRepositoryId: void 0
};

}
