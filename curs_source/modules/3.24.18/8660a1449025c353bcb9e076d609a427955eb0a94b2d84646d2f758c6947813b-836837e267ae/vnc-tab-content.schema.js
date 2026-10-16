import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var Zmv, Qmv;
export { Qmv, Zmv };
var __wakaru_Wl0_initialized = false;
export function Wl0() {
if (__wakaru_Wl0_initialized) return;
__wakaru_Wl0_initialized = true;
"use strict";
E(), iv(), Zmv = {
    bcId: ze.string().optional()
}, Qmv = {
    bcId: ze.string(),
    label: ze.string().optional(),
    ownerAgentId: ze.string().optional()
};

}
