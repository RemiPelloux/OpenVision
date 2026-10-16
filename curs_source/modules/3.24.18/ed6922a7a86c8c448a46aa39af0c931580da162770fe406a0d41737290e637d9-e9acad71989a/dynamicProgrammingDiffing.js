import { AFt, PO, Yge, xvn } from "./diffAlgorithm.js";
import { Mh, uR } from "./offsetRange.js";
import { x } from "./tslib.es6.js";
import { RFt, eyi } from "./utils_14.js";
var z8c;
export { z8c };
var __wakaru_Kyg_initialized = false;
export function Kyg() {
if (__wakaru_Kyg_initialized) return;
__wakaru_Kyg_initialized = true;
"use strict";
x(), uR(), AFt(), eyi(), z8c = class {
    compute(e, t, n = xvn.instance, i) {
        if (e.length === 0 || t.length === 0) return Yge.trivial(e, t);
        const r = new RFt(e.length, t.length), s = new RFt(e.length, t.length), o = new RFt(e.length, t.length);
        for(let g = 0; g < e.length; g++)for(let f = 0; f < t.length; f++){
            if (!n.isValid()) return Yge.trivialTimedOut(e, t);
            const v = g === 0 ? 0 : r.get(g - 1, f), b = f === 0 ? 0 : r.get(g, f - 1);
            let y;
            e.getElement(g) === t.getElement(f) ? (g === 0 || f === 0 ? y = 0 : y = r.get(g - 1, f - 1), g > 0 && f > 0 && s.get(g - 1, f - 1) === 3 && (y += o.get(g - 1, f - 1)), y += i ? i(g, f) : 1) : y = -1;
            const T = Math.max(v, b, y);
            if (T === y) {
                const E = g > 0 && f > 0 ? o.get(g - 1, f - 1) : 0;
                o.set(g, f, E + 1), s.set(g, f, 3);
            } else T === v ? (o.set(g, f, 0), s.set(g, f, 1)) : T === b && (o.set(g, f, 0), s.set(g, f, 2));
            r.set(g, f, T);
        }
        const a = [];
        let c = e.length, l = t.length;
        function u(g, f) {
            (g + 1 !== c || f + 1 !== l) && a.push(new PO(new Mh(g + 1, c), new Mh(f + 1, l))), c = g, l = f;
        }
        let h = e.length - 1, p = t.length - 1;
        for(; h >= 0 && p >= 0;)s.get(h, p) === 3 ? (u(h, p), h--, p--) : s.get(h, p) === 1 ? h-- : p--;
        return u(-1, -1), a.reverse(), new Yge(a, !1);
    }
};

}
