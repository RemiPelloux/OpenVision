import { Gki } from "./color.js";
import { JY } from "./index_2.js";
import { cNe } from "./index_3.js";
import { i } from "./plugin-brand-icon.js";
function QY(r, e, a, s) {
    let l;
    typeof e == "function" && typeof a != "function" ? (s = a, a = e) : l = e;
    const u = JY(l), p = s ? -1 : 1;
    m(r, void 0, [])();
    function m(b, g, _) {
        const v = b && typeof b == "object" ? b : {};
        if (typeof v.type == "string") {
            const C = typeof v.tagName == "string" ? v.tagName : typeof v.name == "string" ? v.name : void 0;
            Object.defineProperty(x, "name", {
                value: "node (" + (b.type + (C ? "<" + C + ">" : "")) + ")"
            });
        }
        return x;
        function x() {
            let C = UIt, E, A, $;
            if ((!e || u(b, g, _[_.length - 1] || void 0)) && (C = rir(a(b, _)), C[0] === lNe)) return C;
            if ("children" in b && b.children) {
                const I = b;
                if (I.children && C[0] !== KT) for(A = (s ? I.children.length : -1) + p, $ = _.concat(I); A > -1 && A < I.children.length;){
                    const N = I.children[A];
                    if (E = m(N, A, $)(), E[0] === lNe) return E;
                    A = typeof E[1] == "number" ? E[1] : A + p;
                }
            }
            return C;
        }
    }
    i(m, "factory");
}
function rir(r) {
    return Array.isArray(r) ? r : typeof r == "number" ? [
        eJ,
        r
    ] : r == null ? UIt : [
        r
    ];
}
var UIt, eJ, lNe, KT;
export { KT, QY, UIt, eJ, lNe, rir };
var __wakaru_Wki_initialized = false;
export function Wki() {
if (__wakaru_Wki_initialized) return;
__wakaru_Wki_initialized = true;
cNe(), Gki(), UIt = [], eJ = !0, lNe = !1, KT = "skip", i(QY, "visitParents"), i(rir, "toResult");

}
