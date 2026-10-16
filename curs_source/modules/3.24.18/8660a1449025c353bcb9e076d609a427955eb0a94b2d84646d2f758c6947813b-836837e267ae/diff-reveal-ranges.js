import { RFe } from "./diff-lines.js";
import { GLr, PFe } from "./line-range-set.js";
import { M0 } from "./nca.js";
import { E } from "./tslib.es6.js";
var B1t;
export { B1t };
var __wakaru_Fha_initialized = false;
export function Fha() {
if (__wakaru_Fha_initialized) return;
__wakaru_Fha_initialized = true;
"use strict";
E(), RFe(), GLr(), B1t = class a$n {
    constructor(){}
    static autoRevealRanges(e) {
        const n = [];
        for (const i of e){
            if (M0(i.item)) continue;
            const r = i.item.originalLineNumber;
            r !== void 0 && n.push([
                r,
                r
            ]);
        }
        return new PFe(n);
    }
    static pruneToConnected(e, n) {
        return e.keepConnectedTo(n);
    }
    static toExpansionOffsets(e, n, i) {
        const r = new Map;
        if (n.isEmpty) return r;
        for (const s of e){
            if (!M0(s.item)) continue;
            const o = s.item, a = a$n._offsetForRegion(o, n, i);
            (a.fromTop > 0 || a.fromBottom > 0) && r.set(s.key, a);
        }
        return r;
    }
    static revealedRangeForExpand(e, n, i, r, s) {
        const o = a$n._offsetForRegion(e, i, n), a = e.linesStartIndex, l = e.linesEndIndex, c = Math.min(a + o.fromTop, l), u = Math.max(l - o.fromBottom, c);
        if (u <= c) return;
        let d, h;
        return r === "up" ? (d = c, h = Math.min(c + s, u)) : (h = u, d = Math.max(u - s, c)), a$n._originalRangeOfLineSpan(n, d, h);
    }
    static _offsetForRegion(e, n, i) {
        const r = e.linesStartIndex, s = e.linesEndIndex;
        if (r < 0 || s > i.length || r >= s) return {
            fromTop: 0,
            fromBottom: 0
        };
        let o = 0;
        for(; r + o < s && a$n._isRevealed(i[r + o], n);)o++;
        let a = 0;
        for(; s - 1 - a >= r + o && a$n._isRevealed(i[s - 1 - a], n);)a++;
        return {
            fromTop: o,
            fromBottom: a
        };
    }
    static _isRevealed(e, n) {
        return e.originalLineNumber !== void 0 && n.contains(e.originalLineNumber);
    }
    static _originalRangeOfLineSpan(e, n, i) {
        let r, s;
        for(let o = n; o < i; o++){
            const a = e[o]?.originalLineNumber;
            a !== void 0 && ((r === void 0 || a < r) && (r = a), (s === void 0 || a > s) && (s = a));
        }
        if (!(r === void 0 || s === void 0)) return [
            r,
            s
        ];
    }
};

}
