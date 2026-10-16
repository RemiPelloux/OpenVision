import { require_Observable } from "../Observable.js";
import { require_scanInternals } from "./scanInternals.js";
var __wakaru_require_scan_cache;
export function require_scan() {
if (__wakaru_require_scan_cache) return __wakaru_require_scan_cache;
var exports2 = {};
__wakaru_require_scan_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scan = void 0;
var Observable_js_1 = require_Observable();
var scanInternals_js_1 = require_scanInternals();
function scan2(accumulator, seed) {
    const hasSeed = arguments.length >= 2;
    return (source)=>new Observable_js_1.Observable((subscriber)=>(0, scanInternals_js_1.scanInternals)(accumulator, seed, hasSeed, true, false, source, subscriber));
}
exports2.scan = scan2;

return exports2;
}
