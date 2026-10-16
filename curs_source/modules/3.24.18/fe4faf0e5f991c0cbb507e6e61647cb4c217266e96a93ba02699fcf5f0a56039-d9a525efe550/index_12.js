import { i } from "./plugin-brand-icon.js";
function $ir(r, e) {
    const a = r || "", s = {};
    let l = 0, u, p;
    for(; l < a.length;){
        mNt.lastIndex = l;
        const m = mNt.exec(a), b = a.slice(l, m ? m.index : a.length);
        b && (u ? u === "#" ? s.id = b : Array.isArray(s.className) ? s.className.push(b) : s.className = [
            b
        ] : p = b, l += b.length), m && (u = m[0], l++);
    }
    return {
        type: "element",
        tagName: p || e || "div",
        properties: s,
        children: []
    };
}
var mNt;
export { $ir, mNt };
var __wakaru_ovi_initialized = false;
export function ovi() {
if (__wakaru_ovi_initialized) return;
__wakaru_ovi_initialized = true;
mNt = /[#.]/g, i($ir, "parseSelector");

}
