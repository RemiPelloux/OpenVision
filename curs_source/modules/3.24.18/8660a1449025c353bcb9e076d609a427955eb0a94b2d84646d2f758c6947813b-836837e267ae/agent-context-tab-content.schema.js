import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var ecv;
export { ecv };
var __wakaru_ze0_initialized = false;
export function ze0() {
if (__wakaru_ze0_initialized) return;
__wakaru_ze0_initialized = true;
"use strict";
E(), iv(), ecv = {
    agentId: ze.string(),
    label: ze.string().optional(),
    ownerAgentId: ze.string().optional()
};

}
