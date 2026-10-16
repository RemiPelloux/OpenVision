import { LVt, Skg, kkg, mcs, pcs, ykg } from "./Ycg.js";
import { Ebe, c_ } from "./async.cursor.js";
import { Mt } from "./index_197.js";
import { BI, Iy } from "./languages.js";
import { SY } from "./lineTokens.js";
import { iR, y4 } from "./modesRegistry.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var _Rn, wkg, Txi, bRn, Ckg, Tkg, Ekg, yRn, Ikg, xkg, opl, Akg, Rkg, Pkg, Mkg;
export { Akg, Ckg, Ekg, Ikg, Mkg, Pkg, Rkg, Tkg, Txi, _Rn, bRn, opl, wkg, xkg, yRn };
var __wakaru_SRn_initialized = false;
export function SRn() {
if (__wakaru_SRn_initialized) return;
__wakaru_SRn_initialized = true;
"use strict";
E(), Mt(), c_(), fn(), Iy(), y4(), SY(), _Rn = /\r\n|\r|\n/, wkg = 512, Txi = 1500, bRn = 2e5, Ckg = 200, Tkg = 1e3, Ekg = 5e4, yRn = 2e4, Ikg = 20, xkg = 12, opl = new Ebe(xkg), Akg = {
    bash: "shellscript",
    fish: "shellscript",
    sh: "shellscript",
    shell: "shellscript",
    text: iR,
    zsh: "shellscript"
}, Rkg = class {
    constructor(t, e){
        this.languageService = t, this.cache = e, this.committedCode = "", this.committedLines = [], this.committedState = null, this.waitingForSupport = !1;
    }
    update({ code: t, language: e, streaming: n = !1 }) {
        if (!this.waitingForSupport && this.lastResult !== void 0 && t === this.lastCode && e === this.language) return this.lastResult;
        (e !== this.language || !t.startsWith(this.committedCode)) && this.reset(e);
        try {
            const i = this.compute(t, e, n);
            return this.waitingForSupport || (this.lastCode = t, this.lastResult = i), i;
        } catch  {
            this.reset(e);
            const i = LVt(t);
            return this.lastCode = t, this.lastResult = i, i;
        }
    }
    reset(t) {
        this.language = t, this.committedCode = "", this.committedLines = [], this.committedState = null, this.waitingForSupport = !1, this.lastCode = void 0, this.lastResult = void 0, this.ownCacheEntry = void 0;
    }
    compute(t, e, n) {
        let i = t.slice(this.committedCode.length);
        if (t.length > bRn) return LVt(t);
        let r = ykg(i);
        if (r.hasOverlongLine) return LVt(t);
        const s = pcs(e, this.languageService), o = BI.get(s);
        if (!o) return this.waitingForSupport = !0, BI.getOrCreate(s), LVt(t);
        if (this.waitingForSupport = !1, this.cache !== void 0 && this.committedState === null) {
            const d = this.cache.get(s, o, t) ?? this.cache.findStreamingPrefix(s, o, t);
            if (d !== void 0) {
                if (this.committedCode = d.committedCode, this.committedLines = d.lines.slice(0, d.committedLineCount), this.committedState = d.committedState?.clone() ?? null, d.code === t) return d.lines;
                i = t.slice(this.committedCode.length), r = ykg(i);
            }
        }
        let a = this.committedState ?? o.getInitialState();
        if (r.lastCommittableEolEnd > 0) {
            const d = i.slice(0, r.lastCommittableEolEnd), h = d.split(_Rn);
            h.pop();
            for (const p of h){
                const g = o.tokenizeEncoded(p, !0, a);
                this.committedLines.push(mcs(p, g.tokens, this.languageService)), a = g.endState;
            }
            this.committedCode += d, this.committedState = a;
        }
        const l = [
            ...this.committedLines
        ], u = t.slice(this.committedCode.length).split(_Rn);
        for(let d = 0; d < u.length; d++){
            const h = u[d], p = o.tokenizeEncoded(h, d < u.length - 1, a);
            l.push(mcs(h, p.tokens, this.languageService)), a = p.endState;
        }
        if (this.cache !== void 0) {
            const d = {
                languageId: s,
                tokenizationSupport: o,
                code: t,
                lines: l,
                committedCode: this.committedCode,
                committedLineCount: this.committedLines.length,
                committedState: this.committedState?.clone() ?? null
            };
            this.cache.set(d, {
                previous: this.ownCacheEntry,
                streaming: n
            }), this.ownCacheEntry = d;
        }
        return l;
    }
}, Pkg = class {
    constructor(t, e){
        this.languageService = t, this.maxCachedTexts = e, this.texts = new Map;
    }
    tokenizeLines(t, e, n) {
        const i = new Map;
        if (n.length === 0) return i;
        const r = this.getTextState(t, e);
        this.advanceTo(t, r, Math.min(Math.max(...n), r.lines.length));
        for (const s of n)s < 1 || i.set(s, r.tokensByLine[s - 1] ?? [
            {
                content: r.lines[s - 1] ?? "",
                col: 0
            }
        ]);
        return i;
    }
    tokenizedLineCount(t, e) {
        return this.texts.get(`${t}\0${e}`)?.tokensByLine.length ?? 0;
    }
    advanceTo(t, e, n) {
        if (e.tokensByLine.length >= n) return;
        const i = Skg(t, this.languageService);
        if (!i) return;
        let r = e.endState ?? i.getInitialState();
        for(; e.tokensByLine.length < n;){
            const s = e.lines[e.tokensByLine.length];
            if (!e.exhausted && (e.tokensByLine.length >= Txi || e.tokenizedChars + s.length > bRn) && (e.exhausted = !0), e.exhausted) {
                e.tokensByLine.push([
                    {
                        content: s,
                        col: 0
                    }
                ]);
                continue;
            }
            try {
                const o = kkg(i, s, r, this.languageService);
                e.tokensByLine.push(o.tokens), e.tokenizedChars += s.length, r = o.endState;
            } catch  {
                e.exhausted = !0, e.tokensByLine.push([
                    {
                        content: s,
                        col: 0
                    }
                ]);
            }
        }
        e.endState = r;
    }
    getTextState(t, e) {
        const n = `${t}\0${e}`, i = this.texts.get(n);
        if (i) return this.texts.delete(n), this.texts.set(n, i), i;
        const r = {
            lines: e.split(_Rn),
            tokensByLine: [],
            endState: void 0,
            tokenizedChars: 0,
            exhausted: !1
        };
        for(this.texts.set(n, r); this.texts.size > this.maxCachedTexts;){
            const s = this.texts.keys().next().value;
            if (s === void 0) break;
            this.texts.delete(s);
        }
        return r;
    }
}, Mkg = 8;

}
