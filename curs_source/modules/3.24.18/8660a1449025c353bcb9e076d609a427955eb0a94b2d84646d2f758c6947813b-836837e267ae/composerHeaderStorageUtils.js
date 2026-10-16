import { pa } from "./constants_8.js";
import { iv } from "./index_16.js";
import { a9p } from "./stickyArchiveRowMerge.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var Kz, lzr, d9p, h9p;
export { Kz, d9p, h9p, lzr };
var __wakaru_czr_initialized = false;
export function czr() {
if (__wakaru_czr_initialized) return;
__wakaru_czr_initialized = true;
"use strict";
E(), iv(), a9p(), pa(), Kz = "composerHeaders", lzr = "composer.composerHeaders.version", d9p = ze.object({
    allComposers: ze.array(ze.record(ze.string(), ze.unknown())).default([])
}), h9p = ze.object({
    type: ze.literal("head"),
    composerId: ze.string(),
    createdAt: ze.number(),
    forceMode: ze.enum([
        "edit",
        "chat"
    ]).optional()
});

}
