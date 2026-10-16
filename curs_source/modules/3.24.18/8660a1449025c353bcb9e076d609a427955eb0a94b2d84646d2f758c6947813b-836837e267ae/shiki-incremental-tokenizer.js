import { ClS, Q3r, klS, vRh, wlS } from "./KTh.js";
import { Daa, YDr } from "./shiki-core.js";
import { E } from "./tslib.es6.js";
var _Rh, bRh, Sdi, yRh, J3r;
export { J3r, Sdi, _Rh, bRh, yRh };
var __wakaru_Wla_initialized = false;
export function Wla() {
if (__wakaru_Wla_initialized) return;
__wakaru_Wla_initialized = true;
"use strict";
E(), Daa(), Q3r(), _Rh = Object.defineProperty, bRh = (t, e, n)=>e in t ? _Rh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Sdi = (t, e, n)=>bRh(t, typeof e != "symbol" ? e + "" : e, n), yRh = 8, J3r = class {
    constructor(t){
        Sdi(this, "cache", new Map), Sdi(this, "maxCachedTexts"), Sdi(this, "tokenizeChunk"), Sdi(this, "latest"), this.maxCachedTexts = Math.max(1, t?.maxCachedTexts ?? yRh), this.tokenizeChunk = t?.tokenizeChunk ?? klS;
    }
    tokenizeLines(t, e, n, i) {
        const r = new Map;
        if (n.length === 0) return r;
        const s = this.getState(t, e);
        let o = 0;
        for (const a of n)a > o && (o = a);
        this.advanceTo(t, s, o, i?.budgetChars);
        for (const a of n){
            const l = a - 1;
            if (l < 0) continue;
            const c = s.tokensByLine[l];
            r.set(a, c ?? [
                {
                    content: s.lines[l] ?? "",
                    col: 0
                }
            ]);
        }
        return r;
    }
    advanceTo(t, e, n, i) {
        const r = Math.min(n, e.lines.length);
        let s = i ?? Number.POSITIVE_INFINITY, o = !1;
        for(; e.nextLineIndex < r && s > 0;){
            const a = ClS(e, r, Math.min(s, YDr)), l = e.lines.slice(e.nextLineIndex, a).join(`
`);
            if (o && l.length > s) return;
            const c = this.tokenizeChunk(l, t, e.grammarState);
            if (c === void 0) return;
            s -= l.length, o = !0;
            const { tokens: u, grammarState: d } = c;
            for(let h = 0; h < u.length; h++)e.tokensByLine[e.nextLineIndex + h] = u[h];
            if (d !== void 0 && (e.grammarState = d), u.length === 0) break;
            e.nextLineIndex += u.length;
        }
    }
    tokenizedLineCount(t, e) {
        const n = this.latestState(t, e);
        return n !== void 0 ? n.nextLineIndex : this.cache.get(vRh(t, e))?.nextLineIndex ?? 0;
    }
    latestState(t, e) {
        const n = this.latest;
        return n !== void 0 && n.text === e && n.language === t ? n.state : void 0;
    }
    getState(t, e) {
        const n = this.latestState(t, e);
        if (n !== void 0) return n;
        const i = vRh(t, e), r = this.cache.get(i);
        if (r) return this.cache.delete(i), this.cache.set(i, r), this.latest = {
            language: t,
            text: e,
            state: r
        }, r;
        const s = wlS(e), o = {
            lines: s,
            tokensByLine: new Array(s.length),
            grammarState: void 0,
            nextLineIndex: 0
        };
        for(this.cache.set(i, o), this.latest = {
            language: t,
            text: e,
            state: o
        }; this.cache.size > this.maxCachedTexts;){
            const a = this.cache.keys().next().value;
            if (a === void 0) break;
            this.cache.delete(a);
        }
        return o;
    }
};

}
