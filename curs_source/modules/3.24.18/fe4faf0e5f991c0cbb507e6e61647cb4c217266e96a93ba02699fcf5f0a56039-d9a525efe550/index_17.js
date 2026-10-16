import { i } from "./plugin-brand-icon.js";
function Lir(r) {
    const e = String(r), a = [];
    return {
        toOffset: l,
        toPoint: s
    };
    function s(u) {
        if (typeof u == "number" && u > -1 && u <= e.length) {
            let p = 0;
            for(;;){
                let m = a[p];
                if (m === void 0) {
                    const b = wNt(e, a[p - 1]);
                    m = b === -1 ? e.length + 1 : b + 1, a[p] = m;
                }
                if (m > u) return {
                    line: p + 1,
                    column: u - (p > 0 ? a[p - 1] : 0) + 1,
                    offset: u
                };
                p++;
            }
        }
    }
    function l(u) {
        if (u && typeof u.line == "number" && typeof u.column == "number" && !Number.isNaN(u.line) && !Number.isNaN(u.column)) {
            for(; a.length < u.line;){
                const m = a[a.length - 1], b = wNt(e, m), g = b === -1 ? e.length + 1 : b + 1;
                if (m === g) break;
                a.push(g);
            }
            const p = (u.line > 1 ? a[u.line - 2] : 0) + u.column - 1;
            if (p < a[u.line - 1]) return p;
        }
    }
}
function wNt(r, e) {
    const a = r.indexOf("\r", e), s = r.indexOf(`
`, e);
    return s === -1 ? a : a === -1 || a + 1 === s ? s : a < s ? a : s;
}
export { Lir, wNt };
var __wakaru_dvi_initialized = false;
export function dvi() {
if (__wakaru_dvi_initialized) return;
__wakaru_dvi_initialized = true;
i(Lir, "location"), i(wNt, "next");

}
