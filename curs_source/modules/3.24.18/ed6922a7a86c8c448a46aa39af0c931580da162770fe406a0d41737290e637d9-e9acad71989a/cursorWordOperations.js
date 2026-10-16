import { Jce, Ps, _ge, mmi, xqe } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { iW, ire } from "./cursorCommon.js";
import { pfi, qht } from "./cursorDeleteOperations.js";
import { Yn, ya } from "./position.js";
import { mfi, ple } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { Zmn } from "./wordCharacterClassifier.js";
var Z9, Qmn;
export { Qmn, Z9 };
var __wakaru_gfi_initialized = false;
export function gfi() {
if (__wakaru_gfi_initialized) return;
__wakaru_gfi_initialized = true;
"use strict";
x(), qy(), Ps(), ire(), pfi(), Zmn(), ya(), qi(), Z9 = class Q2 {
    static _createWord(t, n, i, r, s) {
        return {
            start: r,
            end: s,
            wordType: n,
            nextCharClass: i
        };
    }
    static _createIntlWord(t, n) {
        return {
            start: t.index,
            end: t.index + t.segment.length,
            wordType: 1,
            nextCharClass: n
        };
    }
    static _findPreviousWordOnLine(t, n, i) {
        const r = n.getLineContent(i.lineNumber);
        return this._doFindPreviousWordOnLine(r, t, i);
    }
    static _doFindPreviousWordOnLine(t, n, i) {
        let r = 0;
        const s = n.findPrevIntlWordBeforeOrAtOffset(t, i.column - 2);
        for(let o = i.column - 2; o >= 0; o--){
            const a = t.charCodeAt(o), c = n.get(a);
            if (s && o === s.index) return this._createIntlWord(s, c);
            if (c === 0) {
                if (r === 2) return this._createWord(t, r, c, o + 1, this._findEndOfWord(t, n, r, o + 1));
                r = 1;
            } else if (c === 2) {
                if (r === 1) return this._createWord(t, r, c, o + 1, this._findEndOfWord(t, n, r, o + 1));
                r = 2;
            } else if (c === 1 && r !== 0) return this._createWord(t, r, c, o + 1, this._findEndOfWord(t, n, r, o + 1));
        }
        return r !== 0 ? this._createWord(t, r, 1, 0, this._findEndOfWord(t, n, r, 0)) : null;
    }
    static _findEndOfWord(t, n, i, r) {
        const s = n.findNextIntlWordAtOrAfterOffset(t, r), o = t.length;
        for(let a = r; a < o; a++){
            const c = t.charCodeAt(a), l = n.get(c);
            if (s && a === s.index + s.segment.length || l === 1 || i === 1 && l === 2 || i === 2 && l === 0) return a;
        }
        return o;
    }
    static _findNextWordOnLine(t, n, i) {
        const r = n.getLineContent(i.lineNumber);
        return this._doFindNextWordOnLine(r, t, i);
    }
    static _doFindNextWordOnLine(t, n, i) {
        let r = 0;
        const s = t.length, o = n.findNextIntlWordAtOrAfterOffset(t, i.column - 1);
        for(let a = i.column - 1; a < s; a++){
            const c = t.charCodeAt(a), l = n.get(c);
            if (o && a === o.index) return this._createIntlWord(o, l);
            if (l === 0) {
                if (r === 2) return this._createWord(t, r, l, this._findStartOfWord(t, n, r, a - 1), a);
                r = 1;
            } else if (l === 2) {
                if (r === 1) return this._createWord(t, r, l, this._findStartOfWord(t, n, r, a - 1), a);
                r = 2;
            } else if (l === 1 && r !== 0) return this._createWord(t, r, l, this._findStartOfWord(t, n, r, a - 1), a);
        }
        return r !== 0 ? this._createWord(t, r, 1, this._findStartOfWord(t, n, r, s - 1), s) : null;
    }
    static _findStartOfWord(t, n, i, r) {
        const s = n.findPrevIntlWordBeforeOrAtOffset(t, r);
        for(let o = r; o >= 0; o--){
            const a = t.charCodeAt(o), c = n.get(a);
            if (s && o === s.index) return o;
            if (c === 1 || i === 1 && c === 2 || i === 2 && c === 0) return o + 1;
        }
        return 0;
    }
    static moveWordLeft(t, n, i, r, s) {
        let o = i.lineNumber, a = i.column;
        a === 1 && o > 1 && (o = o - 1, a = n.getLineMaxColumn(o));
        let c = Q2._findPreviousWordOnLine(t, n, new Yn(o, a));
        if (r === 0) return new Yn(o, c ? c.start + 1 : 1);
        if (r === 1) return !s && c && c.wordType === 2 && c.end - c.start === 1 && c.nextCharClass === 0 && (c = Q2._findPreviousWordOnLine(t, n, new Yn(o, c.start + 1))), new Yn(o, c ? c.start + 1 : 1);
        if (r === 3) {
            for(; c && c.wordType === 2;)c = Q2._findPreviousWordOnLine(t, n, new Yn(o, c.start + 1));
            return new Yn(o, c ? c.start + 1 : 1);
        }
        return c && a <= c.end + 1 && (c = Q2._findPreviousWordOnLine(t, n, new Yn(o, c.start + 1))), new Yn(o, c ? c.end + 1 : 1);
    }
    static _moveWordPartLeft(t, n) {
        const i = n.lineNumber, r = t.getLineMaxColumn(i);
        if (n.column === 1) return i > 1 ? new Yn(i - 1, t.getLineMaxColumn(i - 1)) : n;
        const s = t.getLineContent(i);
        for(let o = n.column - 1; o > 1; o--){
            const a = s.charCodeAt(o - 2), c = s.charCodeAt(o - 1);
            if (a === En.Underline && c !== En.Underline) return new Yn(i, o);
            if (a === En.Dash && c !== En.Dash) return new Yn(i, o);
            if ((xqe(a) || mmi(a)) && _ge(c)) return new Yn(i, o);
            if (_ge(a) && _ge(c) && o + 1 < r) {
                const l = s.charCodeAt(o);
                if (xqe(l) || mmi(l)) return new Yn(i, o);
            }
        }
        return new Yn(i, 1);
    }
    static moveWordRight(t, n, i, r) {
        let s = i.lineNumber, o = i.column, a = !1;
        o === n.getLineMaxColumn(s) && s < n.getLineCount() && (a = !0, s = s + 1, o = 1);
        let c = Q2._findNextWordOnLine(t, n, new Yn(s, o));
        if (r === 2) c && c.wordType === 2 && c.end - c.start === 1 && c.nextCharClass === 0 && (c = Q2._findNextWordOnLine(t, n, new Yn(s, c.end + 1))), c ? o = c.end + 1 : o = n.getLineMaxColumn(s);
        else if (r === 3) {
            for(a && (o = 0); c && (c.wordType === 2 || c.start + 1 <= o);)c = Q2._findNextWordOnLine(t, n, new Yn(s, c.end + 1));
            c ? o = c.start + 1 : o = n.getLineMaxColumn(s);
        } else c && !a && o >= c.start + 1 && (c = Q2._findNextWordOnLine(t, n, new Yn(s, c.end + 1))), c ? o = c.start + 1 : o = n.getLineMaxColumn(s);
        return new Yn(s, o);
    }
    static _moveWordPartRight(t, n) {
        const i = n.lineNumber, r = t.getLineMaxColumn(i);
        if (n.column === r) return i < t.getLineCount() ? new Yn(i + 1, 1) : n;
        const s = t.getLineContent(i);
        for(let o = n.column + 1; o < r; o++){
            const a = s.charCodeAt(o - 2), c = s.charCodeAt(o - 1);
            if (a !== En.Underline && c === En.Underline) return new Yn(i, o);
            if (a !== En.Dash && c === En.Dash) return new Yn(i, o);
            if ((xqe(a) || mmi(a)) && _ge(c)) return new Yn(i, o);
            if (_ge(a) && _ge(c) && o + 1 < r) {
                const l = s.charCodeAt(o);
                if (xqe(l) || mmi(l)) return new Yn(i, o);
            }
        }
        return new Yn(i, r);
    }
    static _deleteWordLeftWhitespace(t, n) {
        const i = t.getLineContent(n.lineNumber), r = n.column - 2, s = Jce(i, r);
        return s + 1 < r ? new dt(n.lineNumber, s + 2, n.lineNumber, n.column) : null;
    }
    static deleteWordLeft(t, n) {
        const i = t.wordSeparators, r = t.model, s = t.selection, o = t.whitespaceHeuristics;
        if (!s.isEmpty()) return s;
        if (qht.isAutoClosingPairDelete(t.autoClosingDelete, t.autoClosingBrackets, t.autoClosingQuotes, t.autoClosingPairs.autoClosingPairsOpenByEnd, t.model, [
            t.selection
        ], t.autoClosedCharacters)) {
            const h = t.selection.getPosition();
            return new dt(h.lineNumber, h.column - 1, h.lineNumber, h.column + 1);
        }
        const a = new Yn(s.positionLineNumber, s.positionColumn);
        let c = a.lineNumber, l = a.column;
        if (c === 1 && l === 1) return null;
        if (o) {
            const h = this._deleteWordLeftWhitespace(r, a);
            if (h) return h;
        }
        let u = Q2._findPreviousWordOnLine(i, r, a);
        return n === 0 ? u ? l = u.start + 1 : l > 1 ? l = 1 : (c--, l = r.getLineMaxColumn(c)) : (u && l <= u.end + 1 && (u = Q2._findPreviousWordOnLine(i, r, new Yn(c, u.start + 1))), u ? l = u.end + 1 : l > 1 ? l = 1 : (c--, l = r.getLineMaxColumn(c))), new dt(c, l, a.lineNumber, a.column);
    }
    static deleteInsideWord(t, n, i) {
        if (!i.isEmpty()) return i;
        const r = new Yn(i.positionLineNumber, i.positionColumn), s = this._deleteInsideWordWhitespace(n, r);
        return s || this._deleteInsideWordDetermineDeleteRange(t, n, r);
    }
    static _charAtIsWhitespace(t, n) {
        const i = t.charCodeAt(n);
        return i === En.Space || i === En.Tab;
    }
    static _deleteInsideWordWhitespace(t, n) {
        const i = t.getLineContent(n.lineNumber), r = i.length;
        if (r === 0) return null;
        let s = Math.max(n.column - 2, 0);
        if (!this._charAtIsWhitespace(i, s)) return null;
        let o = Math.min(n.column - 1, r - 1);
        if (!this._charAtIsWhitespace(i, o)) return null;
        for(; s > 0 && this._charAtIsWhitespace(i, s - 1);)s--;
        for(; o + 1 < r && this._charAtIsWhitespace(i, o + 1);)o++;
        return new dt(n.lineNumber, s + 1, n.lineNumber, o + 2);
    }
    static _deleteInsideWordDetermineDeleteRange(t, n, i) {
        const r = n.getLineContent(i.lineNumber), s = r.length;
        if (s === 0) return i.lineNumber > 1 ? new dt(i.lineNumber - 1, n.getLineMaxColumn(i.lineNumber - 1), i.lineNumber, 1) : i.lineNumber < n.getLineCount() ? new dt(i.lineNumber, 1, i.lineNumber + 1, 1) : new dt(i.lineNumber, 1, i.lineNumber, 1);
        const o = (h)=>h.start + 1 <= i.column && i.column <= h.end + 1, a = (h, p)=>(h = Math.min(h, i.column), p = Math.max(p, i.column), new dt(i.lineNumber, h, i.lineNumber, p)), c = (h)=>{
            let p = h.start + 1, g = h.end + 1, f = !1;
            for(; g - 1 < s && this._charAtIsWhitespace(r, g - 1);)f = !0, g++;
            if (!f) for(; p > 1 && this._charAtIsWhitespace(r, p - 2);)p--;
            return a(p, g);
        }, l = Q2._findPreviousWordOnLine(t, n, i);
        if (l && o(l)) return c(l);
        const u = Q2._findNextWordOnLine(t, n, i);
        return u && o(u) ? c(u) : l && u ? a(l.end + 1, u.start + 1) : l ? a(l.start + 1, l.end + 1) : u ? a(u.start + 1, u.end + 1) : a(1, s + 1);
    }
    static _deleteWordPartLeft(t, n) {
        if (!n.isEmpty()) return n;
        const i = n.getPosition(), r = Q2._moveWordPartLeft(t, i);
        return new dt(i.lineNumber, i.column, r.lineNumber, r.column);
    }
    static _findFirstNonWhitespaceChar(t, n) {
        const i = t.length;
        for(let r = n; r < i; r++){
            const s = t.charAt(r);
            if (s !== " " && s !== "	") return r;
        }
        return i;
    }
    static _deleteWordRightWhitespace(t, n) {
        const i = t.getLineContent(n.lineNumber), r = n.column - 1, s = this._findFirstNonWhitespaceChar(i, r);
        return r + 1 < s ? new dt(n.lineNumber, n.column, n.lineNumber, s + 1) : null;
    }
    static deleteWordRight(t, n) {
        const i = t.wordSeparators, r = t.model, s = t.selection, o = t.whitespaceHeuristics;
        if (!s.isEmpty()) return s;
        const a = new Yn(s.positionLineNumber, s.positionColumn);
        let c = a.lineNumber, l = a.column;
        const u = r.getLineCount(), h = r.getLineMaxColumn(c);
        if (c === u && l === h) return null;
        if (o) {
            const g = this._deleteWordRightWhitespace(r, a);
            if (g) return g;
        }
        let p = Q2._findNextWordOnLine(i, r, a);
        return n === 2 ? p ? l = p.end + 1 : l < h || c === u ? l = h : (c++, p = Q2._findNextWordOnLine(i, r, new Yn(c, 1)), p ? l = p.start + 1 : l = r.getLineMaxColumn(c)) : (p && l >= p.start + 1 && (p = Q2._findNextWordOnLine(i, r, new Yn(c, p.end + 1))), p ? l = p.start + 1 : l < h || c === u ? l = h : (c++, p = Q2._findNextWordOnLine(i, r, new Yn(c, 1)), p ? l = p.start + 1 : l = r.getLineMaxColumn(c))), new dt(c, l, a.lineNumber, a.column);
    }
    static _deleteWordPartRight(t, n) {
        if (!n.isEmpty()) return n;
        const i = n.getPosition(), r = Q2._moveWordPartRight(t, i);
        return new dt(i.lineNumber, i.column, r.lineNumber, r.column);
    }
    static _createWordAtPosition(t, n, i) {
        const r = new dt(n, i.start + 1, n, i.end + 1);
        return {
            word: t.getValueInRange(r),
            startColumn: r.startColumn,
            endColumn: r.endColumn
        };
    }
    static getWordAtPosition(t, n, i, r) {
        const s = ple(n, i), o = Q2._findPreviousWordOnLine(s, t, r);
        if (o && o.wordType === 1 && o.start <= r.column - 1 && r.column - 1 <= o.end) return Q2._createWordAtPosition(t, r.lineNumber, o);
        const a = Q2._findNextWordOnLine(s, t, r);
        return a && a.wordType === 1 && a.start <= r.column - 1 && r.column - 1 <= a.end ? Q2._createWordAtPosition(t, r.lineNumber, a) : null;
    }
    static word(t, n, i, r, s) {
        const o = ple(t.wordSeparators, t.wordSegmenterLocales), a = Q2._findPreviousWordOnLine(o, n, s), c = Q2._findNextWordOnLine(o, n, s);
        if (!r) {
            let g, f;
            return a && a.wordType === 1 && a.start <= s.column - 1 && s.column - 1 <= a.end ? (g = a.start + 1, f = a.end + 1) : c && c.wordType === 1 && c.start <= s.column - 1 && s.column - 1 <= c.end ? (g = c.start + 1, f = c.end + 1) : (a ? g = a.end + 1 : g = 1, c ? f = c.start + 1 : f = n.getLineMaxColumn(s.lineNumber)), new iW(new dt(s.lineNumber, g, s.lineNumber, f), 1, 0, new Yn(s.lineNumber, f), 0);
        }
        let l, u;
        a && a.wordType === 1 && a.start < s.column - 1 && s.column - 1 < a.end ? (l = a.start + 1, u = a.end + 1) : c && c.wordType === 1 && c.start < s.column - 1 && s.column - 1 < c.end ? (l = c.start + 1, u = c.end + 1) : (l = s.column, u = s.column);
        const h = s.lineNumber;
        let p;
        if (i.selectionStart.containsPosition(s)) p = i.selectionStart.endColumn;
        else if (s.isBeforeOrEqual(i.selectionStart.getStartPosition())) {
            p = l;
            const g = new Yn(h, p);
            i.selectionStart.containsPosition(g) && (p = i.selectionStart.endColumn);
        } else {
            p = u;
            const g = new Yn(h, p);
            i.selectionStart.containsPosition(g) && (p = i.selectionStart.startColumn);
        }
        return i.move(!0, h, p, 0);
    }
}, Qmn = class extends Z9 {
    static deleteWordPartLeft(e) {
        const t = mfi([
            Z9.deleteWordLeft(e, 0),
            Z9.deleteWordLeft(e, 2),
            Z9._deleteWordPartLeft(e.model, e.selection)
        ]);
        return t.sort(dt.compareRangesUsingEnds), t[2];
    }
    static deleteWordPartRight(e) {
        const t = mfi([
            Z9.deleteWordRight(e, 0),
            Z9.deleteWordRight(e, 2),
            Z9._deleteWordPartRight(e.model, e.selection)
        ]);
        return t.sort(dt.compareRangesUsingStarts), t[0];
    }
    static moveWordPartLeft(e, t, n, i) {
        const r = mfi([
            Z9.moveWordLeft(e, t, n, 0, i),
            Z9.moveWordLeft(e, t, n, 2, i),
            Z9._moveWordPartLeft(t, n)
        ]);
        return r.sort(Yn.compare), r[2];
    }
    static moveWordPartRight(e, t, n) {
        const i = mfi([
            Z9.moveWordRight(e, t, n, 0),
            Z9.moveWordRight(e, t, n, 2),
            Z9._moveWordPartRight(t, n)
        ]);
        return i.sort(Yn.compare), i[0];
    }
};

}
