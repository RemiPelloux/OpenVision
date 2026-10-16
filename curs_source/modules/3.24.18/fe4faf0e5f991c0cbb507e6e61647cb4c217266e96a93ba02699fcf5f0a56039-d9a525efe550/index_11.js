import { i } from "./plugin-brand-icon.js";
function pNt(r) {
    const e = [], a = String(r || "");
    let s = a.indexOf(","), l = 0, u = !1;
    for(; !u;){
        s === -1 && (s = a.length, u = !0);
        const p = a.slice(l, s).trim();
        (p || !u) && e.push(p), l = s + 1, s = a.indexOf(",", l);
    }
    return e;
}
function kNe(r, e) {
    const a = e || {};
    return (r[r.length - 1] === "" ? [
        ...r,
        ""
    ] : r).join((a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")).trim();
}
export { kNe, pNt };
var __wakaru_vNe_initialized = false;
export function vNe() {
if (__wakaru_vNe_initialized) return;
__wakaru_vNe_initialized = true;
i(pNt, "parse"), i(kNe, "stringify");

}
