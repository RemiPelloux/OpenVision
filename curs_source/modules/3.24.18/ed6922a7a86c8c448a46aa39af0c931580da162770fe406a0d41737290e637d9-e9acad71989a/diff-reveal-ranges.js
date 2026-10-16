import { OE } from "./DSs.js";
import { F9e } from "./diff-lines.js";
import { B9e, f2l } from "./line-range-set.js";
import { x } from "./tslib.es6.js";
var K9t;
export { K9t };
var __wakaru_prf_initialized = false;
export function prf() {
if (__wakaru_prf_initialized) return;
__wakaru_prf_initialized = true;
"use strict";
x(), F9e(), f2l(), K9t = class Fin {
    constructor(){}
    static autoRevealRanges(t) {
        const n = [];
        for (const i of t){
            if (OE(i.item)) continue;
            const r = i.item.originalLineNumber;
            r !== void 0 && n.push([
                r,
                r
            ]);
        }
        return new B9e(n);
    }
    static pruneToConnected(t, n) {
        return t.keepConnectedTo(n);
    }
    static toExpansionOffsets(t, n, i) {
        const r = new Map;
        if (n.isEmpty) return r;
        for (const s of t){
            if (!OE(s.item)) continue;
            const o = s.item, a = Fin._offsetForRegion(o, n, i);
            (a.fromTop > 0 || a.fromBottom > 0) && r.set(s.key, a);
        }
        return r;
    }
    static revealedRangeForExpand(t, n, i, r, s) {
        const o = Fin._offsetForRegion(t, i, n), a = t.linesStartIndex, c = t.linesEndIndex, l = Math.min(a + o.fromTop, c), u = Math.max(c - o.fromBottom, l);
        if (u <= l) return;
        let h, p;
        return r === "up" ? (h = l, p = Math.min(l + s, u)) : (p = u, h = Math.max(u - s, l)), Fin._originalRangeOfLineSpan(n, h, p);
    }
    static _offsetForRegion(t, n, i) {
        const r = t.linesStartIndex, s = t.linesEndIndex;
        if (r < 0 || s > i.length || r >= s) return {
            fromTop: 0,
            fromBottom: 0
        };
        let o = 0;
        for(; r + o < s && Fin._isRevealed(i[r + o], n);)o++;
        let a = 0;
        for(; s - 1 - a >= r + o && Fin._isRevealed(i[s - 1 - a], n);)a++;
        return {
            fromTop: o,
            fromBottom: a
        };
    }
    static _isRevealed(t, n) {
        return t.originalLineNumber !== void 0 && n.contains(t.originalLineNumber);
    }
    static _originalRangeOfLineSpan(t, n, i) {
        let r, s;
        for(let o = n; o < i; o++){
            const a = t[o]?.originalLineNumber;
            a !== void 0 && ((r === void 0 || a < r) && (r = a), (s === void 0 || a > s) && (s = a));
        }
        if (!(r === void 0 || s === void 0)) return [
            r,
            s
        ];
    }
};

}
