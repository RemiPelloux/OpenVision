import { AFt, PO, Yge, xvn } from "./diffAlgorithm.js";
import { Mh, uR } from "./offsetRange.js";
import { x } from "./tslib.es6.js";
import { RFt, eyi } from "./utils_14.js";
var q8c;
export { q8c };
var __wakaru_zyg_initialized = false;
export function zyg() {
if (__wakaru_zyg_initialized) return;
__wakaru_zyg_initialized = true;
"use strict";
x(), uR(), AFt(), eyi(), q8c = class {
    compute(e, t, n = xvn.instance, i) {
        if (e.length === 0 || t.length === 0) return Yge.trivial(e, t);
        const r = new RFt(2 * e.length + 1, t.length + 1), s = new RFt(2 * e.length + 1, t.length + 1);
        for(let p = 0; p <= t.length; p++)r.set(0, p, p), p > 0 ? s.set(0, p, !0) : s.set(0, p, !1);
        for(let p = 0; p <= 2 * e.length; p++)r.set(p, 0, Math.floor((p + 1) / 2)), s.set(p, 0, !1);
        for(let p = 1; p <= t.length; p++)for(let g = 1; g <= 2 * e.length; g++){
            if (!n.isValid()) return Yge.trivialTimedOut(e, t);
            if (g % 2 === 0) {
                const f = r.get(g, p - 1) + 1, v = r.get(g - 1, p);
                f < v ? (r.set(g, p, f), s.set(g, p, !0)) : (r.set(g, p, v), s.set(g, p, !1));
            } else {
                const f = r.get(g - 1, p) + .4, v = e.getElement(Math.floor(g / 2)) === t.getElement(p - 1) ? r.get(g - 1, p - 1) : Number.MAX_VALUE;
                v < f ? (r.set(g, p, v), s.set(g, p, !0)) : (r.set(g, p, f), s.set(g, p, !1));
            }
        }
        let o = Number.MAX_VALUE, a = -1;
        for(let p = 0; p <= 2 * e.length; p++){
            const g = r.get(p, t.length);
            g < o && (o = g, a = p);
        }
        let c = [], l = a, u = t.length;
        l <= 2 * e.length - 2 && c.push(new PO(new Mh(Math.floor((l + 1) / 2), e.length), new Mh(u, u)));
        let h;
        for(; l >= 0 && u >= 0;)s.get(l, u) ? l % 2 === 0 ? (h === void 0 && (h = {
            x: Math.floor(l / 2),
            y: u
        }), u -= 1) : (h !== void 0 && ((h.x !== Math.floor(l / 2) + 1 || h.y !== u) && c.push(new PO(new Mh(Math.floor(l / 2) + 1, h.x), new Mh(u, h.y))), h = void 0), l -= 1, u -= 1) : (l % 2, h === void 0 && (h = {
            x: Math.floor((l + 1) / 2),
            y: u
        }), l -= 1);
        return h !== void 0 && ((h.x !== Math.floor(l / 2) + 1 || h.y !== u) && c.push(new PO(new Mh(Math.floor(l / 2) + 1, h.x), new Mh(u, h.y))), h = void 0), c.reverse(), new Yge(c, !1);
    }
};

}
