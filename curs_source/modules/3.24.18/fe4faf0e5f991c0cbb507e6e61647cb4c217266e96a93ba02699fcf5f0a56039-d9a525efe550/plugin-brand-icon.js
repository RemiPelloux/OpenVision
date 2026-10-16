var TY = Object.defineProperty, i = (r, e)=>TY(r, "name", {
        value: e,
        configurable: !0
    });
function VAt(r) {
    const e = r?.trim();
    return e || void 0;
}
function kYn(r) {
    const e = [], a = new Set, s = i((l)=>{
        l !== void 0 && !a.has(l) && (a.add(l), e.push(l));
    }, "add");
    for (const l of r)s(VAt(l.publisher?.logoUrl));
    for (const l of r)s(VAt(l.logoUrl));
    return e;
}
function vYn(r) {
    return kYn(r)[0];
}
export { TY, VAt, i, kYn, vYn };
var __wakaru_G_i_initialized = false;
export function G_i() {
if (__wakaru_G_i_initialized) return;
__wakaru_G_i_initialized = true;
"use strict";
i(VAt, "nonBlankIconSource"), i(kYn, "resolvePluginBrandIconSources"), i(vYn, "resolvePluginBrandIconSource");

}
