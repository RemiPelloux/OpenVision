import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var vZm, _Zm;
export { _Zm, vZm };
var __wakaru_ptl_initialized = false;
export function ptl() {
if (__wakaru_ptl_initialized) return;
__wakaru_ptl_initialized = true;
"use strict";
E(), iv(), vZm = ze.object({
    case: ze.literal("browserConnection"),
    mode: ze.literal("editor")
}).passthrough(), _Zm = ze.object({
    case: ze.literal("browserSelection"),
    browserId: ze.string(),
    url: ze.string(),
    pageTitle: ze.string().optional()
}).passthrough();

}
