import { Vje } from "./diff-lines.ts";
import { sd } from "./f6r.js";
import { A$, PAr } from "./line-range-set.ts";
import { i } from "./plugin-brand-icon.js";
var aGt, TQ;
export { TQ, aGt };
var __wakaru_SCi_initialized = false;
export function SCi() {
if (__wakaru_SCi_initialized) return;
__wakaru_SCi_initialized = true;
"use strict";
Vje(), PAr(), aGt = class Jee {
    constructor(){}
    static autoRevealRanges(e) {
        const a = [];
        for (const s of e){
            if (sd(s.item)) continue;
            const l = s.item.originalLineNumber;
            l !== void 0 && a.push([
                l,
                l
            ]);
        }
        return new A$(a);
    }
    static pruneToConnected(e, a) {
        return e.keepConnectedTo(a);
    }
    static toExpansionOffsets(e, a, s) {
        const l = new Map;
        if (a.isEmpty) return l;
        for (const u of e){
            if (!sd(u.item)) continue;
            const p = u.item, m = Jee._offsetForRegion(p, a, s);
            (m.fromTop > 0 || m.fromBottom > 0) && l.set(u.key, m);
        }
        return l;
    }
    static revealedRangeForExpand(e, a, s, l, u) {
        const p = Jee._offsetForRegion(e, s, a), m = e.linesStartIndex, b = e.linesEndIndex, g = Math.min(m + p.fromTop, b), _ = Math.max(b - p.fromBottom, g);
        if (_ <= g) return;
        let v, x;
        return l === "up" ? (v = g, x = Math.min(g + u, _)) : (x = _, v = Math.max(_ - u, g)), Jee._originalRangeOfLineSpan(a, v, x);
    }
    static _offsetForRegion(e, a, s) {
        const l = e.linesStartIndex, u = e.linesEndIndex;
        if (l < 0 || u > s.length || l >= u) return {
            fromTop: 0,
            fromBottom: 0
        };
        let p = 0;
        for(; l + p < u && Jee._isRevealed(s[l + p], a);)p++;
        let m = 0;
        for(; u - 1 - m >= l + p && Jee._isRevealed(s[u - 1 - m], a);)m++;
        return {
            fromTop: p,
            fromBottom: m
        };
    }
    static _isRevealed(e, a) {
        return e.originalLineNumber !== void 0 && a.contains(e.originalLineNumber);
    }
    static _originalRangeOfLineSpan(e, a, s) {
        let l, u;
        for(let p = a; p < s; p++){
            const m = e[p]?.originalLineNumber;
            m !== void 0 && ((l === void 0 || m < l) && (l = m), (u === void 0 || m > u) && (u = m));
        }
        if (!(l === void 0 || u === void 0)) return [
            l,
            u
        ];
    }
}, i(aGt, "DiffRevealRanges"), TQ = aGt;

}
