import { aB, iRe, noi, rvn } from "./diffAlgorithm.js";
import { Im, W3 } from "./offsetRange.js";
import { E } from "./tslib.es6.js";
import { svn, xTr } from "./utils_14.js";
var yqd;
export { yqd };
var __wakaru_$Ny_initialized = false;
export function $Ny() {
if (__wakaru_$Ny_initialized) return;
__wakaru_$Ny_initialized = true;
"use strict";
E(), W3(), rvn(), xTr(), yqd = class {
    compute(t, e, n = noi.instance, i) {
        if (t.length === 0 || e.length === 0) return iRe.trivial(t, e);
        const r = new svn(2 * t.length + 1, e.length + 1), s = new svn(2 * t.length + 1, e.length + 1);
        for(let h = 0; h <= e.length; h++)r.set(0, h, h), h > 0 ? s.set(0, h, !0) : s.set(0, h, !1);
        for(let h = 0; h <= 2 * t.length; h++)r.set(h, 0, Math.floor((h + 1) / 2)), s.set(h, 0, !1);
        for(let h = 1; h <= e.length; h++)for(let p = 1; p <= 2 * t.length; p++){
            if (!n.isValid()) return iRe.trivialTimedOut(t, e);
            if (p % 2 === 0) {
                const g = r.get(p, h - 1) + 1, f = r.get(p - 1, h);
                g < f ? (r.set(p, h, g), s.set(p, h, !0)) : (r.set(p, h, f), s.set(p, h, !1));
            } else {
                const g = r.get(p - 1, h) + .4, f = t.getElement(Math.floor(p / 2)) === e.getElement(h - 1) ? r.get(p - 1, h - 1) : Number.MAX_VALUE;
                f < g ? (r.set(p, h, f), s.set(p, h, !0)) : (r.set(p, h, g), s.set(p, h, !1));
            }
        }
        let o = Number.MAX_VALUE, a = -1;
        for(let h = 0; h <= 2 * t.length; h++){
            const p = r.get(h, e.length);
            p < o && (o = p, a = h);
        }
        let l = [], c = a, u = e.length;
        c <= 2 * t.length - 2 && l.push(new aB(new Im(Math.floor((c + 1) / 2), t.length), new Im(u, u)));
        let d;
        for(; c >= 0 && u >= 0;)s.get(c, u) ? c % 2 === 0 ? (d === void 0 && (d = {
            x: Math.floor(c / 2),
            y: u
        }), u -= 1) : (d !== void 0 && ((d.x !== Math.floor(c / 2) + 1 || d.y !== u) && l.push(new aB(new Im(Math.floor(c / 2) + 1, d.x), new Im(u, d.y))), d = void 0), c -= 1, u -= 1) : (c % 2, d === void 0 && (d = {
            x: Math.floor((c + 1) / 2),
            y: u
        }), c -= 1);
        return d !== void 0 && ((d.x !== Math.floor(c / 2) + 1 || d.y !== u) && l.push(new aB(new Im(Math.floor(c / 2) + 1, d.x), new Im(u, d.y))), d = void 0), l.reverse(), new iRe(l, !1);
    }
};

}
