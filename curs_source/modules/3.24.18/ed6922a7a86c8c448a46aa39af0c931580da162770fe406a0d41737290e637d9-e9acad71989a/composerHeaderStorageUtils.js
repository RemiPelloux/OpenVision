import { De } from "./De_3.js";
import { So } from "./constants_8.js";
import { HM } from "./index_191.js";
import { vFu } from "./stickyArchiveRowMerge.js";
import { x } from "./tslib.es6.js";
var Vj, MYs, SFu, kFu;
export { MYs, SFu, Vj, kFu };
var __wakaru_wFu_initialized = false;
export function wFu() {
if (__wakaru_wFu_initialized) return;
__wakaru_wFu_initialized = true;
"use strict";
x(), HM(), vFu(), So(), Vj = "composerHeaders", MYs = "composer.composerHeaders.version", SFu = De.object({
    allComposers: De.array(De.record(De.string(), De.unknown())).default([])
}), kFu = De.object({
    type: De.literal("head"),
    composerId: De.string(),
    createdAt: De.number(),
    forceMode: De.enum([
        "edit",
        "chat"
    ]).optional()
});

}
