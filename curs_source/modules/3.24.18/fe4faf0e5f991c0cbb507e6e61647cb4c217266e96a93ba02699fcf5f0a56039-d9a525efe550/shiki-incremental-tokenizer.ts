import { $4r, $Ot, M4r, N4r, R4r } from "./Iwr.js";
import { i } from "./plugin-brand-icon.js";
import { WLt, lRe } from "./shiki-core.ts";
var P4r, IOt, j4r;
export { IOt, P4r, j4r };
var __wakaru_q5i_initialized = false;
export function q5i() {
if (__wakaru_q5i_initialized) return;
__wakaru_q5i_initialized = true;
"use strict";
WLt(), N4r(), i(M4r, "splitIntoLines"), i(R4r, "chunkEndIndex"), i($Ot, "stateKey"), P4r = 8, IOt = class {
    constructor(e){
        this.cache = new Map, this.maxCachedTexts = Math.max(1, e?.maxCachedTexts ?? P4r), this.tokenizeChunk = e?.tokenizeChunk ?? $4r;
    }
    tokenizeLines(e, a, s, l) {
        const u = new Map;
        if (s.length === 0) return u;
        const p = this.getState(e, a);
        let m = 0;
        for (const b of s)b > m && (m = b);
        this.advanceTo(e, p, m, l?.budgetChars);
        for (const b of s){
            const g = b - 1;
            if (g < 0) continue;
            const _ = p.tokensByLine[g];
            u.set(b, _ ?? [
                {
                    content: p.lines[g] ?? "",
                    col: 0
                }
            ]);
        }
        return u;
    }
    advanceTo(e, a, s, l) {
        const u = Math.min(s, a.lines.length);
        let p = l ?? Number.POSITIVE_INFINITY, m = !1;
        for(; a.nextLineIndex < u && p > 0;){
            const b = R4r(a, u, Math.min(p, lRe)), g = a.lines.slice(a.nextLineIndex, b).join(`
`);
            if (m && g.length > p) return;
            const _ = this.tokenizeChunk(g, e, a.grammarState);
            if (_ === void 0) return;
            p -= g.length, m = !0;
            const { tokens: v, grammarState: x } = _;
            for(let C = 0; C < v.length; C++)a.tokensByLine[a.nextLineIndex + C] = v[C];
            if (x !== void 0 && (a.grammarState = x), v.length === 0) break;
            a.nextLineIndex += v.length;
        }
    }
    tokenizedLineCount(e, a) {
        const s = this.latestState(e, a);
        return s !== void 0 ? s.nextLineIndex : this.cache.get($Ot(e, a))?.nextLineIndex ?? 0;
    }
    latestState(e, a) {
        const s = this.latest;
        return s !== void 0 && s.text === a && s.language === e ? s.state : void 0;
    }
    getState(e, a) {
        const s = this.latestState(e, a);
        if (s !== void 0) return s;
        const l = $Ot(e, a), u = this.cache.get(l);
        if (u) return this.cache.delete(l), this.cache.set(l, u), this.latest = {
            language: e,
            text: a,
            state: u
        }, u;
        const p = M4r(a), m = {
            lines: p,
            tokensByLine: new Array(p.length),
            grammarState: void 0,
            nextLineIndex: 0
        };
        for(this.cache.set(l, m), this.latest = {
            language: e,
            text: a,
            state: m
        }; this.cache.size > this.maxCachedTexts;){
            const b = this.cache.keys().next().value;
            if (b === void 0) break;
            this.cache.delete(b);
        }
        return m;
    }
}, i(IOt, "IncrementalShikiTokenizer"), j4r = IOt;

}
