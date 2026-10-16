import { E0, Jce, Ps, R7, ns, ry, si } from "./HVr.js";
import { PXr } from "./autoIndent.js";
import { En, qy } from "./charCode.js";
import { ire, rW } from "./cursorCommon.js";
import { MXr } from "./enterAction.js";
import { ize, lR } from "./languageConfiguration.js";
import { HT } from "./languageConfigurationRegistry.js";
import { Yn, ya } from "./position.js";
import { $pg, D2t, HPc, IPc, Jqe, LXr, Mfi, Pfi, Upg, WPc, Zht, dgn, jht, lgn, ple } from "./qIc.js";
import { dt, qi } from "./range.js";
import { GMc, Kmn, Y9, cfi, lfi, y2t, zmn } from "./replaceCommand.js";
import { AK, cgn } from "./shiftCommand.js";
import { qmn } from "./supports_2.js";
import { FPc, NPc } from "./surroundSelectionCommand.js";
import { x } from "./tslib.es6.js";
import { Zmn } from "./wordCharacterClassifier.js";
var GPc, VPc, jPc, Lfi, NXr, qPc, zPc, KPc, hgn, YPc, XPc, ZPc, QPc, Nfi, JPc, eLc;
export { GPc, JPc, KPc, Lfi, NXr, Nfi, QPc, VPc, XPc, YPc, ZPc, eLc, hgn, jPc, qPc, zPc };
var __wakaru_Ofi_initialized = false;
export function Ofi() {
if (__wakaru_Ofi_initialized) return;
__wakaru_Ofi_initialized = true;
"use strict";
x(), qy(), si(), Ps(), y2t(), cgn(), FPc(), ire(), Zmn(), qi(), ya(), ize(), HT(), qmn(), PXr(), MXr(), GPc = class {
    static getEdits(e, t, n, i, r) {
        if (!r && this._isAutoIndentType(e, t, n)) {
            const s = [];
            for (const a of n){
                const c = this._findActualIndentationForSelection(e, t, a, i);
                if (c === null) return;
                s.push({
                    selection: a,
                    indentation: c
                });
            }
            const o = Lfi.getAutoClosingPairClose(e, t, n, i, !1);
            return this._getIndentationAndAutoClosingPairEdits(e, t, s, i, o);
        }
    }
    static _isAutoIndentType(e, t, n) {
        if (e.autoIndent < 4) return !1;
        for(let i = 0, r = n.length; i < r; i++)if (!t.tokenization.isCheapToTokenize(n[i].getEndPosition().lineNumber)) return !1;
        return !0;
    }
    static _findActualIndentationForSelection(e, t, n, i) {
        const r = $pg(e, t, n, i, {
            shiftIndent: (o)=>Pfi(e, o),
            unshiftIndent: (o)=>dgn(e, o)
        }, e.languageConfigurationService);
        if (r === null) return null;
        const s = IPc(t, n.startLineNumber, n.startColumn);
        return r === e.normalizeIndentation(s) ? null : r;
    }
    static _getIndentationAndAutoClosingPairEdits(e, t, n, i, r) {
        const s = n.map(({ selection: a, indentation: c })=>{
            if (r !== null) {
                const l = this._getEditFromIndentationAndSelection(e, t, c, a, i, !1);
                return new eLc(l, a, i, r);
            } else {
                const l = this._getEditFromIndentationAndSelection(e, t, c, a, i, !0);
                return Zht(l.range, l.text, !1);
            }
        }), o = {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !1
        };
        return new rW(4, s, o);
    }
    static _getEditFromIndentationAndSelection(e, t, n, i, r, s = !0) {
        const o = i.startLineNumber, a = t.getLineFirstNonWhitespaceColumn(o);
        let c = e.normalizeIndentation(n);
        if (a !== 0) {
            const u = t.getLineContent(o);
            c += u.substring(a - 1, i.startColumn - 1);
        }
        return c += s ? r : "", {
            range: new dt(o, 1, i.endLineNumber, i.endColumn),
            text: c
        };
    }
}, VPc = class {
    static getEdits(e, t, n, i, r, s) {
        if (HPc(t, n, i, r, s)) return this._runAutoClosingOvertype(e, i, s);
    }
    static _runAutoClosingOvertype(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const a = t[r].getPosition(), c = new dt(a.lineNumber, a.column, a.lineNumber, a.column + 1);
            i[r] = new Y9(c, n);
        }
        return new rW(4, i, {
            shouldPushStackElementBefore: Mfi(e, 4),
            shouldPushStackElementAfter: !1
        });
    }
}, jPc = class {
    static getEdits(e, t, n, i, r) {
        if (HPc(e, t, n, i, r)) {
            const s = n.map((o)=>new Y9(new dt(o.positionLineNumber, o.positionColumn, o.positionLineNumber, o.positionColumn + 1), "", !1));
            return new rW(4, s, {
                shouldPushStackElementBefore: !0,
                shouldPushStackElementAfter: !1
            });
        }
    }
}, Lfi = class {
    static getEdits(e, t, n, i, r, s) {
        if (!s) {
            const o = this.getAutoClosingPairClose(e, t, n, i, r);
            if (o !== null) return this._runAutoClosingOpenCharType(n, i, r, o);
        }
    }
    static _runAutoClosingOpenCharType(e, t, n, i) {
        const r = [];
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            r[s] = new JPc(a, t, !n, i);
        }
        return new rW(4, r, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !1
        });
    }
    static getAutoClosingPairClose(e, t, n, i, r) {
        for (const g of n)if (!g.isEmpty()) return null;
        const s = n.map((g)=>{
            const f = g.getPosition();
            return r ? {
                lineNumber: f.lineNumber,
                beforeColumn: f.column - i.length,
                afterColumn: f.column
            } : {
                lineNumber: f.lineNumber,
                beforeColumn: f.column,
                afterColumn: f.column
            };
        }), o = this._findAutoClosingPairOpen(e, t, s.map((g)=>new Yn(g.lineNumber, g.beforeColumn)), i);
        if (!o) return null;
        let a, c;
        if (Jqe(i) ? (a = e.autoClosingQuotes, c = e.shouldAutoCloseBefore.quote) : (e.blockCommentStartToken ? o.open.includes(e.blockCommentStartToken) : !1) ? (a = e.autoClosingComments, c = e.shouldAutoCloseBefore.comment) : (a = e.autoClosingBrackets, c = e.shouldAutoCloseBefore.bracket), a === "never") return null;
        const u = this._findContainedAutoClosingPair(e, o), h = u ? u.close : "";
        let p = !0;
        for (const g of s){
            const { lineNumber: f, beforeColumn: v, afterColumn: b } = g, y = t.getLineContent(f), T = y.substring(0, v - 1), E = y.substring(b - 1);
            if (E.startsWith(h) || (p = !1), E.length > 0) {
                const P = E.charAt(0);
                if (!this._isBeforeClosingBrace(e, E) && !c(P)) return null;
            }
            if (o.open.length === 1 && (i === "'" || i === '"') && a !== "always") {
                const P = ple(e.wordSeparators, []);
                if (T.length > 0) {
                    const N = T.charCodeAt(T.length - 1);
                    if (P.get(N) === 0) return null;
                }
            }
            if (!t.tokenization.isCheapToTokenize(f)) return null;
            t.tokenization.forceTokenization(f);
            const A = t.tokenization.getLineTokens(f), R = jht(A, v - 1);
            if (!o.shouldAutoClose(R, v - R.firstCharOffset)) return null;
            const D = o.findNeutralCharacter();
            if (D) {
                const P = t.tokenization.getTokenTypeIfInsertingCharacter(f, v, D);
                if (!o.isOK(P)) return null;
            }
        }
        return p ? o.close.substring(0, o.close.length - h.length) : o.close;
    }
    static _findContainedAutoClosingPair(e, t) {
        if (t.open.length <= 1) return null;
        const n = t.close.charAt(t.close.length - 1), i = e.autoClosingPairs.autoClosingPairsCloseByEnd.get(n) || [];
        let r = null;
        for (const s of i)s.open !== t.open && t.open.includes(s.open) && t.close.endsWith(s.close) && (!r || s.open.length > r.open.length) && (r = s);
        return r;
    }
    static _findAutoClosingPairOpen(e, t, n, i) {
        const r = e.autoClosingPairs.autoClosingPairsOpenByEnd.get(i);
        if (!r) return null;
        let s = null;
        for (const o of r)if (s === null || o.open.length > s.open.length) {
            let a = !0;
            for (const c of n)if (t.getValueInRange(new dt(c.lineNumber, c.column - o.open.length + 1, c.lineNumber, c.column)) + i !== o.open) {
                a = !1;
                break;
            }
            a && (s = o);
        }
        return s;
    }
    static _isBeforeClosingBrace(e, t) {
        const n = t.charAt(0), i = e.autoClosingPairs.autoClosingPairsOpenByStart.get(n) || [], r = e.autoClosingPairs.autoClosingPairsCloseByStart.get(n) || [], s = i.some((a)=>t.startsWith(a.open)), o = r.some((a)=>t.startsWith(a.close));
        return !s && o;
    }
}, NXr = class {
    static getEdits(e, t) {
        if (!(e.inputMode === "overtype")) return null;
        const i = t.map((r)=>new GMc(r.insertedTextRange));
        return new rW(4, i, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !1
        });
    }
}, qPc = class {
    static getEdits(e, t, n, i, r) {
        if (!r && this._isSurroundSelectionType(e, t, n, i)) return this._runSurroundSelectionType(e, n, i);
    }
    static _runSurroundSelectionType(e, t, n) {
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = e.surroundingPairs[n];
            i[r] = new NPc(o, n, a);
        }
        return new rW(0, i, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
    static _isSurroundSelectionType(e, t, n, i) {
        if (!WPc(e, i) || !e.surroundingPairs.hasOwnProperty(i)) return !1;
        const r = Jqe(i);
        for (const s of n){
            if (s.isEmpty()) return !1;
            let o = !0;
            for(let a = s.startLineNumber; a <= s.endLineNumber; a++){
                const c = t.getLineContent(a), l = a === s.startLineNumber ? s.startColumn - 1 : 0, u = a === s.endLineNumber ? s.endColumn - 1 : c.length, h = c.substring(l, u);
                if (/[^ \t]/.test(h)) {
                    o = !1;
                    break;
                }
            }
            if (o) return !1;
            if (r && s.startLineNumber === s.endLineNumber && s.startColumn + 1 === s.endColumn) {
                const a = t.getValueInRange(s);
                if (Jqe(a)) return !1;
            }
        }
        return !0;
    }
}, zPc = class {
    static getEdits(e, t, n, i, r, s) {
        if (!s && this._isTypeInterceptorElectricChar(t, n, i)) {
            const o = this._typeInterceptorElectricChar(e, t, n, i[0], r);
            if (o) return o;
        }
    }
    static _isTypeInterceptorElectricChar(e, t, n) {
        return !!(n.length === 1 && t.tokenization.isCheapToTokenize(n[0].getEndPosition().lineNumber));
    }
    static _typeInterceptorElectricChar(e, t, n, i, r) {
        if (!t.electricChars.hasOwnProperty(r) || !i.isEmpty()) return null;
        const s = i.getPosition();
        n.tokenization.forceTokenization(s.lineNumber);
        const o = n.tokenization.getLineTokens(s.lineNumber);
        let a;
        try {
            a = t.onElectricCharacter(r, o, s.column);
        } catch (c) {
            return ns(c), null;
        }
        if (!a) return null;
        if (a.matchOpenBracket) {
            const c = (o.getLineContent() + r).lastIndexOf(a.matchOpenBracket) + 1, l = n.bracketPairs.findMatchingBracketUp(a.matchOpenBracket, {
                lineNumber: s.lineNumber,
                column: c
            }, 500);
            if (l) {
                if (l.startLineNumber === s.lineNumber) return null;
                const u = n.getLineContent(l.startLineNumber), h = E0(u), p = t.normalizeIndentation(h), g = n.getLineContent(s.lineNumber), f = n.getLineFirstNonWhitespaceColumn(s.lineNumber) || s.column, v = g.substring(f - 1, s.column - 1), b = p + v + r, y = new dt(s.lineNumber, 1, s.lineNumber, s.column), T = new Y9(y, b);
                return new rW(LXr(b, e), [
                    T
                ], {
                    shouldPushStackElementBefore: !1,
                    shouldPushStackElementAfter: !0
                });
            }
        }
        return null;
    }
}, KPc = class {
    static getEdits(e, t, n, i, r) {
        const s = [];
        for(let a = 0, c = n.length; a < c; a++){
            const l = e.inputMode === "overtype" && !r ? cfi : Y9;
            s[a] = new l(n[a], i);
        }
        const o = LXr(i, t);
        return new rW(o, s, {
            shouldPushStackElementBefore: Mfi(t, o),
            shouldPushStackElementAfter: !1
        });
    }
}, hgn = class {
    static getEdits(e, t, n, i, r) {
        if (!r && i === `
`) {
            const s = [];
            for(let o = 0, a = n.length; o < a; o++)s[o] = this._enter(e, t, !1, n[o]);
            return new rW(4, s, {
                shouldPushStackElementBefore: !0,
                shouldPushStackElementAfter: !1
            });
        }
    }
    static _enter(e, t, n, i) {
        if (e.autoIndent === 0) return Zht(i, `
`, n);
        if (!t.tokenization.isCheapToTokenize(i.getStartPosition().lineNumber) || e.autoIndent === 1) {
            const a = t.getLineContent(i.startLineNumber), c = E0(a).substring(0, i.startColumn - 1);
            return Zht(i, `
` + e.normalizeIndentation(c), n);
        }
        const r = D2t(e.autoIndent, t, i, e.languageConfigurationService);
        if (r) {
            if (r.indentAction === lR.None) return Zht(i, `
` + e.normalizeIndentation(r.indentation + r.appendText), n);
            if (r.indentAction === lR.Indent) return Zht(i, `
` + e.normalizeIndentation(r.indentation + r.appendText), n);
            if (r.indentAction === lR.IndentOutdent) {
                const a = e.normalizeIndentation(r.indentation), c = e.normalizeIndentation(r.indentation + r.appendText), l = `
` + c + `
` + a;
                return n ? new zmn(i, l, !0) : new Kmn(i, l, -1, c.length - a.length, !0);
            } else if (r.indentAction === lR.Outdent) {
                const a = dgn(e, r.indentation);
                return Zht(i, `
` + e.normalizeIndentation(a + r.appendText), n);
            }
        }
        const s = t.getLineContent(i.startLineNumber), o = E0(s).substring(0, i.startColumn - 1);
        if (e.autoIndent >= 4) {
            const a = Upg(e.autoIndent, t, i, {
                unshiftIndent: (c)=>dgn(e, c),
                shiftIndent: (c)=>Pfi(e, c),
                normalizeIndentation: (c)=>e.normalizeIndentation(c)
            }, e.languageConfigurationService);
            if (a) {
                let c = e.visibleColumnFromColumn(t, i.getEndPosition());
                const l = i.endColumn, u = t.getLineContent(i.endLineNumber), h = R7(u);
                if (h >= 0 ? i = i.setEndPosition(i.endLineNumber, Math.max(i.endColumn, h + 1)) : i = i.setEndPosition(i.endLineNumber, t.getLineMaxColumn(i.endLineNumber)), n) return new zmn(i, `
` + e.normalizeIndentation(a.afterEnter), !0);
                {
                    let p = 0;
                    return l <= h + 1 && (e.insertSpaces || (c = Math.ceil(c / e.indentSize)), p = Math.min(c + 1 - e.normalizeIndentation(a.afterEnter).length - 1, 0)), new Kmn(i, `
` + e.normalizeIndentation(a.afterEnter), 0, p, !0);
                }
            }
        }
        return Zht(i, `
` + e.normalizeIndentation(o), n);
    }
    static lineInsertBefore(e, t, n) {
        if (t === null || n === null) return [];
        const i = [];
        for(let r = 0, s = n.length; r < s; r++){
            let o = n[r].positionLineNumber;
            if (o === 1) i[r] = new zmn(new dt(1, 1, 1, 1), `
`);
            else {
                o--;
                const a = t.getLineMaxColumn(o);
                i[r] = this._enter(e, t, !1, new dt(o, a, o, a));
            }
        }
        return i;
    }
    static lineInsertAfter(e, t, n) {
        if (t === null || n === null) return [];
        const i = [];
        for(let r = 0, s = n.length; r < s; r++){
            const o = n[r].positionLineNumber, a = t.getLineMaxColumn(o);
            i[r] = this._enter(e, t, !1, new dt(o, a, o, a));
        }
        return i;
    }
    static lineBreakInsert(e, t, n) {
        const i = [];
        for(let r = 0, s = n.length; r < s; r++)i[r] = this._enter(e, t, !0, n[r]);
        return i;
    }
}, YPc = class {
    static getEdits(e, t, n, i, r, s) {
        const o = this._distributePasteToCursors(e, n, i, r, s);
        return o ? (n = n.sort(dt.compareRangesUsingStarts), this._distributedPaste(e, t, n, o)) : this._simplePaste(e, t, n, i, r);
    }
    static _distributePasteToCursors(e, t, n, i, r) {
        if (i || t.length === 1) return null;
        if (r && r.length === t.length) return r;
        if (e.multiCursorPaste === "spread") {
            n.charCodeAt(n.length - 1) === En.LineFeed && (n = n.substring(0, n.length - 1)), n.charCodeAt(n.length - 1) === En.CarriageReturn && (n = n.substring(0, n.length - 1));
            const s = ry(n);
            if (s.length === t.length) return s;
        }
        return null;
    }
    static _distributedPaste(e, t, n, i) {
        const r = [];
        for(let s = 0, o = n.length; s < o; s++){
            const c = e.overtypeOnPaste && e.inputMode === "overtype" ? cfi : Y9;
            r[s] = new c(n[s], i[s]);
        }
        return new rW(0, r, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
    static _simplePaste(e, t, n, i, r) {
        const s = [];
        for(let o = 0, a = n.length; o < a; o++){
            const c = n[o], l = c.getPosition();
            if (r && !c.isEmpty() && (r = !1), r && i.indexOf(`
`) !== i.length - 1 && (r = !1), r) {
                const u = new dt(l.lineNumber, 1, l.lineNumber, 1);
                s[o] = new lfi(u, i, c, !0);
            } else {
                const h = e.overtypeOnPaste && e.inputMode === "overtype" ? cfi : Y9;
                s[o] = new h(c, i);
            }
        }
        return new rW(0, s, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
}, XPc = class {
    static getEdits(e, t, n, i, r, s, o, a) {
        const c = i.map((l)=>this._compositionType(n, l, r, s, o, a));
        return new rW(4, c, {
            shouldPushStackElementBefore: Mfi(e, 4),
            shouldPushStackElementAfter: !1
        });
    }
    static _compositionType(e, t, n, i, r, s) {
        if (!t.isEmpty()) return null;
        const o = t.getPosition(), a = Math.max(1, o.column - i), c = Math.min(e.getLineMaxColumn(o.lineNumber), o.column + r), l = new dt(o.lineNumber, a, o.lineNumber, c);
        return new Kmn(l, n, 0, s);
    }
}, ZPc = class {
    static getEdits(e, t, n) {
        const i = [];
        for(let s = 0, o = t.length; s < o; s++)i[s] = new Y9(t[s], n);
        const r = LXr(n, e);
        return new rW(r, i, {
            shouldPushStackElementBefore: Mfi(e, r),
            shouldPushStackElementAfter: !1
        });
    }
}, QPc = class {
    static getCommands(e, t, n) {
        const i = [];
        for(let r = 0, s = n.length; r < s; r++){
            const o = n[r];
            if (o.isEmpty()) {
                const a = t.getLineContent(o.startLineNumber);
                if (/^\s*$/.test(a) && t.tokenization.isCheapToTokenize(o.startLineNumber)) {
                    let c = this._goodIndentForLine(e, t, o.startLineNumber);
                    c = c || "	";
                    const l = e.normalizeIndentation(c);
                    if (!a.startsWith(l)) {
                        i[r] = new Y9(new dt(o.startLineNumber, 1, o.startLineNumber, a.length + 1), l, !0);
                        continue;
                    }
                }
                i[r] = this._replaceJumpToNextIndent(e, t, o, !0);
            } else {
                if (o.startLineNumber === o.endLineNumber) {
                    const a = t.getLineMaxColumn(o.startLineNumber);
                    if (o.startColumn !== 1 || o.endColumn !== a) {
                        i[r] = this._replaceJumpToNextIndent(e, t, o, !1);
                        continue;
                    }
                }
                i[r] = new AK(o, {
                    isUnshift: !1,
                    tabSize: e.tabSize,
                    indentSize: e.indentSize,
                    insertSpaces: e.insertSpaces,
                    useTabStops: e.useTabStops,
                    autoIndent: e.autoIndent
                }, e.languageConfigurationService);
            }
        }
        return i;
    }
    static _goodIndentForLine(e, t, n) {
        let i = null, r = "";
        const s = lgn(e.autoIndent, t, n, !1, e.languageConfigurationService);
        if (s) i = s.action, r = s.indentation;
        else if (n > 1) {
            let o;
            for(o = n - 1; o >= 1; o--){
                const l = t.getLineContent(o);
                if (Jce(l) >= 0) break;
            }
            if (o < 1) return null;
            const a = t.getLineMaxColumn(o), c = D2t(e.autoIndent, t, new dt(o, a, o, a), e.languageConfigurationService);
            c && (r = c.indentation + c.appendText);
        }
        return i && (i === lR.Indent && (r = Pfi(e, r)), i === lR.Outdent && (r = dgn(e, r)), r = e.normalizeIndentation(r)), r || null;
    }
    static _replaceJumpToNextIndent(e, t, n, i) {
        let r = "";
        const s = n.getStartPosition();
        if (e.insertSpaces) {
            const o = e.visibleColumnFromColumn(t, s), a = e.indentSize, c = a - o % a;
            for(let l = 0; l < c; l++)r += " ";
        } else r = "	";
        return new Y9(n, r, i);
    }
}, Nfi = class extends Kmn {
    constructor(e, t, n, i, r, s){
        super(e, t, n, i), this._openCharacter = r, this._closeCharacter = s, this.closeCharacterRange = null, this.enclosingRange = null;
    }
    _computeCursorStateWithRange(e, t, n) {
        return this.closeCharacterRange = new dt(t.startLineNumber, t.endColumn - this._closeCharacter.length, t.endLineNumber, t.endColumn), this.enclosingRange = new dt(t.startLineNumber, t.endColumn - this._openCharacter.length - this._closeCharacter.length, t.endLineNumber, t.endColumn), super.computeCursorState(e, n);
    }
}, JPc = class extends Nfi {
    constructor(e, t, n, i){
        const r = (n ? t : "") + i, s = 0, o = -i.length;
        super(e, r, s, o, t, i);
    }
    computeCursorState(e, t) {
        const i = t.getInverseEditOperations()[0].range;
        return this._computeCursorStateWithRange(e, i, t);
    }
}, eLc = class extends Nfi {
    constructor(e, t, n, i){
        const r = n + i, s = 0, o = n.length;
        super(t, r, s, o, n, i), this._autoIndentationEdit = e, this._autoClosingEdit = {
            range: t,
            text: r
        };
    }
    getEditOperations(e, t) {
        t.addTrackedEditOperation(this._autoIndentationEdit.range, this._autoIndentationEdit.text), t.addTrackedEditOperation(this._autoClosingEdit.range, this._autoClosingEdit.text);
    }
    computeCursorState(e, t) {
        const n = t.getInverseEditOperations();
        if (n.length !== 2) throw new Error("There should be two inverse edit operations!");
        const i = n[0].range, r = n[1].range, s = i.plusRange(r);
        return this._computeCursorStateWithRange(e, s, t);
    }
};

}
