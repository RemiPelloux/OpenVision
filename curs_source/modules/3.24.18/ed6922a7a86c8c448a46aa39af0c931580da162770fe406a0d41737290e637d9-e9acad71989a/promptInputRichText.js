import { De } from "./De_3.js";
import { HM } from "./index_191.js";
import { x } from "./tslib.es6.js";
var pKs, fLu;
export { fLu, pKs };
var __wakaru_r8i_initialized = false;
export function r8i() {
if (__wakaru_r8i_initialized) return;
__wakaru_r8i_initialized = true;
"use strict";
x(), HM(), pKs = De.lazy(()=>De.object({
        type: De.string().optional(),
        text: De.string().optional(),
        attrs: De.record(De.string(), De.unknown()).optional(),
        content: De.array(pKs).optional()
    }).passthrough()), fLu = De.object({
    type: De.literal("doc"),
    content: De.array(pKs)
}).passthrough();

}
