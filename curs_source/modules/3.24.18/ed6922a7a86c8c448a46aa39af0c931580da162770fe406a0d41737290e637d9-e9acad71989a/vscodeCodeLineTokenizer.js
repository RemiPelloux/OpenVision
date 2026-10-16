import { Q0e, ub } from "./async.cursor.js";
import { mi } from "./index_188.js";
import { Ky, Wp } from "./languages.js";
import { P7, uA } from "./lineTokens.js";
import { $T, Sy } from "./modesRegistry.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
function Dtr(e, t) {
    if (!e) return Sy;
    const n = e.trim().toLowerCase();
    if (!n) return Sy;
    if (t.isRegisteredLanguageId(n)) return n;
    const i = UNh[n];
    if (i && t.isRegisteredLanguageId(i)) return i;
    const r = t.getLanguageIdByLanguageName(e);
    return r || t.guessLanguageIdByFilepathOrFirstLine(Ee.file(`fence.${n}`)) || Sy;
}
function Mtr(e, t, n) {
    uA.convertToEndOffset(t, e.length);
    const i = new uA(t, e, n.languageIdCodec).inflate(), r = [];
    let s = 0;
    for(let o = 0; o < i.getCount(); o++){
        const a = i.getEndOffset(o), c = e.slice(s, a);
        c.length > 0 && r.push({
            content: c,
            className: i.getClassName(o) || void 0,
            col: s
        }), s = a;
    }
    return r.length > 0 ? r : [
        {
            content: e,
            col: 0
        }
    ];
}
function o0t(e) {
    return e.split(yqt).map((t)=>[
            {
                content: t,
                col: 0
            }
        ]);
}
function ANh(e) {
    let t = 0, n = 0;
    for(let i = 0; i < e.length; i++){
        const r = e.charCodeAt(i);
        if (r !== 10 && r !== 13) continue;
        if (i - n > kqt) return {
            hasOverlongLine: !0,
            lastCommittableEolEnd: t
        };
        const s = r === 13 && e.charCodeAt(i + 1) === 10 ? 2 : 1, o = i + s;
        r === 13 && s === 1 && o === e.length || (t = o), n = o, i = o - 1;
    }
    return {
        hasOverlongLine: e.length - n > kqt,
        lastCommittableEolEnd: t
    };
}
function NIo(e, t) {
    const n = Dtr(e, t);
    return n === Sy || !t.isRegisteredLanguageId(n) ? void 0 : n;
}
function DNh(e, t) {
    const n = NIo(e, t);
    if (n === void 0) return null;
    const i = Ky.get(n);
    return i || Ky.getOrCreate(n), i;
}
function MNh(e, t, n, i) {
    if (t.length > kqt) return {
        tokens: [
            {
                content: t,
                col: 0
            }
        ],
        endState: n
    };
    const r = e.tokenizeEncoded(t, !0, n);
    return {
        tokens: Mtr(t, r.tokens, i),
        endState: r.endState
    };
}
var yqt, PNh, GBn, Sqt, LNh, NNh, ONh, kqt, FNh, BNh, OIo, UNh, $Nh, HNh, WNh;
export { $Nh, ANh, BNh, DNh, Dtr, FNh, GBn, HNh, LNh, MNh, Mtr, NIo, NNh, OIo, ONh, PNh, Sqt, UNh, WNh, kqt, o0t, yqt };
var __wakaru_Ptr_initialized = false;
export function Ptr() {
if (__wakaru_Ptr_initialized) return;
__wakaru_Ptr_initialized = true;
"use strict";
x(), mi(), ub(), Qt(), Wp(), $T(), P7(), yqt = /\r\n|\r|\n/, PNh = 512, GBn = 1500, Sqt = 2e5, LNh = 200, NNh = 1e3, ONh = 5e4, kqt = 2e4, FNh = 20, BNh = 12, OIo = new Q0e(BNh), UNh = {
    bash: "shellscript",
    fish: "shellscript",
    sh: "shellscript",
    shell: "shellscript",
    text: Sy,
    zsh: "shellscript"
}, $Nh = class {
    constructor(e, t){
        this.languageService = e, this.cache = t, this.committedCode = "", this.committedLines = [], this.committedState = null, this.waitingForSupport = !1;
    }
    update({ code: e, language: t, streaming: n = !1 }) {
        if (!this.waitingForSupport && this.lastResult !== void 0 && e === this.lastCode && t === this.language) return this.lastResult;
        (t !== this.language || !e.startsWith(this.committedCode)) && this.reset(t);
        try {
            const i = this.compute(e, t, n);
            return this.waitingForSupport || (this.lastCode = e, this.lastResult = i), i;
        } catch  {
            this.reset(t);
            const i = o0t(e);
            return this.lastCode = e, this.lastResult = i, i;
        }
    }
    reset(e) {
        this.language = e, this.committedCode = "", this.committedLines = [], this.committedState = null, this.waitingForSupport = !1, this.lastCode = void 0, this.lastResult = void 0, this.ownCacheEntry = void 0;
    }
    compute(e, t, n) {
        let i = e.slice(this.committedCode.length);
        if (e.length > Sqt) return o0t(e);
        let r = ANh(i);
        if (r.hasOverlongLine) return o0t(e);
        const s = Dtr(t, this.languageService), o = Ky.get(s);
        if (!o) return this.waitingForSupport = !0, Ky.getOrCreate(s), o0t(e);
        if (this.waitingForSupport = !1, this.cache !== void 0 && this.committedState === null) {
            const h = this.cache.get(s, o, e) ?? this.cache.findStreamingPrefix(s, o, e);
            if (h !== void 0) {
                if (this.committedCode = h.committedCode, this.committedLines = h.lines.slice(0, h.committedLineCount), this.committedState = h.committedState?.clone() ?? null, h.code === e) return h.lines;
                i = e.slice(this.committedCode.length), r = ANh(i);
            }
        }
        let a = this.committedState ?? o.getInitialState();
        if (r.lastCommittableEolEnd > 0) {
            const h = i.slice(0, r.lastCommittableEolEnd), p = h.split(yqt);
            p.pop();
            for (const g of p){
                const f = o.tokenizeEncoded(g, !0, a);
                this.committedLines.push(Mtr(g, f.tokens, this.languageService)), a = f.endState;
            }
            this.committedCode += h, this.committedState = a;
        }
        const c = [
            ...this.committedLines
        ], u = e.slice(this.committedCode.length).split(yqt);
        for(let h = 0; h < u.length; h++){
            const p = u[h], g = o.tokenizeEncoded(p, h < u.length - 1, a);
            c.push(Mtr(p, g.tokens, this.languageService)), a = g.endState;
        }
        if (this.cache !== void 0) {
            const h = {
                languageId: s,
                tokenizationSupport: o,
                code: e,
                lines: c,
                committedCode: this.committedCode,
                committedLineCount: this.committedLines.length,
                committedState: this.committedState?.clone() ?? null
            };
            this.cache.set(h, {
                previous: this.ownCacheEntry,
                streaming: n
            }), this.ownCacheEntry = h;
        }
        return c;
    }
}, HNh = class {
    constructor(e, t){
        this.languageService = e, this.maxCachedTexts = t, this.texts = new Map;
    }
    tokenizeLines(e, t, n) {
        const i = new Map;
        if (n.length === 0) return i;
        const r = this.getTextState(e, t);
        this.advanceTo(e, r, Math.min(Math.max(...n), r.lines.length));
        for (const s of n)s < 1 || i.set(s, r.tokensByLine[s - 1] ?? [
            {
                content: r.lines[s - 1] ?? "",
                col: 0
            }
        ]);
        return i;
    }
    tokenizedLineCount(e, t) {
        return this.texts.get(`${e}\0${t}`)?.tokensByLine.length ?? 0;
    }
    advanceTo(e, t, n) {
        if (t.tokensByLine.length >= n) return;
        const i = DNh(e, this.languageService);
        if (!i) return;
        let r = t.endState ?? i.getInitialState();
        for(; t.tokensByLine.length < n;){
            const s = t.lines[t.tokensByLine.length];
            if (!t.exhausted && (t.tokensByLine.length >= GBn || t.tokenizedChars + s.length > Sqt) && (t.exhausted = !0), t.exhausted) {
                t.tokensByLine.push([
                    {
                        content: s,
                        col: 0
                    }
                ]);
                continue;
            }
            try {
                const o = MNh(i, s, r, this.languageService);
                t.tokensByLine.push(o.tokens), t.tokenizedChars += s.length, r = o.endState;
            } catch  {
                t.exhausted = !0, t.tokensByLine.push([
                    {
                        content: s,
                        col: 0
                    }
                ]);
            }
        }
        t.endState = r;
    }
    getTextState(e, t) {
        const n = `${e}\0${t}`, i = this.texts.get(n);
        if (i) return this.texts.delete(n), this.texts.set(n, i), i;
        const r = {
            lines: t.split(yqt),
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
}, WNh = 8;

}
