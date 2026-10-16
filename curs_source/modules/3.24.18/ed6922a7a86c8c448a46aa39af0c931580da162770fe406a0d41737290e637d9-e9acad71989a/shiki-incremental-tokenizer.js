import { Kzg, Qxl, Xzg, Yzg, Zxl } from "./I0l.js";
import { Lxi, lys } from "./shiki-core.js";
import { x } from "./tslib.es6.js";
var Jxl, eIl, lCn, tIl, nIl;
export { Jxl, eIl, lCn, nIl, tIl };
var __wakaru_Zzg_initialized = false;
export function Zzg() {
if (__wakaru_Zzg_initialized) return;
__wakaru_Zzg_initialized = true;
"use strict";
x(), lys(), Zxl(), Jxl = Object.defineProperty, eIl = (e, t, n)=>t in e ? Jxl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, lCn = (e, t, n)=>eIl(e, typeof t != "symbol" ? t + "" : t, n), tIl = 8, nIl = class {
    constructor(e){
        lCn(this, "cache", new Map), lCn(this, "maxCachedTexts"), lCn(this, "tokenizeChunk"), lCn(this, "latest"), this.maxCachedTexts = Math.max(1, e?.maxCachedTexts ?? tIl), this.tokenizeChunk = e?.tokenizeChunk ?? Kzg;
    }
    tokenizeLines(e, t, n, i) {
        const r = new Map;
        if (n.length === 0) return r;
        const s = this.getState(e, t);
        let o = 0;
        for (const a of n)a > o && (o = a);
        this.advanceTo(e, s, o, i?.budgetChars);
        for (const a of n){
            const c = a - 1;
            if (c < 0) continue;
            const l = s.tokensByLine[c];
            r.set(a, l ?? [
                {
                    content: s.lines[c] ?? "",
                    col: 0
                }
            ]);
        }
        return r;
    }
    advanceTo(e, t, n, i) {
        const r = Math.min(n, t.lines.length);
        let s = i ?? Number.POSITIVE_INFINITY, o = !1;
        for(; t.nextLineIndex < r && s > 0;){
            const a = Xzg(t, r, Math.min(s, Lxi)), c = t.lines.slice(t.nextLineIndex, a).join(`
`);
            if (o && c.length > s) return;
            const l = this.tokenizeChunk(c, e, t.grammarState);
            if (l === void 0) return;
            s -= c.length, o = !0;
            const { tokens: u, grammarState: h } = l;
            for(let p = 0; p < u.length; p++)t.tokensByLine[t.nextLineIndex + p] = u[p];
            if (h !== void 0 && (t.grammarState = h), u.length === 0) break;
            t.nextLineIndex += u.length;
        }
    }
    tokenizedLineCount(e, t) {
        const n = this.latestState(e, t);
        return n !== void 0 ? n.nextLineIndex : this.cache.get(Qxl(e, t))?.nextLineIndex ?? 0;
    }
    latestState(e, t) {
        const n = this.latest;
        return n !== void 0 && n.text === t && n.language === e ? n.state : void 0;
    }
    getState(e, t) {
        const n = this.latestState(e, t);
        if (n !== void 0) return n;
        const i = Qxl(e, t), r = this.cache.get(i);
        if (r) return this.cache.delete(i), this.cache.set(i, r), this.latest = {
            language: e,
            text: t,
            state: r
        }, r;
        const s = Yzg(t), o = {
            lines: s,
            tokensByLine: new Array(s.length),
            grammarState: void 0,
            nextLineIndex: 0
        };
        for(this.cache.set(i, o), this.latest = {
            language: e,
            text: t,
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
