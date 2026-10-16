import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var fcv;
export { fcv };
var __wakaru_ut0_initialized = false;
export function ut0() {
if (__wakaru_ut0_initialized) return;
__wakaru_ut0_initialized = true;
"use strict";
E(), iv(), fcv = {
    planId: ze.string().optional(),
    planTitle: ze.string().optional(),
    ownerAgentId: ze.string().optional(),
    planAgentId: ze.string().optional()
};

}
