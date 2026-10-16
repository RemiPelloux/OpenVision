import { $pn, Ps, gmi } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { Cb, sFc, uOt } from "./model_2.js";
import { Yn, ya } from "./position.js";
import { GQr, WQr, ple, wpt } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { Zmn } from "./wordCharacterClassifier.js";
var JFc, kle, VQr, ufn, Cpt;
export { Cpt, JFc, VQr, kle, ufn };
var __wakaru_zBe_initialized = false;
export function zBe() {
if (__wakaru_zBe_initialized) return;
__wakaru_zBe_initialized = true;
"use strict";
x(), qy(), Ps(), Zmn(), ya(), qi(), Cb(), JFc = 999, kle = class {
    constructor(e, t, n, i){
        this.searchString = e, this.isRegex = t, this.matchCase = n, this.wordSeparators = i;
    }
    parseSearchRequest() {
        if (this.searchString === "") return null;
        let e;
        this.isRegex ? e = WQr(this.searchString) : e = this.searchString.indexOf(`
`) >= 0;
        let t = null;
        try {
            t = $pn(this.searchString, this.isRegex, {
                matchCase: this.matchCase,
                wholeWord: !1,
                multiline: e,
                global: !0,
                unicode: !0
            });
        } catch  {
            return null;
        }
        if (!t) return null;
        let n = !this.isRegex && !e;
        return n && this.searchString.toLowerCase() !== this.searchString.toUpperCase() && (n = this.matchCase), new sFc(t, this.wordSeparators ? ple(this.wordSeparators, []) : null, n ? this.searchString : null);
    }
}, VQr = class {
    constructor(e){
        const t = [];
        let n = 0;
        for(let i = 0, r = e.length; i < r; i++)e.charCodeAt(i) === En.LineFeed && (t[n++] = i);
        this._lineFeedsOffsets = t;
    }
    findLineFeedCountBeforeOffset(e) {
        const t = this._lineFeedsOffsets;
        let n = 0, i = t.length - 1;
        if (i === -1 || e <= t[0]) return 0;
        for(; n < i;){
            const r = n + ((i - n) / 2 >> 0);
            t[r] >= e ? i = r - 1 : t[r + 1] >= e ? (n = r, i = r) : n = r + 1;
        }
        return n + 1;
    }
}, ufn = class {
    static findMatches(e, t, n, i, r) {
        const s = t.parseSearchRequest();
        return s ? s.regex.multiline ? this._doFindMatchesMultiline(e, n, new Cpt(s.wordSeparators, s.regex), i, r) : this._doFindMatchesLineByLine(e, n, s, i, r) : [];
    }
    static _getMultilineMatchRange(e, t, n, i, r, s) {
        let o, a = 0;
        i ? (a = i.findLineFeedCountBeforeOffset(r), o = t + r + a) : o = t + r;
        let c;
        if (i) {
            const p = i.findLineFeedCountBeforeOffset(r + s.length) - a;
            c = o + s.length + p;
        } else c = o + s.length;
        const l = e.getPositionAt(o), u = e.getPositionAt(c);
        return new dt(l.lineNumber, l.column, u.lineNumber, u.column);
    }
    static _doFindMatchesMultiline(e, t, n, i, r) {
        const s = e.getOffsetAt(t.getStartPosition()), o = e.getValueInRange(t, 1), a = e.getEOL() === `\r
` ? new VQr(o) : null, c = [];
        let l = 0, u;
        for(n.reset(0); u = n.next(o);)if (c[l++] = wpt(this._getMultilineMatchRange(e, s, o, a, u.index, u[0]), u, i), l >= r) return c;
        return c;
    }
    static _doFindMatchesLineByLine(e, t, n, i, r) {
        const s = [];
        let o = 0;
        if (t.startLineNumber === t.endLineNumber) {
            const c = e.getLineContent(t.startLineNumber).substring(t.startColumn - 1, t.endColumn - 1);
            return o = this._findMatchesInLine(n, c, t.startLineNumber, t.startColumn - 1, o, s, i, r), s;
        }
        const a = e.getLineContent(t.startLineNumber).substring(t.startColumn - 1);
        o = this._findMatchesInLine(n, a, t.startLineNumber, t.startColumn - 1, o, s, i, r);
        for(let c = t.startLineNumber + 1; c < t.endLineNumber && o < r; c++)o = this._findMatchesInLine(n, e.getLineContent(c), c, 0, o, s, i, r);
        if (o < r) {
            const c = e.getLineContent(t.endLineNumber).substring(0, t.endColumn - 1);
            o = this._findMatchesInLine(n, c, t.endLineNumber, 0, o, s, i, r);
        }
        return s;
    }
    static _findMatchesInLine(e, t, n, i, r, s, o, a) {
        const c = e.wordSeparators;
        if (!o && e.simpleSearch) {
            const h = e.simpleSearch, p = h.length, g = t.length;
            let f = -p;
            for(; (f = t.indexOf(h, f + p)) !== -1;)if ((!c || GQr(c, t, g, f, p)) && (s[r++] = new uOt(new dt(n, f + 1 + i, n, f + 1 + p + i), null), r >= a)) return r;
            return r;
        }
        const l = new Cpt(e.wordSeparators, e.regex);
        let u;
        l.reset(0);
        do if (u = l.next(t), u && (s[r++] = wpt(new dt(n, u.index + 1 + i, n, u.index + 1 + u[0].length + i), u, o), r >= a)) return r;
        while (u)
        return r;
    }
    static findNextMatch(e, t, n, i) {
        const r = t.parseSearchRequest();
        if (!r) return null;
        const s = new Cpt(r.wordSeparators, r.regex);
        return r.regex.multiline ? this._doFindNextMatchMultiline(e, n, s, i) : this._doFindNextMatchLineByLine(e, n, s, i);
    }
    static _doFindNextMatchMultiline(e, t, n, i) {
        const r = new Yn(t.lineNumber, 1), s = e.getOffsetAt(r), o = e.getLineCount(), a = e.getValueInRange(new dt(r.lineNumber, r.column, o, e.getLineMaxColumn(o)), 1), c = e.getEOL() === `\r
` ? new VQr(a) : null;
        n.reset(t.column - 1);
        const l = n.next(a);
        return l ? wpt(this._getMultilineMatchRange(e, s, a, c, l.index, l[0]), l, i) : t.lineNumber !== 1 || t.column !== 1 ? this._doFindNextMatchMultiline(e, new Yn(1, 1), n, i) : null;
    }
    static _doFindNextMatchLineByLine(e, t, n, i) {
        const r = e.getLineCount(), s = t.lineNumber, o = e.getLineContent(s), a = this._findFirstMatchInLine(n, o, s, t.column, i);
        if (a) return a;
        for(let c = 1; c <= r; c++){
            const l = (s + c - 1) % r, u = e.getLineContent(l + 1), h = this._findFirstMatchInLine(n, u, l + 1, 1, i);
            if (h) return h;
        }
        return null;
    }
    static _findFirstMatchInLine(e, t, n, i, r) {
        e.reset(i - 1);
        const s = e.next(t);
        return s ? wpt(new dt(n, s.index + 1, n, s.index + 1 + s[0].length), s, r) : null;
    }
    static findPreviousMatch(e, t, n, i) {
        const r = t.parseSearchRequest();
        if (!r) return null;
        const s = new Cpt(r.wordSeparators, r.regex);
        return r.regex.multiline ? this._doFindPreviousMatchMultiline(e, n, s, i) : this._doFindPreviousMatchLineByLine(e, n, s, i);
    }
    static _doFindPreviousMatchMultiline(e, t, n, i) {
        const r = this._doFindMatchesMultiline(e, new dt(1, 1, t.lineNumber, t.column), n, i, 10 * JFc);
        if (r.length > 0) return r[r.length - 1];
        const s = e.getLineCount();
        return t.lineNumber !== s || t.column !== e.getLineMaxColumn(s) ? this._doFindPreviousMatchMultiline(e, new Yn(s, e.getLineMaxColumn(s)), n, i) : null;
    }
    static _doFindPreviousMatchLineByLine(e, t, n, i) {
        const r = e.getLineCount(), s = t.lineNumber, o = e.getLineContent(s).substring(0, t.column - 1), a = this._findLastMatchInLine(n, o, s, i);
        if (a) return a;
        for(let c = 1; c <= r; c++){
            const l = (r + s - c - 1) % r, u = e.getLineContent(l + 1), h = this._findLastMatchInLine(n, u, l + 1, i);
            if (h) return h;
        }
        return null;
    }
    static _findLastMatchInLine(e, t, n, i) {
        let r = null, s;
        for(e.reset(0); s = e.next(t);)r = wpt(new dt(n, s.index + 1, n, s.index + 1 + s[0].length), s, i);
        return r;
    }
}, Cpt = class {
    constructor(e, t){
        this._wordSeparators = e, this._searchRegex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
    }
    reset(e) {
        this._searchRegex.lastIndex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
    }
    next(e) {
        const t = e.length;
        let n;
        do {
            if (this._prevMatchStartIndex + this._prevMatchLength === t || (n = this._searchRegex.exec(e), !n)) return null;
            const i = n.index, r = n[0].length;
            if (i === this._prevMatchStartIndex && r === this._prevMatchLength) {
                if (r === 0) {
                    gmi(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
                    continue;
                }
                return null;
            }
            if (this._prevMatchStartIndex = i, this._prevMatchLength = r, !this._wordSeparators || GQr(this._wordSeparators, e, t, i, r)) return n;
        }while (n)
        return null;
    }
};

}
