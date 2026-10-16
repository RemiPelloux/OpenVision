import { i } from "./plugin-brand-icon.js";
function $Pt(r, e) {
    const a = e.referenceType;
    let s = "]";
    if (a === "collapsed" ? s += "[]" : a === "full" && (s += "[" + (e.label || e.identifier) + "]"), e.type === "imageReference") return [
        {
            type: "text",
            value: "![" + e.alt + s
        }
    ];
    const l = r.all(e), u = l[0];
    u && u.type === "text" ? u.value = "[" + u.value : l.unshift({
        type: "text",
        value: "["
    });
    const p = l[l.length - 1];
    return p && p.type === "text" ? p.value += s : l.push({
        type: "text",
        value: s
    }), l;
}
export { $Pt };
var __wakaru_shr_initialized = false;
export function shr() {
if (__wakaru_shr_initialized) return;
__wakaru_shr_initialized = true;
"";
i($Pt, "revert");

}
