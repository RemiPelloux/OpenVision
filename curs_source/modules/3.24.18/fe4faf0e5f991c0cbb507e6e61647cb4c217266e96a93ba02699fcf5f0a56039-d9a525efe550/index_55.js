import { i } from "./plugin-brand-icon.js";
function ZNe(r, e) {
    const a = e || slr, s = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, l = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
    return ZMt(r, s, l);
}
function ZMt(r, e, a) {
    if (olr(r)) {
        if ("value" in r) return r.type === "html" && !a ? "" : r.value;
        if (e && "alt" in r && r.alt) return r.alt;
        if ("children" in r) return VMt(r.children, e, a);
    }
    return Array.isArray(r) ? VMt(r, e, a) : "";
}
function VMt(r, e, a) {
    const s = [];
    let l = -1;
    for(; ++l < r.length;)s[l] = ZMt(r[l], e, a);
    return s.join("");
}
function olr(r) {
    return !!(r && typeof r == "object");
}
var slr;
export { VMt, ZMt, ZNe, olr, slr };
var __wakaru_e3i_initialized = false;
export function e3i() {
if (__wakaru_e3i_initialized) return;
__wakaru_e3i_initialized = true;
slr = {}, i(ZNe, "toString"), i(ZMt, "one"), i(VMt, "all"), i(olr, "node");

}
