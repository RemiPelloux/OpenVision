import { Fa, cmr, hmr } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { J0, NBd, Qgn } from "./model_2.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { $ii } from "./wordCharacterClassifier.js";
import { e$o, eBt, owe, t$o } from "./ze.js";
var I8d, GAe, n$o, qri, tBt;
export { GAe, I8d, n$o, qri, tBt };
var __wakaru_ayt_initialized = false;
export function ayt() {
if (__wakaru_ayt_initialized) return;
__wakaru_ayt_initialized = true;
"use strict";
E(), Cw(), Fa(), $ii(), jc(), Qs(), J0(), I8d = 999, GAe = class {
    constructor(t, e, n, i){
        this.searchString = t, this.isRegex = e, this.matchCase = n, this.wordSeparators = i;
    }
    parseSearchRequest() {
        if (this.searchString === "") return null;
        let t;
        this.isRegex ? t = e$o(this.searchString) : t = this.searchString.indexOf(`
`) >= 0;
        let e = null;
        try {
            e = cmr(this.searchString, this.isRegex, {
                matchCase: this.matchCase,
                wholeWord: !1,
                multiline: t,
                global: !0,
                unicode: !0
            });
        } catch  {
            return null;
        }
        if (!e) return null;
        let n = !this.isRegex && !t;
        return n && this.searchString.toLowerCase() !== this.searchString.toUpperCase() && (n = this.matchCase), new NBd(e, this.wordSeparators ? owe(this.wordSeparators, []) : null, n ? this.searchString : null);
    }
}, n$o = class {
    constructor(t){
        const e = [];
        let n = 0;
        for(let i = 0, r = t.length; i < r; i++)t.charCodeAt(i) === ti.LineFeed && (e[n++] = i);
        this._lineFeedsOffsets = e;
    }
    findLineFeedCountBeforeOffset(t) {
        const e = this._lineFeedsOffsets;
        let n = 0, i = e.length - 1;
        if (i === -1 || t <= e[0]) return 0;
        for(; n < i;){
            const r = n + ((i - n) / 2 >> 0);
            e[r] >= t ? i = r - 1 : e[r + 1] >= t ? (n = r, i = r) : n = r + 1;
        }
        return n + 1;
    }
}, qri = class {
    static findMatches(t, e, n, i, r) {
        const s = e.parseSearchRequest();
        return s ? s.regex.multiline ? this._doFindMatchesMultiline(t, n, new tBt(s.wordSeparators, s.regex), i, r) : this._doFindMatchesLineByLine(t, n, s, i, r) : [];
    }
    static _getMultilineMatchRange(t, e, n, i, r, s) {
        let o, a = 0;
        i ? (a = i.findLineFeedCountBeforeOffset(r), o = e + r + a) : o = e + r;
        let l;
        if (i) {
            const h = i.findLineFeedCountBeforeOffset(r + s.length) - a;
            l = o + s.length + h;
        } else l = o + s.length;
        const c = t.getPositionAt(o), u = t.getPositionAt(l);
        return new qt(c.lineNumber, c.column, u.lineNumber, u.column);
    }
    static _doFindMatchesMultiline(t, e, n, i, r) {
        const s = t.getOffsetAt(e.getStartPosition()), o = t.getValueInRange(e, 1), a = t.getEOL() === `\r
` ? new n$o(o) : null, l = [];
        let c = 0, u;
        for(n.reset(0); u = n.next(o);)if (l[c++] = eBt(this._getMultilineMatchRange(t, s, o, a, u.index, u[0]), u, i), c >= r) return l;
        return l;
    }
    static _doFindMatchesLineByLine(t, e, n, i, r) {
        const s = [];
        let o = 0;
        if (e.startLineNumber === e.endLineNumber) {
            const l = t.getLineContent(e.startLineNumber).substring(e.startColumn - 1, e.endColumn - 1);
            return o = this._findMatchesInLine(n, l, e.startLineNumber, e.startColumn - 1, o, s, i, r), s;
        }
        const a = t.getLineContent(e.startLineNumber).substring(e.startColumn - 1);
        o = this._findMatchesInLine(n, a, e.startLineNumber, e.startColumn - 1, o, s, i, r);
        for(let l = e.startLineNumber + 1; l < e.endLineNumber && o < r; l++)o = this._findMatchesInLine(n, t.getLineContent(l), l, 0, o, s, i, r);
        if (o < r) {
            const l = t.getLineContent(e.endLineNumber).substring(0, e.endColumn - 1);
            o = this._findMatchesInLine(n, l, e.endLineNumber, 0, o, s, i, r);
        }
        return s;
    }
    static _findMatchesInLine(t, e, n, i, r, s, o, a) {
        const l = t.wordSeparators;
        if (!o && t.simpleSearch) {
            const d = t.simpleSearch, h = d.length, p = e.length;
            let g = -h;
            for(; (g = e.indexOf(d, g + h)) !== -1;)if ((!l || t$o(l, e, p, g, h)) && (s[r++] = new Qgn(new qt(n, g + 1 + i, n, g + 1 + h + i), null), r >= a)) return r;
            return r;
        }
        const c = new tBt(t.wordSeparators, t.regex);
        let u;
        c.reset(0);
        do if (u = c.next(e), u && (s[r++] = eBt(new qt(n, u.index + 1 + i, n, u.index + 1 + u[0].length + i), u, o), r >= a)) return r;
        while (u)
        return r;
    }
    static findNextMatch(t, e, n, i) {
        const r = e.parseSearchRequest();
        if (!r) return null;
        const s = new tBt(r.wordSeparators, r.regex);
        return r.regex.multiline ? this._doFindNextMatchMultiline(t, n, s, i) : this._doFindNextMatchLineByLine(t, n, s, i);
    }
    static _doFindNextMatchMultiline(t, e, n, i) {
        const r = new er(e.lineNumber, 1), s = t.getOffsetAt(r), o = t.getLineCount(), a = t.getValueInRange(new qt(r.lineNumber, r.column, o, t.getLineMaxColumn(o)), 1), l = t.getEOL() === `\r
` ? new n$o(a) : null;
        n.reset(e.column - 1);
        const c = n.next(a);
        return c ? eBt(this._getMultilineMatchRange(t, s, a, l, c.index, c[0]), c, i) : e.lineNumber !== 1 || e.column !== 1 ? this._doFindNextMatchMultiline(t, new er(1, 1), n, i) : null;
    }
    static _doFindNextMatchLineByLine(t, e, n, i) {
        const r = t.getLineCount(), s = e.lineNumber, o = t.getLineContent(s), a = this._findFirstMatchInLine(n, o, s, e.column, i);
        if (a) return a;
        for(let l = 1; l <= r; l++){
            const c = (s + l - 1) % r, u = t.getLineContent(c + 1), d = this._findFirstMatchInLine(n, u, c + 1, 1, i);
            if (d) return d;
        }
        return null;
    }
    static _findFirstMatchInLine(t, e, n, i, r) {
        t.reset(i - 1);
        const s = t.next(e);
        return s ? eBt(new qt(n, s.index + 1, n, s.index + 1 + s[0].length), s, r) : null;
    }
    static findPreviousMatch(t, e, n, i) {
        const r = e.parseSearchRequest();
        if (!r) return null;
        const s = new tBt(r.wordSeparators, r.regex);
        return r.regex.multiline ? this._doFindPreviousMatchMultiline(t, n, s, i) : this._doFindPreviousMatchLineByLine(t, n, s, i);
    }
    static _doFindPreviousMatchMultiline(t, e, n, i) {
        const r = this._doFindMatchesMultiline(t, new qt(1, 1, e.lineNumber, e.column), n, i, 10 * I8d);
        if (r.length > 0) return r[r.length - 1];
        const s = t.getLineCount();
        return e.lineNumber !== s || e.column !== t.getLineMaxColumn(s) ? this._doFindPreviousMatchMultiline(t, new er(s, t.getLineMaxColumn(s)), n, i) : null;
    }
    static _doFindPreviousMatchLineByLine(t, e, n, i) {
        const r = t.getLineCount(), s = e.lineNumber, o = t.getLineContent(s).substring(0, e.column - 1), a = this._findLastMatchInLine(n, o, s, i);
        if (a) return a;
        for(let l = 1; l <= r; l++){
            const c = (r + s - l - 1) % r, u = t.getLineContent(c + 1), d = this._findLastMatchInLine(n, u, c + 1, i);
            if (d) return d;
        }
        return null;
    }
    static _findLastMatchInLine(t, e, n, i) {
        let r = null, s;
        for(t.reset(0); s = t.next(e);)r = eBt(new qt(n, s.index + 1, n, s.index + 1 + s[0].length), s, i);
        return r;
    }
}, tBt = class {
    constructor(t, e){
        this._wordSeparators = t, this._searchRegex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
    }
    reset(t) {
        this._searchRegex.lastIndex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
    }
    next(t) {
        const e = t.length;
        let n;
        do {
            if (this._prevMatchStartIndex + this._prevMatchLength === e || (n = this._searchRegex.exec(t), !n)) return null;
            const i = n.index, r = n[0].length;
            if (i === this._prevMatchStartIndex && r === this._prevMatchLength) {
                if (r === 0) {
                    hmr(t, e, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
                    continue;
                }
                return null;
            }
            if (this._prevMatchStartIndex = i, this._prevMatchLength = r, !this._wordSeparators || t$o(this._wordSeparators, t, e, i, r)) return n;
        }while (n)
        return null;
    }
};

}
