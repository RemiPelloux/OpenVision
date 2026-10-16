import { CPs, TPs, e5n, mtc } from "./glass-display-constants.js";
import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var f2v, gtc, Zut, hJt, ftc;
export { Zut, f2v, ftc, gtc, hJt };
var __wakaru_vtc_initialized = false;
export function vtc() {
if (__wakaru_vtc_initialized) return;
__wakaru_vtc_initialized = true;
"use strict";
E(), iv(), e5n(), f2v = ze.number().int().min(CPs).max(mtc), gtc = ze.union([
    ze.literal(10),
    ze.literal(11),
    ze.literal(12),
    ze.literal(13),
    ze.literal(14),
    ze.literal(15),
    ze.literal(16),
    ze.literal(17),
    ze.literal(18),
    ze.literal(19),
    ze.literal(20),
    ze.literal(21),
    ze.literal(22)
]), Zut = Object.freeze(Array.from({
    length: mtc - CPs + 1
}, (t, e)=>CPs + e)), hJt = Object.freeze(gtc.options.map((t)=>t.value)), ftc = ze.object({
    uiFontSizePx: f2v.optional(),
    codeFontSizePx: gtc.optional(),
    codeZoomOffsetPx: ze.number().int().optional(),
    uiFontFamily: ze.string().max(TPs).optional(),
    codeFontFamily: ze.string().max(TPs).optional()
});

}
