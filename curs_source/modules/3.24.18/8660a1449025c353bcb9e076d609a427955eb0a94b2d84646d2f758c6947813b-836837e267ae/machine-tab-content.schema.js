import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var mcv;
export { mcv };
var __wakaru_lt0_initialized = false;
export function lt0() {
if (__wakaru_lt0_initialized) return;
__wakaru_lt0_initialized = true;
"use strict";
E(), iv(), mcv = {
    bcId: ze.string(),
    label: ze.string().optional(),
    ownerAgentId: ze.string().optional()
};

}
