import { Klv, xql } from "./diff-tab-content.schema.js";
import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var Ylv;
export { Ylv };
var __wakaru_Ue0_initialized = false;
export function Ue0() {
if (__wakaru_Ue0_initialized) return;
__wakaru_Ue0_initialized = true;
"use strict";
E(), iv(), Klv(), Ylv = {
    bcId: ze.string(),
    label: ze.string().optional(),
    ownerAgentId: ze.string().optional(),
    initialFilterScope: ze.enum([
        "lastTurn",
        "uncommitted",
        "allChanges",
        "unstaged",
        "staged",
        "branch"
    ]).optional(),
    initialFilterScopeRequestId: ze.number().optional(),
    presentationRequest: xql.presentationRequest
};

}
