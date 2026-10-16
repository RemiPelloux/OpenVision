import { i } from "./plugin-brand-icon.js";
function rrr(r) {
    return NIt.test(r) || IIt.test(r) ? !0 : !arr.test(r);
}
function $It(r) {
    return r.startsWith("/") || r.startsWith("\\") ? !0 : IIt.test(r);
}
function irr(r) {
    if (!r.includes("%")) return r;
    const e = r.trim();
    if (!e || !rrr(e)) return r;
    try {
        const a = decodeURI(e);
        return !NIt.test(e) && !$It(e) && $It(a) ? r : a;
    } catch  {
        return r;
    }
}
var IIt, NIt, arr;
export { $It, IIt, NIt, arr, irr, rrr };
var __wakaru_Mki_initialized = false;
export function Mki() {
if (__wakaru_Mki_initialized) return;
__wakaru_Mki_initialized = true;
"use strict";
IIt = /^[a-zA-Z]:[\\/]/, NIt = /^file:/i, arr = /^[a-zA-Z][a-zA-Z0-9+.-]*:/, i(rrr, "isSchemeLessOrFileHref"), i($It, "isFilesystemAbsolutePath"), i(irr, "decodeMarkdownFilePathHref");

}
