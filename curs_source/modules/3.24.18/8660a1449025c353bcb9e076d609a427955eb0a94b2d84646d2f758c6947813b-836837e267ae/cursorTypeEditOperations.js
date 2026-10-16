import { EI, Ei, Fa, Jxe, sY, ww, xr } from "./Iwo.js";
import { fUo } from "./autoIndent.js";
import { Cw, ti } from "./charCode.js";
import { CQ, swe } from "./cursorCommon.js";
import { gUo } from "./enterAction.js";
import { H3, Lbt } from "./languageConfiguration.js";
import { RD } from "./languageConfigurationRegistry.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Fii, Oii, Xkr, Zkr, mW, uFd, wgn } from "./replaceCommand.js";
import { Xii, loe } from "./shiftCommand.js";
import { Lii } from "./supports_2.js";
import { WFd, qFd } from "./surroundSelectionCommand.js";
import { E } from "./tslib.es6.js";
import { $ii } from "./wordCharacterClassifier.js";
import { D9t, Dbt, E9t, Ign, Jii, OFd, Swr, UAy, XFd, YFd, Zii, jAy, owe, vUo, ywr } from "./ze.js";
var ZFd, QFd, JFd, kwr, _Uo, e6d, t6d, n6d, eri, i6d, r6d, s6d, o6d, wwr, a6d, l6d;
export { JFd, QFd, ZFd, _Uo, a6d, e6d, eri, i6d, kwr, l6d, n6d, o6d, r6d, s6d, t6d, wwr };
var __wakaru_Cwr_initialized = false;
export function Cwr() {
if (__wakaru_Cwr_initialized) return;
__wakaru_Cwr_initialized = true;
"use strict";
E(), Cw(), Ei(), Fa(), wgn(), Xii(), qFd(), swe(), $ii(), Qs(), jc(), Lbt(), RD(), Lii(), fUo(), gUo(), ZFd = class {
    static getEdits(t, e, n, i, r) {
        if (!r && this._isAutoIndentType(t, e, n)) {
            const s = [];
            for (const a of n){
                const l = this._findActualIndentationForSelection(t, e, a, i);
                if (l === null) return;
                s.push({
                    selection: a,
                    indentation: l
                });
            }
            const o = kwr.getAutoClosingPairClose(t, e, n, i, !1);
            return this._getIndentationAndAutoClosingPairEdits(t, e, s, i, o);
        }
    }
    static _isAutoIndentType(t, e, n) {
        if (t.autoIndent < 4) return !1;
        for(let i = 0, r = n.length; i < r; i++)if (!e.tokenization.isCheapToTokenize(n[i].getEndPosition().lineNumber)) return !1;
        return !0;
    }
    static _findActualIndentationForSelection(t, e, n, i) {
        const r = jAy(t, e, n, i, {
            shiftIndent: (o)=>Swr(t, o),
            unshiftIndent: (o)=>Jii(t, o)
        }, t.languageConfigurationService);
        if (r === null) return null;
        const s = OFd(e, n.startLineNumber, n.startColumn);
        return r === t.normalizeIndentation(s) ? null : r;
    }
    static _getIndentationAndAutoClosingPairEdits(t, e, n, i, r) {
        const s = n.map(({ selection: a, indentation: l })=>{
            if (r !== null) {
                const c = this._getEditFromIndentationAndSelection(t, e, l, a, i, !1);
                return new l6d(c, a, i, r);
            } else {
                const c = this._getEditFromIndentationAndSelection(t, e, l, a, i, !0);
                return D9t(c.range, c.text, !1);
            }
        }), o = {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !1
        };
        return new CQ(4, s, o);
    }
    static _getEditFromIndentationAndSelection(t, e, n, i, r, s = !0) {
        const o = i.startLineNumber, a = e.getLineFirstNonWhitespaceColumn(o);
        let l = t.normalizeIndentation(n);
        if (a !== 0) {
            const u = e.getLineContent(o);
            l += u.substring(a - 1, i.startColumn - 1);
        }
        return l += s ? r : "", {
            range: new qt(o, 1, i.endLineNumber, i.endColumn),
            text: l
        };
    }
}, QFd = class {
    static getEdits(t, e, n, i, r, s) {
        if (YFd(e, n, i, r, s)) return this._runAutoClosingOvertype(t, i, s);
    }
    static _runAutoClosingOvertype(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const a = e[r].getPosition(), l = new qt(a.lineNumber, a.column, a.lineNumber, a.column + 1);
            i[r] = new mW(l, n);
        }
        return new CQ(4, i, {
            shouldPushStackElementBefore: ywr(t, 4),
            shouldPushStackElementAfter: !1
        });
    }
}, JFd = class {
    static getEdits(t, e, n, i, r) {
        if (YFd(t, e, n, i, r)) {
            const s = n.map((o)=>new mW(new qt(o.positionLineNumber, o.positionColumn, o.positionLineNumber, o.positionColumn + 1), "", !1));
            return new CQ(4, s, {
                shouldPushStackElementBefore: !0,
                shouldPushStackElementAfter: !1
            });
        }
    }
}, kwr = class {
    static getEdits(t, e, n, i, r, s) {
        if (!s) {
            const o = this.getAutoClosingPairClose(t, e, n, i, r);
            if (o !== null) return this._runAutoClosingOpenCharType(n, i, r, o);
        }
    }
    static _runAutoClosingOpenCharType(t, e, n, i) {
        const r = [];
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            r[s] = new a6d(a, e, !n, i);
        }
        return new CQ(4, r, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !1
        });
    }
    static getAutoClosingPairClose(t, e, n, i, r) {
        for (const p of n)if (!p.isEmpty()) return null;
        const s = n.map((p)=>{
            const g = p.getPosition();
            return r ? {
                lineNumber: g.lineNumber,
                beforeColumn: g.column - i.length,
                afterColumn: g.column
            } : {
                lineNumber: g.lineNumber,
                beforeColumn: g.column,
                afterColumn: g.column
            };
        }), o = this._findAutoClosingPairOpen(t, e, s.map((p)=>new er(p.lineNumber, p.beforeColumn)), i);
        if (!o) return null;
        let a, l;
        if (Dbt(i) ? (a = t.autoClosingQuotes, l = t.shouldAutoCloseBefore.quote) : (t.blockCommentStartToken ? o.open.includes(t.blockCommentStartToken) : !1) ? (a = t.autoClosingComments, l = t.shouldAutoCloseBefore.comment) : (a = t.autoClosingBrackets, l = t.shouldAutoCloseBefore.bracket), a === "never") return null;
        const u = this._findContainedAutoClosingPair(t, o), d = u ? u.close : "";
        let h = !0;
        for (const p of s){
            const { lineNumber: g, beforeColumn: f, afterColumn: _ } = p, b = e.getLineContent(g), y = b.substring(0, f - 1), S = b.substring(_ - 1);
            if (S.startsWith(d) || (h = !1), S.length > 0) {
                const I = S.charAt(0);
                if (!this._isBeforeClosingBrace(t, S) && !l(I)) return null;
            }
            if (o.open.length === 1 && (i === "'" || i === '"') && a !== "always") {
                const I = owe(t.wordSeparators, []);
                if (y.length > 0) {
                    const A = y.charCodeAt(y.length - 1);
                    if (I.get(A) === 0) return null;
                }
            }
            if (!e.tokenization.isCheapToTokenize(g)) return null;
            e.tokenization.forceTokenization(g);
            const k = e.tokenization.getLineTokens(g), C = E9t(k, f - 1);
            if (!o.shouldAutoClose(C, f - C.firstCharOffset)) return null;
            const T = o.findNeutralCharacter();
            if (T) {
                const I = e.tokenization.getTokenTypeIfInsertingCharacter(g, f, T);
                if (!o.isOK(I)) return null;
            }
        }
        return h ? o.close.substring(0, o.close.length - d.length) : o.close;
    }
    static _findContainedAutoClosingPair(t, e) {
        if (e.open.length <= 1) return null;
        const n = e.close.charAt(e.close.length - 1), i = t.autoClosingPairs.autoClosingPairsCloseByEnd.get(n) || [];
        let r = null;
        for (const s of i)s.open !== e.open && e.open.includes(s.open) && e.close.endsWith(s.close) && (!r || s.open.length > r.open.length) && (r = s);
        return r;
    }
    static _findAutoClosingPairOpen(t, e, n, i) {
        const r = t.autoClosingPairs.autoClosingPairsOpenByEnd.get(i);
        if (!r) return null;
        let s = null;
        for (const o of r)if (s === null || o.open.length > s.open.length) {
            let a = !0;
            for (const l of n)if (e.getValueInRange(new qt(l.lineNumber, l.column - o.open.length + 1, l.lineNumber, l.column)) + i !== o.open) {
                a = !1;
                break;
            }
            a && (s = o);
        }
        return s;
    }
    static _isBeforeClosingBrace(t, e) {
        const n = e.charAt(0), i = t.autoClosingPairs.autoClosingPairsOpenByStart.get(n) || [], r = t.autoClosingPairs.autoClosingPairsCloseByStart.get(n) || [], s = i.some((a)=>e.startsWith(a.open)), o = r.some((a)=>e.startsWith(a.close));
        return !s && o;
    }
}, _Uo = class {
    static getEdits(t, e) {
        if (!(t.inputMode === "overtype")) return null;
        const i = e.map((r)=>new uFd(r.insertedTextRange));
        return new CQ(4, i, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !1
        });
    }
}, e6d = class {
    static getEdits(t, e, n, i, r) {
        if (!r && this._isSurroundSelectionType(t, e, n, i)) return this._runSurroundSelectionType(t, n, i);
    }
    static _runSurroundSelectionType(t, e, n) {
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = t.surroundingPairs[n];
            i[r] = new WFd(o, n, a);
        }
        return new CQ(0, i, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
    static _isSurroundSelectionType(t, e, n, i) {
        if (!XFd(t, i) || !t.surroundingPairs.hasOwnProperty(i)) return !1;
        const r = Dbt(i);
        for (const s of n){
            if (s.isEmpty()) return !1;
            let o = !0;
            for(let a = s.startLineNumber; a <= s.endLineNumber; a++){
                const l = e.getLineContent(a), c = a === s.startLineNumber ? s.startColumn - 1 : 0, u = a === s.endLineNumber ? s.endColumn - 1 : l.length, d = l.substring(c, u);
                if (/[^ \t]/.test(d)) {
                    o = !1;
                    break;
                }
            }
            if (o) return !1;
            if (r && s.startLineNumber === s.endLineNumber && s.startColumn + 1 === s.endColumn) {
                const a = e.getValueInRange(s);
                if (Dbt(a)) return !1;
            }
        }
        return !0;
    }
}, t6d = class {
    static getEdits(t, e, n, i, r, s) {
        if (!s && this._isTypeInterceptorElectricChar(e, n, i)) {
            const o = this._typeInterceptorElectricChar(t, e, n, i[0], r);
            if (o) return o;
        }
    }
    static _isTypeInterceptorElectricChar(t, e, n) {
        return !!(n.length === 1 && e.tokenization.isCheapToTokenize(n[0].getEndPosition().lineNumber));
    }
    static _typeInterceptorElectricChar(t, e, n, i, r) {
        if (!e.electricChars.hasOwnProperty(r) || !i.isEmpty()) return null;
        const s = i.getPosition();
        n.tokenization.forceTokenization(s.lineNumber);
        const o = n.tokenization.getLineTokens(s.lineNumber);
        let a;
        try {
            a = e.onElectricCharacter(r, o, s.column);
        } catch (l) {
            return xr(l), null;
        }
        if (!a) return null;
        if (a.matchOpenBracket) {
            const l = (o.getLineContent() + r).lastIndexOf(a.matchOpenBracket) + 1, c = n.bracketPairs.findMatchingBracketUp(a.matchOpenBracket, {
                lineNumber: s.lineNumber,
                column: l
            }, 500);
            if (c) {
                if (c.startLineNumber === s.lineNumber) return null;
                const u = n.getLineContent(c.startLineNumber), d = EI(u), h = e.normalizeIndentation(d), p = n.getLineContent(s.lineNumber), g = n.getLineFirstNonWhitespaceColumn(s.lineNumber) || s.column, f = p.substring(g - 1, s.column - 1), _ = h + f + r, b = new qt(s.lineNumber, 1, s.lineNumber, s.column), y = new mW(b, _);
                return new CQ(vUo(_, t), [
                    y
                ], {
                    shouldPushStackElementBefore: !1,
                    shouldPushStackElementAfter: !0
                });
            }
        }
        return null;
    }
}, n6d = class {
    static getEdits(t, e, n, i, r) {
        const s = [];
        for(let a = 0, l = n.length; a < l; a++){
            const c = t.inputMode === "overtype" && !r ? Xkr : mW;
            s[a] = new c(n[a], i);
        }
        const o = vUo(i, e);
        return new CQ(o, s, {
            shouldPushStackElementBefore: ywr(e, o),
            shouldPushStackElementAfter: !1
        });
    }
}, eri = class {
    static getEdits(t, e, n, i, r) {
        if (!r && i === `
`) {
            const s = [];
            for(let o = 0, a = n.length; o < a; o++)s[o] = this._enter(t, e, !1, n[o]);
            return new CQ(4, s, {
                shouldPushStackElementBefore: !0,
                shouldPushStackElementAfter: !1
            });
        }
    }
    static _enter(t, e, n, i) {
        if (t.autoIndent === 0) return D9t(i, `
`, n);
        if (!e.tokenization.isCheapToTokenize(i.getStartPosition().lineNumber) || t.autoIndent === 1) {
            const a = e.getLineContent(i.startLineNumber), l = EI(a).substring(0, i.startColumn - 1);
            return D9t(i, `
` + t.normalizeIndentation(l), n);
        }
        const r = Ign(t.autoIndent, e, i, t.languageConfigurationService);
        if (r) {
            if (r.indentAction === H3.None) return D9t(i, `
` + t.normalizeIndentation(r.indentation + r.appendText), n);
            if (r.indentAction === H3.Indent) return D9t(i, `
` + t.normalizeIndentation(r.indentation + r.appendText), n);
            if (r.indentAction === H3.IndentOutdent) {
                const a = t.normalizeIndentation(r.indentation), l = t.normalizeIndentation(r.indentation + r.appendText), c = `
` + l + `
` + a;
                return n ? new Oii(i, c, !0) : new Fii(i, c, -1, l.length - a.length, !0);
            } else if (r.indentAction === H3.Outdent) {
                const a = Jii(t, r.indentation);
                return D9t(i, `
` + t.normalizeIndentation(a + r.appendText), n);
            }
        }
        const s = e.getLineContent(i.startLineNumber), o = EI(s).substring(0, i.startColumn - 1);
        if (t.autoIndent >= 4) {
            const a = UAy(t.autoIndent, e, i, {
                unshiftIndent: (l)=>Jii(t, l),
                shiftIndent: (l)=>Swr(t, l),
                normalizeIndentation: (l)=>t.normalizeIndentation(l)
            }, t.languageConfigurationService);
            if (a) {
                let l = t.visibleColumnFromColumn(e, i.getEndPosition());
                const c = i.endColumn, u = e.getLineContent(i.endLineNumber), d = sY(u);
                if (d >= 0 ? i = i.setEndPosition(i.endLineNumber, Math.max(i.endColumn, d + 1)) : i = i.setEndPosition(i.endLineNumber, e.getLineMaxColumn(i.endLineNumber)), n) return new Oii(i, `
` + t.normalizeIndentation(a.afterEnter), !0);
                {
                    let h = 0;
                    return c <= d + 1 && (t.insertSpaces || (l = Math.ceil(l / t.indentSize)), h = Math.min(l + 1 - t.normalizeIndentation(a.afterEnter).length - 1, 0)), new Fii(i, `
` + t.normalizeIndentation(a.afterEnter), 0, h, !0);
                }
            }
        }
        return D9t(i, `
` + t.normalizeIndentation(o), n);
    }
    static lineInsertBefore(t, e, n) {
        if (e === null || n === null) return [];
        const i = [];
        for(let r = 0, s = n.length; r < s; r++){
            let o = n[r].positionLineNumber;
            if (o === 1) i[r] = new Oii(new qt(1, 1, 1, 1), `
`);
            else {
                o--;
                const a = e.getLineMaxColumn(o);
                i[r] = this._enter(t, e, !1, new qt(o, a, o, a));
            }
        }
        return i;
    }
    static lineInsertAfter(t, e, n) {
        if (e === null || n === null) return [];
        const i = [];
        for(let r = 0, s = n.length; r < s; r++){
            const o = n[r].positionLineNumber, a = e.getLineMaxColumn(o);
            i[r] = this._enter(t, e, !1, new qt(o, a, o, a));
        }
        return i;
    }
    static lineBreakInsert(t, e, n) {
        const i = [];
        for(let r = 0, s = n.length; r < s; r++)i[r] = this._enter(t, e, !0, n[r]);
        return i;
    }
}, i6d = class {
    static getEdits(t, e, n, i, r, s) {
        const o = this._distributePasteToCursors(t, n, i, r, s);
        return o ? (n = n.sort(qt.compareRangesUsingStarts), this._distributedPaste(t, e, n, o)) : this._simplePaste(t, e, n, i, r);
    }
    static _distributePasteToCursors(t, e, n, i, r) {
        if (i || e.length === 1) return null;
        if (r && r.length === e.length) return r;
        if (t.multiCursorPaste === "spread") {
            n.charCodeAt(n.length - 1) === ti.LineFeed && (n = n.substring(0, n.length - 1)), n.charCodeAt(n.length - 1) === ti.CarriageReturn && (n = n.substring(0, n.length - 1));
            const s = ww(n);
            if (s.length === e.length) return s;
        }
        return null;
    }
    static _distributedPaste(t, e, n, i) {
        const r = [];
        for(let s = 0, o = n.length; s < o; s++){
            const l = t.overtypeOnPaste && t.inputMode === "overtype" ? Xkr : mW;
            r[s] = new l(n[s], i[s]);
        }
        return new CQ(0, r, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
    static _simplePaste(t, e, n, i, r) {
        const s = [];
        for(let o = 0, a = n.length; o < a; o++){
            const l = n[o], c = l.getPosition();
            if (r && !l.isEmpty() && (r = !1), r && i.indexOf(`
`) !== i.length - 1 && (r = !1), r) {
                const u = new qt(c.lineNumber, 1, c.lineNumber, 1);
                s[o] = new Zkr(u, i, l, !0);
            } else {
                const d = t.overtypeOnPaste && t.inputMode === "overtype" ? Xkr : mW;
                s[o] = new d(l, i);
            }
        }
        return new CQ(0, s, {
            shouldPushStackElementBefore: !0,
            shouldPushStackElementAfter: !0
        });
    }
}, r6d = class {
    static getEdits(t, e, n, i, r, s, o, a) {
        const l = i.map((c)=>this._compositionType(n, c, r, s, o, a));
        return new CQ(4, l, {
            shouldPushStackElementBefore: ywr(t, 4),
            shouldPushStackElementAfter: !1
        });
    }
    static _compositionType(t, e, n, i, r, s) {
        if (!e.isEmpty()) return null;
        const o = e.getPosition(), a = Math.max(1, o.column - i), l = Math.min(t.getLineMaxColumn(o.lineNumber), o.column + r), c = new qt(o.lineNumber, a, o.lineNumber, l);
        return new Fii(c, n, 0, s);
    }
}, s6d = class {
    static getEdits(t, e, n) {
        const i = [];
        for(let s = 0, o = e.length; s < o; s++)i[s] = new mW(e[s], n);
        const r = vUo(n, t);
        return new CQ(r, i, {
            shouldPushStackElementBefore: ywr(t, r),
            shouldPushStackElementAfter: !1
        });
    }
}, o6d = class {
    static getCommands(t, e, n) {
        const i = [];
        for(let r = 0, s = n.length; r < s; r++){
            const o = n[r];
            if (o.isEmpty()) {
                const a = e.getLineContent(o.startLineNumber);
                if (/^\s*$/.test(a) && e.tokenization.isCheapToTokenize(o.startLineNumber)) {
                    let l = this._goodIndentForLine(t, e, o.startLineNumber);
                    l = l || "	";
                    const c = t.normalizeIndentation(l);
                    if (!a.startsWith(c)) {
                        i[r] = new mW(new qt(o.startLineNumber, 1, o.startLineNumber, a.length + 1), c, !0);
                        continue;
                    }
                }
                i[r] = this._replaceJumpToNextIndent(t, e, o, !0);
            } else {
                if (o.startLineNumber === o.endLineNumber) {
                    const a = e.getLineMaxColumn(o.startLineNumber);
                    if (o.startColumn !== 1 || o.endColumn !== a) {
                        i[r] = this._replaceJumpToNextIndent(t, e, o, !1);
                        continue;
                    }
                }
                i[r] = new loe(o, {
                    isUnshift: !1,
                    tabSize: t.tabSize,
                    indentSize: t.indentSize,
                    insertSpaces: t.insertSpaces,
                    useTabStops: t.useTabStops,
                    autoIndent: t.autoIndent
                }, t.languageConfigurationService);
            }
        }
        return i;
    }
    static _goodIndentForLine(t, e, n) {
        let i = null, r = "";
        const s = Zii(t.autoIndent, e, n, !1, t.languageConfigurationService);
        if (s) i = s.action, r = s.indentation;
        else if (n > 1) {
            let o;
            for(o = n - 1; o >= 1; o--){
                const c = e.getLineContent(o);
                if (Jxe(c) >= 0) break;
            }
            if (o < 1) return null;
            const a = e.getLineMaxColumn(o), l = Ign(t.autoIndent, e, new qt(o, a, o, a), t.languageConfigurationService);
            l && (r = l.indentation + l.appendText);
        }
        return i && (i === H3.Indent && (r = Swr(t, r)), i === H3.Outdent && (r = Jii(t, r)), r = t.normalizeIndentation(r)), r || null;
    }
    static _replaceJumpToNextIndent(t, e, n, i) {
        let r = "";
        const s = n.getStartPosition();
        if (t.insertSpaces) {
            const o = t.visibleColumnFromColumn(e, s), a = t.indentSize, l = a - o % a;
            for(let c = 0; c < l; c++)r += " ";
        } else r = "	";
        return new mW(n, r, i);
    }
}, wwr = class extends Fii {
    constructor(t, e, n, i, r, s){
        super(t, e, n, i), this._openCharacter = r, this._closeCharacter = s, this.closeCharacterRange = null, this.enclosingRange = null;
    }
    _computeCursorStateWithRange(t, e, n) {
        return this.closeCharacterRange = new qt(e.startLineNumber, e.endColumn - this._closeCharacter.length, e.endLineNumber, e.endColumn), this.enclosingRange = new qt(e.startLineNumber, e.endColumn - this._openCharacter.length - this._closeCharacter.length, e.endLineNumber, e.endColumn), super.computeCursorState(t, n);
    }
}, a6d = class extends wwr {
    constructor(t, e, n, i){
        const r = (n ? e : "") + i, s = 0, o = -i.length;
        super(t, r, s, o, e, i);
    }
    computeCursorState(t, e) {
        const i = e.getInverseEditOperations()[0].range;
        return this._computeCursorStateWithRange(t, i, e);
    }
}, l6d = class extends wwr {
    constructor(t, e, n, i){
        const r = n + i, s = 0, o = n.length;
        super(e, r, s, o, n, i), this._autoIndentationEdit = t, this._autoClosingEdit = {
            range: e,
            text: r
        };
    }
    getEditOperations(t, e) {
        e.addTrackedEditOperation(this._autoIndentationEdit.range, this._autoIndentationEdit.text), e.addTrackedEditOperation(this._autoClosingEdit.range, this._autoClosingEdit.text);
    }
    computeCursorState(t, e) {
        const n = e.getInverseEditOperations();
        if (n.length !== 2) throw new Error("There should be two inverse edit operations!");
        const i = n[0].range, r = n[1].range, s = i.plusRange(r);
        return this._computeCursorStateWithRange(t, s, e);
    }
};

}
