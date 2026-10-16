import { Fa, Jxe, dmr, jvt, tAe } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { swe, wQ } from "./cursorCommon.js";
import { Bii, Q7o } from "./cursorDeleteOperations.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { $ii } from "./wordCharacterClassifier.js";
import { owe, twr } from "./ze.js";
var gW, Hii;
export { Hii, gW };
var __wakaru_nwr_initialized = false;
export function nwr() {
if (__wakaru_nwr_initialized) return;
__wakaru_nwr_initialized = true;
"use strict";
E(), Cw(), Fa(), swe(), Q7o(), $ii(), jc(), Qs(), gW = class S9 {
    static _createWord(e, n, i, r, s) {
        return {
            start: r,
            end: s,
            wordType: n,
            nextCharClass: i
        };
    }
    static _createIntlWord(e, n) {
        return {
            start: e.index,
            end: e.index + e.segment.length,
            wordType: 1,
            nextCharClass: n
        };
    }
    static _findPreviousWordOnLine(e, n, i) {
        const r = n.getLineContent(i.lineNumber);
        return this._doFindPreviousWordOnLine(r, e, i);
    }
    static _doFindPreviousWordOnLine(e, n, i) {
        let r = 0;
        const s = n.findPrevIntlWordBeforeOrAtOffset(e, i.column - 2);
        for(let o = i.column - 2; o >= 0; o--){
            const a = e.charCodeAt(o), l = n.get(a);
            if (s && o === s.index) return this._createIntlWord(s, l);
            if (l === 0) {
                if (r === 2) return this._createWord(e, r, l, o + 1, this._findEndOfWord(e, n, r, o + 1));
                r = 1;
            } else if (l === 2) {
                if (r === 1) return this._createWord(e, r, l, o + 1, this._findEndOfWord(e, n, r, o + 1));
                r = 2;
            } else if (l === 1 && r !== 0) return this._createWord(e, r, l, o + 1, this._findEndOfWord(e, n, r, o + 1));
        }
        return r !== 0 ? this._createWord(e, r, 1, 0, this._findEndOfWord(e, n, r, 0)) : null;
    }
    static _findEndOfWord(e, n, i, r) {
        const s = n.findNextIntlWordAtOrAfterOffset(e, r), o = e.length;
        for(let a = r; a < o; a++){
            const l = e.charCodeAt(a), c = n.get(l);
            if (s && a === s.index + s.segment.length || c === 1 || i === 1 && c === 2 || i === 2 && c === 0) return a;
        }
        return o;
    }
    static _findNextWordOnLine(e, n, i) {
        const r = n.getLineContent(i.lineNumber);
        return this._doFindNextWordOnLine(r, e, i);
    }
    static _doFindNextWordOnLine(e, n, i) {
        let r = 0;
        const s = e.length, o = n.findNextIntlWordAtOrAfterOffset(e, i.column - 1);
        for(let a = i.column - 1; a < s; a++){
            const l = e.charCodeAt(a), c = n.get(l);
            if (o && a === o.index) return this._createIntlWord(o, c);
            if (c === 0) {
                if (r === 2) return this._createWord(e, r, c, this._findStartOfWord(e, n, r, a - 1), a);
                r = 1;
            } else if (c === 2) {
                if (r === 1) return this._createWord(e, r, c, this._findStartOfWord(e, n, r, a - 1), a);
                r = 2;
            } else if (c === 1 && r !== 0) return this._createWord(e, r, c, this._findStartOfWord(e, n, r, a - 1), a);
        }
        return r !== 0 ? this._createWord(e, r, 1, this._findStartOfWord(e, n, r, s - 1), s) : null;
    }
    static _findStartOfWord(e, n, i, r) {
        const s = n.findPrevIntlWordBeforeOrAtOffset(e, r);
        for(let o = r; o >= 0; o--){
            const a = e.charCodeAt(o), l = n.get(a);
            if (s && o === s.index) return o;
            if (l === 1 || i === 1 && l === 2 || i === 2 && l === 0) return o + 1;
        }
        return 0;
    }
    static moveWordLeft(e, n, i, r, s) {
        let o = i.lineNumber, a = i.column;
        a === 1 && o > 1 && (o = o - 1, a = n.getLineMaxColumn(o));
        let l = S9._findPreviousWordOnLine(e, n, new er(o, a));
        if (r === 0) return new er(o, l ? l.start + 1 : 1);
        if (r === 1) return !s && l && l.wordType === 2 && l.end - l.start === 1 && l.nextCharClass === 0 && (l = S9._findPreviousWordOnLine(e, n, new er(o, l.start + 1))), new er(o, l ? l.start + 1 : 1);
        if (r === 3) {
            for(; l && l.wordType === 2;)l = S9._findPreviousWordOnLine(e, n, new er(o, l.start + 1));
            return new er(o, l ? l.start + 1 : 1);
        }
        return l && a <= l.end + 1 && (l = S9._findPreviousWordOnLine(e, n, new er(o, l.start + 1))), new er(o, l ? l.end + 1 : 1);
    }
    static _moveWordPartLeft(e, n) {
        const i = n.lineNumber, r = e.getLineMaxColumn(i);
        if (n.column === 1) return i > 1 ? new er(i - 1, e.getLineMaxColumn(i - 1)) : n;
        const s = e.getLineContent(i);
        for(let o = n.column - 1; o > 1; o--){
            const a = s.charCodeAt(o - 2), l = s.charCodeAt(o - 1);
            if (a === ti.Underline && l !== ti.Underline) return new er(i, o);
            if (a === ti.Dash && l !== ti.Dash) return new er(i, o);
            if ((jvt(a) || dmr(a)) && tAe(l)) return new er(i, o);
            if (tAe(a) && tAe(l) && o + 1 < r) {
                const c = s.charCodeAt(o);
                if (jvt(c) || dmr(c)) return new er(i, o);
            }
        }
        return new er(i, 1);
    }
    static moveWordRight(e, n, i, r) {
        let s = i.lineNumber, o = i.column, a = !1;
        o === n.getLineMaxColumn(s) && s < n.getLineCount() && (a = !0, s = s + 1, o = 1);
        let l = S9._findNextWordOnLine(e, n, new er(s, o));
        if (r === 2) l && l.wordType === 2 && l.end - l.start === 1 && l.nextCharClass === 0 && (l = S9._findNextWordOnLine(e, n, new er(s, l.end + 1))), l ? o = l.end + 1 : o = n.getLineMaxColumn(s);
        else if (r === 3) {
            for(a && (o = 0); l && (l.wordType === 2 || l.start + 1 <= o);)l = S9._findNextWordOnLine(e, n, new er(s, l.end + 1));
            l ? o = l.start + 1 : o = n.getLineMaxColumn(s);
        } else l && !a && o >= l.start + 1 && (l = S9._findNextWordOnLine(e, n, new er(s, l.end + 1))), l ? o = l.start + 1 : o = n.getLineMaxColumn(s);
        return new er(s, o);
    }
    static _moveWordPartRight(e, n) {
        const i = n.lineNumber, r = e.getLineMaxColumn(i);
        if (n.column === r) return i < e.getLineCount() ? new er(i + 1, 1) : n;
        const s = e.getLineContent(i);
        for(let o = n.column + 1; o < r; o++){
            const a = s.charCodeAt(o - 2), l = s.charCodeAt(o - 1);
            if (a !== ti.Underline && l === ti.Underline) return new er(i, o);
            if (a !== ti.Dash && l === ti.Dash) return new er(i, o);
            if ((jvt(a) || dmr(a)) && tAe(l)) return new er(i, o);
            if (tAe(a) && tAe(l) && o + 1 < r) {
                const c = s.charCodeAt(o);
                if (jvt(c) || dmr(c)) return new er(i, o);
            }
        }
        return new er(i, r);
    }
    static _deleteWordLeftWhitespace(e, n) {
        const i = e.getLineContent(n.lineNumber), r = n.column - 2, s = Jxe(i, r);
        return s + 1 < r ? new qt(n.lineNumber, s + 2, n.lineNumber, n.column) : null;
    }
    static deleteWordLeft(e, n) {
        const i = e.wordSeparators, r = e.model, s = e.selection, o = e.whitespaceHeuristics;
        if (!s.isEmpty()) return s;
        if (Bii.isAutoClosingPairDelete(e.autoClosingDelete, e.autoClosingBrackets, e.autoClosingQuotes, e.autoClosingPairs.autoClosingPairsOpenByEnd, e.model, [
            e.selection
        ], e.autoClosedCharacters)) {
            const d = e.selection.getPosition();
            return new qt(d.lineNumber, d.column - 1, d.lineNumber, d.column + 1);
        }
        const a = new er(s.positionLineNumber, s.positionColumn);
        let l = a.lineNumber, c = a.column;
        if (l === 1 && c === 1) return null;
        if (o) {
            const d = this._deleteWordLeftWhitespace(r, a);
            if (d) return d;
        }
        let u = S9._findPreviousWordOnLine(i, r, a);
        return n === 0 ? u ? c = u.start + 1 : c > 1 ? c = 1 : (l--, c = r.getLineMaxColumn(l)) : (u && c <= u.end + 1 && (u = S9._findPreviousWordOnLine(i, r, new er(l, u.start + 1))), u ? c = u.end + 1 : c > 1 ? c = 1 : (l--, c = r.getLineMaxColumn(l))), new qt(l, c, a.lineNumber, a.column);
    }
    static deleteInsideWord(e, n, i) {
        if (!i.isEmpty()) return i;
        const r = new er(i.positionLineNumber, i.positionColumn), s = this._deleteInsideWordWhitespace(n, r);
        return s || this._deleteInsideWordDetermineDeleteRange(e, n, r);
    }
    static _charAtIsWhitespace(e, n) {
        const i = e.charCodeAt(n);
        return i === ti.Space || i === ti.Tab;
    }
    static _deleteInsideWordWhitespace(e, n) {
        const i = e.getLineContent(n.lineNumber), r = i.length;
        if (r === 0) return null;
        let s = Math.max(n.column - 2, 0);
        if (!this._charAtIsWhitespace(i, s)) return null;
        let o = Math.min(n.column - 1, r - 1);
        if (!this._charAtIsWhitespace(i, o)) return null;
        for(; s > 0 && this._charAtIsWhitespace(i, s - 1);)s--;
        for(; o + 1 < r && this._charAtIsWhitespace(i, o + 1);)o++;
        return new qt(n.lineNumber, s + 1, n.lineNumber, o + 2);
    }
    static _deleteInsideWordDetermineDeleteRange(e, n, i) {
        const r = n.getLineContent(i.lineNumber), s = r.length;
        if (s === 0) return i.lineNumber > 1 ? new qt(i.lineNumber - 1, n.getLineMaxColumn(i.lineNumber - 1), i.lineNumber, 1) : i.lineNumber < n.getLineCount() ? new qt(i.lineNumber, 1, i.lineNumber + 1, 1) : new qt(i.lineNumber, 1, i.lineNumber, 1);
        const o = (d)=>d.start + 1 <= i.column && i.column <= d.end + 1, a = (d, h)=>(d = Math.min(d, i.column), h = Math.max(h, i.column), new qt(i.lineNumber, d, i.lineNumber, h)), l = (d)=>{
            let h = d.start + 1, p = d.end + 1, g = !1;
            for(; p - 1 < s && this._charAtIsWhitespace(r, p - 1);)g = !0, p++;
            if (!g) for(; h > 1 && this._charAtIsWhitespace(r, h - 2);)h--;
            return a(h, p);
        }, c = S9._findPreviousWordOnLine(e, n, i);
        if (c && o(c)) return l(c);
        const u = S9._findNextWordOnLine(e, n, i);
        return u && o(u) ? l(u) : c && u ? a(c.end + 1, u.start + 1) : c ? a(c.start + 1, c.end + 1) : u ? a(u.start + 1, u.end + 1) : a(1, s + 1);
    }
    static _deleteWordPartLeft(e, n) {
        if (!n.isEmpty()) return n;
        const i = n.getPosition(), r = S9._moveWordPartLeft(e, i);
        return new qt(i.lineNumber, i.column, r.lineNumber, r.column);
    }
    static _findFirstNonWhitespaceChar(e, n) {
        const i = e.length;
        for(let r = n; r < i; r++){
            const s = e.charAt(r);
            if (s !== " " && s !== "	") return r;
        }
        return i;
    }
    static _deleteWordRightWhitespace(e, n) {
        const i = e.getLineContent(n.lineNumber), r = n.column - 1, s = this._findFirstNonWhitespaceChar(i, r);
        return r + 1 < s ? new qt(n.lineNumber, n.column, n.lineNumber, s + 1) : null;
    }
    static deleteWordRight(e, n) {
        const i = e.wordSeparators, r = e.model, s = e.selection, o = e.whitespaceHeuristics;
        if (!s.isEmpty()) return s;
        const a = new er(s.positionLineNumber, s.positionColumn);
        let l = a.lineNumber, c = a.column;
        const u = r.getLineCount(), d = r.getLineMaxColumn(l);
        if (l === u && c === d) return null;
        if (o) {
            const p = this._deleteWordRightWhitespace(r, a);
            if (p) return p;
        }
        let h = S9._findNextWordOnLine(i, r, a);
        return n === 2 ? h ? c = h.end + 1 : c < d || l === u ? c = d : (l++, h = S9._findNextWordOnLine(i, r, new er(l, 1)), h ? c = h.start + 1 : c = r.getLineMaxColumn(l)) : (h && c >= h.start + 1 && (h = S9._findNextWordOnLine(i, r, new er(l, h.end + 1))), h ? c = h.start + 1 : c < d || l === u ? c = d : (l++, h = S9._findNextWordOnLine(i, r, new er(l, 1)), h ? c = h.start + 1 : c = r.getLineMaxColumn(l))), new qt(l, c, a.lineNumber, a.column);
    }
    static _deleteWordPartRight(e, n) {
        if (!n.isEmpty()) return n;
        const i = n.getPosition(), r = S9._moveWordPartRight(e, i);
        return new qt(i.lineNumber, i.column, r.lineNumber, r.column);
    }
    static _createWordAtPosition(e, n, i) {
        const r = new qt(n, i.start + 1, n, i.end + 1);
        return {
            word: e.getValueInRange(r),
            startColumn: r.startColumn,
            endColumn: r.endColumn
        };
    }
    static getWordAtPosition(e, n, i, r) {
        const s = owe(n, i), o = S9._findPreviousWordOnLine(s, e, r);
        if (o && o.wordType === 1 && o.start <= r.column - 1 && r.column - 1 <= o.end) return S9._createWordAtPosition(e, r.lineNumber, o);
        const a = S9._findNextWordOnLine(s, e, r);
        return a && a.wordType === 1 && a.start <= r.column - 1 && r.column - 1 <= a.end ? S9._createWordAtPosition(e, r.lineNumber, a) : null;
    }
    static word(e, n, i, r, s) {
        const o = owe(e.wordSeparators, e.wordSegmenterLocales), a = S9._findPreviousWordOnLine(o, n, s), l = S9._findNextWordOnLine(o, n, s);
        if (!r) {
            let p, g;
            return a && a.wordType === 1 && a.start <= s.column - 1 && s.column - 1 <= a.end ? (p = a.start + 1, g = a.end + 1) : l && l.wordType === 1 && l.start <= s.column - 1 && s.column - 1 <= l.end ? (p = l.start + 1, g = l.end + 1) : (a ? p = a.end + 1 : p = 1, l ? g = l.start + 1 : g = n.getLineMaxColumn(s.lineNumber)), new wQ(new qt(s.lineNumber, p, s.lineNumber, g), 1, 0, new er(s.lineNumber, g), 0);
        }
        let c, u;
        a && a.wordType === 1 && a.start < s.column - 1 && s.column - 1 < a.end ? (c = a.start + 1, u = a.end + 1) : l && l.wordType === 1 && l.start < s.column - 1 && s.column - 1 < l.end ? (c = l.start + 1, u = l.end + 1) : (c = s.column, u = s.column);
        const d = s.lineNumber;
        let h;
        if (i.selectionStart.containsPosition(s)) h = i.selectionStart.endColumn;
        else if (s.isBeforeOrEqual(i.selectionStart.getStartPosition())) {
            h = c;
            const p = new er(d, h);
            i.selectionStart.containsPosition(p) && (h = i.selectionStart.endColumn);
        } else {
            h = u;
            const p = new er(d, h);
            i.selectionStart.containsPosition(p) && (h = i.selectionStart.startColumn);
        }
        return i.move(!0, d, h, 0);
    }
}, Hii = class extends gW {
    static deleteWordPartLeft(t) {
        const e = twr([
            gW.deleteWordLeft(t, 0),
            gW.deleteWordLeft(t, 2),
            gW._deleteWordPartLeft(t.model, t.selection)
        ]);
        return e.sort(qt.compareRangesUsingEnds), e[2];
    }
    static deleteWordPartRight(t) {
        const e = twr([
            gW.deleteWordRight(t, 0),
            gW.deleteWordRight(t, 2),
            gW._deleteWordPartRight(t.model, t.selection)
        ]);
        return e.sort(qt.compareRangesUsingStarts), e[0];
    }
    static moveWordPartLeft(t, e, n, i) {
        const r = twr([
            gW.moveWordLeft(t, e, n, 0, i),
            gW.moveWordLeft(t, e, n, 2, i),
            gW._moveWordPartLeft(e, n)
        ]);
        return r.sort(er.compare), r[2];
    }
    static moveWordPartRight(t, e, n) {
        const i = twr([
            gW.moveWordRight(t, e, n, 0),
            gW.moveWordRight(t, e, n, 2),
            gW._moveWordPartRight(e, n)
        ]);
        return i.sort(er.compare), i[0];
    }
};

}
