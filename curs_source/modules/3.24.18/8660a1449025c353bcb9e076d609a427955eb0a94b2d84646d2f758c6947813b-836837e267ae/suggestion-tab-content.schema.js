import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var qlv;
export { qlv };
var __wakaru_Oe0_initialized = false;
export function Oe0() {
if (__wakaru_Oe0_initialized) return;
__wakaru_Oe0_initialized = true;
"use strict";
E(), iv(), qlv = {
    prUrl: ze.string(),
    bcId: ze.string(),
    stableKey: ze.string(),
    ownerAgentId: ze.string().optional(),
    branchName: ze.string().optional(),
    isCloudFsdEnabled: ze.boolean().optional(),
    repoPath: ze.string().optional(),
    title: ze.string().optional()
};

}
