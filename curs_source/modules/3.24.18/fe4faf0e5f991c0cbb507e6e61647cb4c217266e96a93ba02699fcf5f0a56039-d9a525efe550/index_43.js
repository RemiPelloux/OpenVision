import { JY } from "./index_2.js";
import { cNe } from "./index_3.js";
import { QY } from "./index_4.js";
import { jvi, ucr } from "./index_42.js";
import { mfe } from "./index_5.js";
import { i } from "./plugin-brand-icon.js";
function dcr(r, e, a) {
    const l = JY((a || {}).ignore || []), u = pcr(e);
    let p = -1;
    for(; ++p < u.length;)QY(r, "text", m);
    function m(g, _) {
        let v = -1, x;
        for(; ++v < _.length;){
            const C = _[v], E = x ? x.children : void 0;
            if (l(C, E ? E.indexOf(C) : void 0, x)) return;
            x = C;
        }
        if (x) return b(g, _);
    }
    i(m, "visitor");
    function b(g, _) {
        const v = _[_.length - 1], x = u[p][0], C = u[p][1];
        let E = 0;
        const $ = v.children.indexOf(g);
        let I = !1, N = [];
        x.lastIndex = 0;
        let R = x.exec(g.value);
        for(; R;){
            const P = R.index, L = {
                index: R.index,
                input: R.input,
                stack: [
                    ..._,
                    g
                ]
            };
            let j = C(...R, L);
            if (typeof j == "string" && (j = j.length > 0 ? {
                type: "text",
                value: j
            } : void 0), j === !1 ? x.lastIndex = P + 1 : (E !== P && N.push({
                type: "text",
                value: g.value.slice(E, P)
            }), Array.isArray(j) ? N.push(...j) : j && N.push(j), E = P + R[0].length, I = !0), !x.global) break;
            R = x.exec(g.value);
        }
        return I ? (E < g.value.length && N.push({
            type: "text",
            value: g.value.slice(E)
        }), v.children.splice($, 1, ...N)) : N = [
            g
        ], $ + N.length;
    }
    i(b, "handler");
}
function pcr(r) {
    const e = [];
    if (!Array.isArray(r)) throw new TypeError("Expected find and replace tuple or list of tuples");
    const a = !r[0] || Array.isArray(r[0]) ? r : [
        r
    ];
    let s = -1;
    for(; ++s < a.length;){
        const l = a[s];
        e.push([
            mcr(l[0]),
            fcr(l[1])
        ]);
    }
    return e;
}
function mcr(r) {
    return typeof r == "string" ? new RegExp(ucr(r), "g") : r;
}
function fcr(r) {
    return typeof r == "function" ? r : function() {
        return r;
    };
}
export { dcr, fcr, mcr, pcr };
var __wakaru_Lvi_initialized = false;
export function Lvi() {
if (__wakaru_Lvi_initialized) return;
__wakaru_Lvi_initialized = true;
jvi(), mfe(), cNe(), i(dcr, "findAndReplace"), i(pcr, "toPairs"), i(mcr, "toExpression"), i(fcr, "toFunction");

}
