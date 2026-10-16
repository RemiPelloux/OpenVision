import { E } from "./tslib.es6.js";
var WEg, GEg, qEg, zEg;
export { GEg, WEg, qEg, zEg };
var __wakaru_VEg_initialized = false;
export function VEg() {
if (__wakaru_VEg_initialized) return;
__wakaru_VEg_initialized = true;
"use strict";
E(), WEg = (t)=>t.startsWith("bitbucket") ? "commits" : t.startsWith("gitlab") ? "-/commit" : "commit", GEg = (t)=>t.startsWith("bitbucket") ? "pull-requests" : t.startsWith("gitlab") ? "-/merge_requests" : "pull", qEg = [
    /not a git repository \(or any of the parent directories\)/i,
    /not a git repository \(or any parent up to mount point/i,
    /^fatal:\s*not a git repository$/im,
    /^not a git repo$/im,
    /^workspace is not a git repository$/im,
    /^no git repository found$/im
], zEg = [
    /\bspawn(?:sync)?\b[\s\S]*\b(ENOENT|EACCES|EAGAIN)\b/i,
    /^\s*E(NOENT|ACCES|AGAIN)\b/i
];

}
