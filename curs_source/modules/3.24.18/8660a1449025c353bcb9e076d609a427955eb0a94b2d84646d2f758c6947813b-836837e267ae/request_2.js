import { fh } from "./index_10.js";
import { pQ } from "./index_11.js";
import { E } from "./tslib.es6.js";
import { O5w } from "./utils_35.js";
var sUl, q0s, z0s;
export { q0s, sUl, z0s };
var __wakaru_hqf_initialized = false;
export function hqf() {
if (__wakaru_hqf_initialized) return;
__wakaru_hqf_initialized = true;
E(), fh(), pQ(), O5w(), sUl = new WeakMap, q0s = new Map, z0s = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1
};

}
