import { aB, iRe, noi, rvn } from "./diffAlgorithm.js";
import { Im, W3 } from "./offsetRange.js";
import { E } from "./tslib.es6.js";
import { svn, xTr } from "./utils_14.js";
var Sqd;
export { Sqd };
var __wakaru_HNy_initialized = false;
export function HNy() {
if (__wakaru_HNy_initialized) return;
__wakaru_HNy_initialized = true;
"use strict";
E(), W3(), rvn(), xTr(), Sqd = class {
    compute(t, e, n = noi.instance, i) {
        if (t.length === 0 || e.length === 0) return iRe.trivial(t, e);
        const r = new svn(t.length, e.length), s = new svn(t.length, e.length), o = new svn(t.length, e.length);
        for(let p = 0; p < t.length; p++)for(let g = 0; g < e.length; g++){
            if (!n.isValid()) return iRe.trivialTimedOut(t, e);
            const f = p === 0 ? 0 : r.get(p - 1, g), _ = g === 0 ? 0 : r.get(p, g - 1);
            let b;
            t.getElement(p) === e.getElement(g) ? (p === 0 || g === 0 ? b = 0 : b = r.get(p - 1, g - 1), p > 0 && g > 0 && s.get(p - 1, g - 1) === 3 && (b += o.get(p - 1, g - 1)), b += i ? i(p, g) : 1) : b = -1;
            const y = Math.max(f, _, b);
            if (y === b) {
                const S = p > 0 && g > 0 ? o.get(p - 1, g - 1) : 0;
                o.set(p, g, S + 1), s.set(p, g, 3);
            } else y === f ? (o.set(p, g, 0), s.set(p, g, 1)) : y === _ && (o.set(p, g, 0), s.set(p, g, 2));
            r.set(p, g, y);
        }
        const a = [];
        let l = t.length, c = e.length;
        function u(p, g) {
            (p + 1 !== l || g + 1 !== c) && a.push(new aB(new Im(p + 1, l), new Im(g + 1, c))), l = p, c = g;
        }
        let d = t.length - 1, h = e.length - 1;
        for(; d >= 0 && h >= 0;)s.get(d, h) === 3 ? (u(d, h), d--, h--) : s.get(d, h) === 1 ? d-- : h--;
        return u(-1, -1), a.reverse(), new iRe(a, !1);
    }
};

}
