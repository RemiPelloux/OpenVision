import { iv } from "./index_16.js";
import { ZUl, tZ } from "./per-branch-pr-tabs.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var vcv, _cv;
export { _cv, vcv };
var __wakaru_dt0_initialized = false;
export function dt0() {
if (__wakaru_dt0_initialized) return;
__wakaru_dt0_initialized = true;
"use strict";
E(), iv(), tZ(), vcv = ze.discriminatedUnion("kind", [
    ze.object({
        kind: ze.literal("focused")
    }),
    ze.object({
        kind: ze.literal("agent"),
        agentId: ze.string()
    })
]), _cv = {
    branchName: ze.string().optional(),
    mergeConflictTarget: vcv.optional(),
    prStatusIcon: ze.enum(ZUl).optional(),
    repoPath: ze.string().optional(),
    repoUrl: ze.string().optional(),
    prUrl: ze.string().optional(),
    prTitle: ze.string().optional(),
    ownerAgentId: ze.string().optional(),
    preview: ze.literal(!0).optional()
};

}
