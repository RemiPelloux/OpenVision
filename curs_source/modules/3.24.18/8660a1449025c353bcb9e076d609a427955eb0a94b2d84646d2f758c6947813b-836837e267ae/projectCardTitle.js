import { E } from "./tslib.es6.js";
var Tph, Eph, Gna;
export { Eph, Gna, Tph };
var __wakaru_Iph_initialized = false;
export function Iph() {
if (__wakaru_Iph_initialized) return;
__wakaru_Iph_initialized = true;
"use strict";
E(), Tph = /^!\[[^\]]*\]\([^)]+\)$/, Eph = /^(?:<\/?(?:video|source)(?=[\s/>])[^>]*>\s*)+$/i, Gna = /<video(?=[\s/>])[^>]*>[\s\S]*?<\/video\s*>/gi;

}
