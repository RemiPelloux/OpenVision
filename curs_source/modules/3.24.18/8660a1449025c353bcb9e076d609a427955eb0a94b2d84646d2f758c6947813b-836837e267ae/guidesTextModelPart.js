import { Ei, Fa, Kxe, sY, xh } from "./Iwo.js";
import { p4 } from "./arraysFind.js";
import { sL, zve } from "./cursorColumns.js";
import { Qs, qt } from "./range.js";
import { J9t, rfn, ryt, zjo } from "./textModelGuides.js";
import { Gjo, u8d } from "./textModelPart.js";
import { E } from "./tslib.es6.js";
import { qjo } from "./utils_12.js";
import { b0r } from "./ze.js";
var d8d, Vjo;
export { Vjo, d8d };
var __wakaru_h8d_initialized = false;
export function h8d() {
if (__wakaru_h8d_initialized) return;
__wakaru_h8d_initialized = true;
"use strict";
E(), p4(), Fa(), zve(), Qs(), u8d(), qjo(), zjo(), Ei(), d8d = class extends Gjo {
    constructor(t, e){
        super(), this.textModel = t, this.languageConfigurationService = e;
    }
    getLanguageConfiguration(t) {
        return this.languageConfigurationService.getLanguageConfiguration(t);
    }
    _computeIndentLevel(t) {
        return b0r(this.textModel.getLineContent(t + 1), this.textModel.getOptions().tabSize);
    }
    getActiveIndentGuide(t, e, n) {
        this.assertNotDisposed();
        const i = this.textModel.getLineCount();
        if (t < 1 || t > i) throw new xh("Illegal value for lineNumber");
        const r = this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules, s = !!(r && r.offSide);
        let o = -2, a = -1, l = -2, c = -1;
        const u = (T)=>{
            if (o !== -1 && (o === -2 || o > T - 1)) {
                o = -1, a = -1;
                for(let I = T - 2; I >= 0; I--){
                    const A = this._computeIndentLevel(I);
                    if (A >= 0) {
                        o = I, a = A;
                        break;
                    }
                }
            }
            if (l === -2) {
                l = -1, c = -1;
                for(let I = T; I < i; I++){
                    const A = this._computeIndentLevel(I);
                    if (A >= 0) {
                        l = I, c = A;
                        break;
                    }
                }
            }
        };
        let d = -2, h = -1, p = -2, g = -1;
        const f = (T)=>{
            if (d === -2) {
                d = -1, h = -1;
                for(let I = T - 2; I >= 0; I--){
                    const A = this._computeIndentLevel(I);
                    if (A >= 0) {
                        d = I, h = A;
                        break;
                    }
                }
            }
            if (p !== -1 && (p === -2 || p < T - 1)) {
                p = -1, g = -1;
                for(let I = T; I < i; I++){
                    const A = this._computeIndentLevel(I);
                    if (A >= 0) {
                        p = I, g = A;
                        break;
                    }
                }
            }
        };
        let _ = 0, b = !0, y = 0, S = !0, k = 0, C = 0;
        for(let T = 0; b || S; T++){
            const I = t - T, A = t + T;
            T > 1 && (I < 1 || I < e) && (b = !1), T > 1 && (A > i || A > n) && (S = !1), T > 5e4 && (b = !1, S = !1);
            let P = -1;
            if (b && I >= 1) {
                const O = this._computeIndentLevel(I - 1);
                O >= 0 ? (l = I - 1, c = O, P = Math.ceil(O / this.textModel.getOptions().indentSize)) : (u(I), P = this._getIndentLevelForWhitespaceLine(s, a, c));
            }
            let M = -1;
            if (S && A <= i) {
                const O = this._computeIndentLevel(A - 1);
                O >= 0 ? (d = A - 1, h = O, M = Math.ceil(O / this.textModel.getOptions().indentSize)) : (f(A), M = this._getIndentLevelForWhitespaceLine(s, h, g));
            }
            if (T === 0) {
                C = P;
                continue;
            }
            if (T === 1) {
                if (A <= i && M >= 0 && C + 1 === M) {
                    b = !1, _ = A, y = A, k = M;
                    continue;
                }
                if (I >= 1 && P >= 0 && P - 1 === C) {
                    S = !1, _ = I, y = I, k = P;
                    continue;
                }
                if (_ = t, y = t, k = C, k === 0) return {
                    startLineNumber: _,
                    endLineNumber: y,
                    indent: k
                };
            }
            b && (P >= k ? _ = I : b = !1), S && (M >= k ? y = A : S = !1);
        }
        return {
            startLineNumber: _,
            endLineNumber: y,
            indent: k
        };
    }
    getLinesBracketGuides(t, e, n, i) {
        const r = [];
        for(let u = t; u <= e; u++)r.push([]);
        const s = !0, o = this.textModel.bracketPairs.getBracketPairsInRangeWithMinIndentation(new qt(t, 1, e, this.textModel.getLineMaxColumn(e))).toArray();
        let a;
        if (n && o.length > 0) {
            const u = (t <= n.lineNumber && n.lineNumber <= e ? o : this.textModel.bracketPairs.getBracketPairsInRange(qt.fromPositions(n)).toArray()).filter((d)=>qt.strictContainsPosition(d.range, n));
            a = Kxe(u, (d)=>s || d.range.startLineNumber !== d.range.endLineNumber)?.range;
        }
        const l = this.textModel.getOptions().bracketPairColorizationOptions.independentColorPoolPerBracketType, c = new Vjo;
        for (const u of o){
            if (!u.closingBracketRange) continue;
            const d = a && u.range.equalsRange(a);
            if (!d && !i.includeInactive) continue;
            const h = c.getInlineClassName(u.nestingLevel, u.nestingLevelOfEqualBracketType, l) + (i.highlightActive && d ? " " + c.activeClassName : ""), p = u.openingBracketRange.getStartPosition(), g = u.closingBracketRange.getStartPosition(), f = i.horizontalGuides === J9t.Enabled || i.horizontalGuides === J9t.EnabledForActive && d;
            if (u.range.startLineNumber === u.range.endLineNumber) {
                s && f && r[u.range.startLineNumber - t].push(new ryt(-1, u.openingBracketRange.getEndPosition().column, h, new rfn(!1, g.column), -1, -1));
                continue;
            }
            const _ = this.getVisibleColumnFromPosition(g), b = this.getVisibleColumnFromPosition(u.openingBracketRange.getStartPosition()), y = Math.min(b, _, u.minVisibleColumnIndentation + 1);
            let S = !1;
            sY(this.textModel.getLineContent(u.closingBracketRange.startLineNumber)) < u.closingBracketRange.startColumn - 1 && (S = !0);
            const T = Math.max(p.lineNumber, t), I = Math.min(g.lineNumber, e), A = S ? 1 : 0;
            for(let P = T; P < I + A; P++)r[P - t].push(new ryt(y, -1, h, null, P === p.lineNumber ? p.column : -1, P === g.lineNumber ? g.column : -1));
            f && (p.lineNumber >= t && b > y && r[p.lineNumber - t].push(new ryt(y, -1, h, new rfn(!1, p.column), -1, -1)), g.lineNumber <= e && _ > y && r[g.lineNumber - t].push(new ryt(y, -1, h, new rfn(!S, g.column), -1, -1)));
        }
        for (const u of r)u.sort((d, h)=>d.visibleColumn - h.visibleColumn);
        return r;
    }
    getVisibleColumnFromPosition(t) {
        return sL.visibleColumnFromColumn(this.textModel.getLineContent(t.lineNumber), t.column, this.textModel.getOptions().tabSize) + 1;
    }
    getLinesIndentGuides(t, e) {
        this.assertNotDisposed();
        const n = this.textModel.getLineCount();
        if (t < 1 || t > n) throw new Error("Illegal value for startLineNumber");
        if (e < 1 || e > n) throw new Error("Illegal value for endLineNumber");
        const i = this.textModel.getOptions(), r = this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules, s = !!(r && r.offSide), o = new Array(e - t + 1);
        let a = -2, l = -1, c = -2, u = -1;
        for(let d = t; d <= e; d++){
            const h = d - t, p = this._computeIndentLevel(d - 1);
            if (p >= 0) {
                a = d - 1, l = p, o[h] = Math.ceil(p / i.indentSize);
                continue;
            }
            if (a === -2) {
                a = -1, l = -1;
                for(let g = d - 2; g >= 0; g--){
                    const f = this._computeIndentLevel(g);
                    if (f >= 0) {
                        a = g, l = f;
                        break;
                    }
                }
            }
            if (c !== -1 && (c === -2 || c < d - 1)) {
                c = -1, u = -1;
                for(let g = d; g < n; g++){
                    const f = this._computeIndentLevel(g);
                    if (f >= 0) {
                        c = g, u = f;
                        break;
                    }
                }
            }
            o[h] = this._getIndentLevelForWhitespaceLine(s, l, u);
        }
        return o;
    }
    _getIndentLevelForWhitespaceLine(t, e, n) {
        const i = this.textModel.getOptions();
        return e === -1 || n === -1 ? 0 : e < n ? 1 + Math.floor(e / i.indentSize) : e === n || t ? Math.ceil(n / i.indentSize) : 1 + Math.floor(n / i.indentSize);
    }
}, Vjo = class {
    constructor(){
        this.activeClassName = "indent-active";
    }
    getInlineClassName(t, e, n) {
        return this.getInlineClassNameOfLevel(n ? e : t);
    }
    getInlineClassNameOfLevel(t) {
        return `bracket-indent-guide lvl-${t % 30}`;
    }
};

}
