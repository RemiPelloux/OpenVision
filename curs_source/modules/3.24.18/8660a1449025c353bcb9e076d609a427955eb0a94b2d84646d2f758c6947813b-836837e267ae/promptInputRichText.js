import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var $Oa, UFp;
export { $Oa, UFp };
var __wakaru_wqr_initialized = false;
export function wqr() {
if (__wakaru_wqr_initialized) return;
__wakaru_wqr_initialized = true;
"use strict";
E(), iv(), $Oa = ze.lazy(()=>ze.object({
        type: ze.string().optional(),
        text: ze.string().optional(),
        attrs: ze.record(ze.string(), ze.unknown()).optional(),
        content: ze.array($Oa).optional()
    }).passthrough()), UFp = ze.object({
    type: ze.literal("doc"),
    content: ze.array($Oa)
}).passthrough();

}
