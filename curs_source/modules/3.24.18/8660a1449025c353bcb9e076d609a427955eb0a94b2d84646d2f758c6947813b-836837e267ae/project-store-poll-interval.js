import { gmv } from "./poll-interval.js";
import { E } from "./tslib.es6.js";
var gVl, kmv, wmv, Cmv, Tmv;
export { Cmv, Tmv, gVl, kmv, wmv };
var __wakaru_rl0_initialized = false;
export function rl0() {
if (__wakaru_rl0_initialized) return;
__wakaru_rl0_initialized = true;
"use strict";
E(), gmv(), gVl = "project_store_poll_interval_ms", kmv = 4e3, wmv = 250, Cmv = 36e5, Tmv = {
    defaultMs: kmv,
    minMs: wmv,
    maxMs: Cmv
};

}
