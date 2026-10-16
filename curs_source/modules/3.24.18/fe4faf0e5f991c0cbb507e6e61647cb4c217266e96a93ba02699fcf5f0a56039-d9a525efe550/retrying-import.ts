import { i } from "./plugin-brand-icon.js";
function V1r(r) {
    if (!(r instanceof TypeError)) return null;
    const e = X1r.exec(r.message)?.[1];
    return e !== void 0 && URL.canParse(e) ? e : null;
}
function K1r(r, e) {
    let a = null, s = null, l = 0;
    return async ()=>{
        if (a !== null) return a.value;
        try {
            if (s === null) return a = {
                value: e(await r())
            }, a.value;
            const u = new URL(s);
            l += 1, u.searchParams.set("retry", String(l));
            const p = await import(u.href);
            return a = {
                value: e(p)
            }, a.value;
        } catch (u) {
            throw s = V1r(u) ?? s, u;
        }
    };
}
var X1r;
export { K1r, V1r, X1r };
var __wakaru_O4i_initialized = false;
export function O4i() {
if (__wakaru_O4i_initialized) return;
__wakaru_O4i_initialized = true;
"use strict";
X1r = /dynamically imported module: (\S+)$/, i(V1r, "failedModuleUrl"), i(K1r, "retryingImport");

}
