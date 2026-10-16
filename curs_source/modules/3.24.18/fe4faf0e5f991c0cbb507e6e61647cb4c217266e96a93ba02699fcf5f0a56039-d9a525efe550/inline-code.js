import { i } from "./plugin-brand-icon.js";
function QMt(r, e, a) {
    let s = r.value || "", l = "`", u = -1;
    for(; new RegExp("(^|[^`])" + l + "([^`]|$)").test(s);)l += "`";
    for(/[^ \r\n]/.test(s) && (/^[ \r\n]/.test(s) && /[ \r\n]$/.test(s) || /^`|`$/.test(s)) && (s = " " + s + " "); ++u < a.unsafe.length;){
        const p = a.unsafe[u], m = a.compilePattern(p);
        let b;
        if (p.atBreak) for(; b = m.exec(s);){
            let g = b.index;
            s.charCodeAt(g) === 10 && s.charCodeAt(g - 1) === 13 && g--, s = s.slice(0, g) + " " + s.slice(b.index + 1);
        }
    }
    return l + s + l;
}
function mlr() {
    return "`";
}
export { QMt, mlr };
var __wakaru_o3i_initialized = false;
export function o3i() {
if (__wakaru_o3i_initialized) return;
__wakaru_o3i_initialized = true;
QMt.peek = mlr, i(QMt, "inlineCode"), i(mlr, "inlineCodePeek");

}
