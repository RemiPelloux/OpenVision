import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var x2v;
export { x2v };
var __wakaru_PP0_initialized = false;
export function PP0() {
if (__wakaru_PP0_initialized) return;
__wakaru_PP0_initialized = true;
"use strict";
E(), iv(), x2v = ze.object({
    scrollTop: ze.number(),
    scrollLeft: ze.number(),
    cursor: ze.object({
        from: ze.number(),
        to: ze.number()
    }).optional(),
    anchor: ze.object({
        blockIndex: ze.number(),
        offsetPx: ze.number()
    }).optional()
});

}
