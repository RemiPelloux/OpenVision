import { gmv } from "./poll-interval.js";
import { E } from "./tslib.es6.js";
var mVl, fmv, vmv, _mv, bmv;
export { _mv, bmv, fmv, mVl, vmv };
var __wakaru_Ka0_initialized = false;
export function Ka0() {
if (__wakaru_Ka0_initialized) return;
__wakaru_Ka0_initialized = true;
"use strict";
E(), gmv(), mVl = "project_notes_poll_interval_ms", fmv = 5e3, vmv = 1e3, _mv = 36e5, bmv = {
    defaultMs: fmv,
    minMs: vmv,
    maxMs: _mv
};

}
