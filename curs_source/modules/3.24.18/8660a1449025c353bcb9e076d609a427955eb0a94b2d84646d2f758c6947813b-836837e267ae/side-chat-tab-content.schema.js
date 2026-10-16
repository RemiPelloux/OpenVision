import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var Vmv;
export { Vmv };
var __wakaru_Fl0_initialized = false;
export function Fl0() {
if (__wakaru_Fl0_initialized) return;
__wakaru_Fl0_initialized = true;
"use strict";
E(), iv(), Vmv = {
    agentId: ze.string(),
    ownerAgentId: ze.string().optional(),
    label: ze.string().optional()
};

}
