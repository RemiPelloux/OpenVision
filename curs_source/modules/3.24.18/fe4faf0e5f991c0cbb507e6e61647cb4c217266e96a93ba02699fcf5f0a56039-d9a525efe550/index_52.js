import { i } from "./plugin-brand-icon.js";
function Wcr(r, e = {}) {
    const a = (e.align || []).concat(), s = e.stringLength || Zcr, l = [], u = [], p = [], m = [];
    let b = 0, g = -1;
    for(; ++g < r.length;){
        const E = [], A = [];
        let $ = -1;
        for(r[g].length > b && (b = r[g].length); ++$ < r[g].length;){
            const I = Hcr(r[g][$]);
            if (e.alignDelimiters !== !1) {
                const N = s(I);
                A[$] = N, (m[$] === void 0 || N > m[$]) && (m[$] = N);
            }
            E.push(I);
        }
        u[g] = E, p[g] = A;
    }
    let _ = -1;
    if (typeof a == "object" && "length" in a) for(; ++_ < b;)l[_] = OMt(a[_]);
    else {
        const E = OMt(a);
        for(; ++_ < b;)l[_] = E;
    }
    _ = -1;
    const v = [], x = [];
    for(; ++_ < b;){
        const E = l[_];
        let A = "", $ = "";
        E === 99 ? (A = ":", $ = ":") : E === 108 ? A = ":" : E === 114 && ($ = ":");
        let I = e.alignDelimiters === !1 ? 1 : Math.max(1, m[_] - A.length - $.length);
        const N = A + "-".repeat(I) + $;
        e.alignDelimiters !== !1 && (I = A.length + I + $.length, I > m[_] && (m[_] = I), x[_] = I), v[_] = N;
    }
    u.splice(1, 0, v), p.splice(1, 0, x), g = -1;
    const C = [];
    for(; ++g < u.length;){
        const E = u[g], A = p[g];
        _ = -1;
        const $ = [];
        for(; ++_ < b;){
            const I = E[_] || "";
            let N = "", R = "";
            if (e.alignDelimiters !== !1) {
                const P = m[_] - (A[_] || 0), L = l[_];
                L === 114 ? N = " ".repeat(P) : L === 99 ? P % 2 ? (N = " ".repeat(P / 2 + .5), R = " ".repeat(P / 2 - .5)) : (N = " ".repeat(P / 2), R = N) : R = " ".repeat(P);
            }
            e.delimiterStart !== !1 && !_ && $.push("|"), e.padding !== !1 && !(e.alignDelimiters === !1 && I === "") && (e.delimiterStart !== !1 || _) && $.push(" "), e.alignDelimiters !== !1 && $.push(N), $.push(I), e.alignDelimiters !== !1 && $.push(R), e.padding !== !1 && $.push(" "), (e.delimiterEnd !== !1 || _ !== b - 1) && $.push("|");
        }
        C.push(e.delimiterEnd === !1 ? $.join("").replace(/ +$/, "") : $.join(""));
    }
    return C.join(`
`);
}
function Hcr(r) {
    return r == null ? "" : String(r);
}
function Zcr(r) {
    return r.length;
}
function OMt(r) {
    const e = typeof r == "string" ? r.codePointAt(0) : 0;
    return e === 67 || e === 99 ? 99 : e === 76 || e === 108 ? 108 : e === 82 || e === 114 ? 114 : 0;
}
export { Hcr, OMt, Wcr, Zcr };
var __wakaru_Gvi_initialized = false;
export function Gvi() {
if (__wakaru_Gvi_initialized) return;
__wakaru_Gvi_initialized = true;
i(Wcr, "markdownTable"), i(Hcr, "serialize"), i(Zcr, "defaultStringLength"), i(OMt, "toAlignment");

}
