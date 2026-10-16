import { Hie, Ps, R7, Zu, si } from "./HVr.js";
import { FT } from "./arraysFind.js";
import { _D, nre } from "./cursorColumns.js";
import { Lvi } from "./qIc.js";
import { dt, qi } from "./range.js";
import { NQr, fOt, kpt, xze } from "./textModelGuides.js";
import { NFc, PQr } from "./textModelPart.js";
import { x } from "./tslib.es6.js";
import { LQr } from "./utils_12.js";
var OFc, OQr;
export { OFc, OQr };
var __wakaru_FFc_initialized = false;
export function FFc() {
if (__wakaru_FFc_initialized) return;
__wakaru_FFc_initialized = true;
"use strict";
x(), FT(), Ps(), nre(), qi(), NFc(), LQr(), NQr(), si(), OFc = class extends PQr {
    constructor(e, t){
        super(), this.textModel = e, this.languageConfigurationService = t;
    }
    getLanguageConfiguration(e) {
        return this.languageConfigurationService.getLanguageConfiguration(e);
    }
    _computeIndentLevel(e) {
        return Lvi(this.textModel.getLineContent(e + 1), this.textModel.getOptions().tabSize);
    }
    getActiveIndentGuide(e, t, n) {
        this.assertNotDisposed();
        const i = this.textModel.getLineCount();
        if (e < 1 || e > i) throw new Zu("Illegal value for lineNumber");
        const r = this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules, s = !!(r && r.offSide);
        let o = -2, a = -1, c = -2, l = -1;
        const u = (D)=>{
            if (o !== -1 && (o === -2 || o > D - 1)) {
                o = -1, a = -1;
                for(let P = D - 2; P >= 0; P--){
                    const N = this._computeIndentLevel(P);
                    if (N >= 0) {
                        o = P, a = N;
                        break;
                    }
                }
            }
            if (c === -2) {
                c = -1, l = -1;
                for(let P = D; P < i; P++){
                    const N = this._computeIndentLevel(P);
                    if (N >= 0) {
                        c = P, l = N;
                        break;
                    }
                }
            }
        };
        let h = -2, p = -1, g = -2, f = -1;
        const v = (D)=>{
            if (h === -2) {
                h = -1, p = -1;
                for(let P = D - 2; P >= 0; P--){
                    const N = this._computeIndentLevel(P);
                    if (N >= 0) {
                        h = P, p = N;
                        break;
                    }
                }
            }
            if (g !== -1 && (g === -2 || g < D - 1)) {
                g = -1, f = -1;
                for(let P = D; P < i; P++){
                    const N = this._computeIndentLevel(P);
                    if (N >= 0) {
                        g = P, f = N;
                        break;
                    }
                }
            }
        };
        let b = 0, y = !0, T = 0, E = !0, A = 0, R = 0;
        for(let D = 0; y || E; D++){
            const P = e - D, N = e + D;
            D > 1 && (P < 1 || P < t) && (y = !1), D > 1 && (N > i || N > n) && (E = !1), D > 5e4 && (y = !1, E = !1);
            let O = -1;
            if (y && P >= 1) {
                const H = this._computeIndentLevel(P - 1);
                H >= 0 ? (c = P - 1, l = H, O = Math.ceil(H / this.textModel.getOptions().indentSize)) : (u(P), O = this._getIndentLevelForWhitespaceLine(s, a, l));
            }
            let F = -1;
            if (E && N <= i) {
                const H = this._computeIndentLevel(N - 1);
                H >= 0 ? (h = N - 1, p = H, F = Math.ceil(H / this.textModel.getOptions().indentSize)) : (v(N), F = this._getIndentLevelForWhitespaceLine(s, p, f));
            }
            if (D === 0) {
                R = O;
                continue;
            }
            if (D === 1) {
                if (N <= i && F >= 0 && R + 1 === F) {
                    y = !1, b = N, T = N, A = F;
                    continue;
                }
                if (P >= 1 && O >= 0 && O - 1 === R) {
                    E = !1, b = P, T = P, A = O;
                    continue;
                }
                if (b = e, T = e, A = R, A === 0) return {
                    startLineNumber: b,
                    endLineNumber: T,
                    indent: A
                };
            }
            y && (O >= A ? b = P : y = !1), E && (F >= A ? T = N : E = !1);
        }
        return {
            startLineNumber: b,
            endLineNumber: T,
            indent: A
        };
    }
    getLinesBracketGuides(e, t, n, i) {
        const r = [];
        for(let u = e; u <= t; u++)r.push([]);
        const s = !0, o = this.textModel.bracketPairs.getBracketPairsInRangeWithMinIndentation(new dt(e, 1, t, this.textModel.getLineMaxColumn(t))).toArray();
        let a;
        if (n && o.length > 0) {
            const u = (e <= n.lineNumber && n.lineNumber <= t ? o : this.textModel.bracketPairs.getBracketPairsInRange(dt.fromPositions(n)).toArray()).filter((h)=>dt.strictContainsPosition(h.range, n));
            a = Hie(u, (h)=>s || h.range.startLineNumber !== h.range.endLineNumber)?.range;
        }
        const c = this.textModel.getOptions().bracketPairColorizationOptions.independentColorPoolPerBracketType, l = new OQr;
        for (const u of o){
            if (!u.closingBracketRange) continue;
            const h = a && u.range.equalsRange(a);
            if (!h && !i.includeInactive) continue;
            const p = l.getInlineClassName(u.nestingLevel, u.nestingLevelOfEqualBracketType, c) + (i.highlightActive && h ? " " + l.activeClassName : ""), g = u.openingBracketRange.getStartPosition(), f = u.closingBracketRange.getStartPosition(), v = i.horizontalGuides === kpt.Enabled || i.horizontalGuides === kpt.EnabledForActive && h;
            if (u.range.startLineNumber === u.range.endLineNumber) {
                s && v && r[u.range.startLineNumber - e].push(new xze(-1, u.openingBracketRange.getEndPosition().column, p, new fOt(!1, f.column), -1, -1));
                continue;
            }
            const b = this.getVisibleColumnFromPosition(f), y = this.getVisibleColumnFromPosition(u.openingBracketRange.getStartPosition()), T = Math.min(y, b, u.minVisibleColumnIndentation + 1);
            let E = !1;
            R7(this.textModel.getLineContent(u.closingBracketRange.startLineNumber)) < u.closingBracketRange.startColumn - 1 && (E = !0);
            const D = Math.max(g.lineNumber, e), P = Math.min(f.lineNumber, t), N = E ? 1 : 0;
            for(let O = D; O < P + N; O++)r[O - e].push(new xze(T, -1, p, null, O === g.lineNumber ? g.column : -1, O === f.lineNumber ? f.column : -1));
            v && (g.lineNumber >= e && y > T && r[g.lineNumber - e].push(new xze(T, -1, p, new fOt(!1, g.column), -1, -1)), f.lineNumber <= t && b > T && r[f.lineNumber - e].push(new xze(T, -1, p, new fOt(!E, f.column), -1, -1)));
        }
        for (const u of r)u.sort((h, p)=>h.visibleColumn - p.visibleColumn);
        return r;
    }
    getVisibleColumnFromPosition(e) {
        return _D.visibleColumnFromColumn(this.textModel.getLineContent(e.lineNumber), e.column, this.textModel.getOptions().tabSize) + 1;
    }
    getLinesIndentGuides(e, t) {
        this.assertNotDisposed();
        const n = this.textModel.getLineCount();
        if (e < 1 || e > n) throw new Error("Illegal value for startLineNumber");
        if (t < 1 || t > n) throw new Error("Illegal value for endLineNumber");
        const i = this.textModel.getOptions(), r = this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules, s = !!(r && r.offSide), o = new Array(t - e + 1);
        let a = -2, c = -1, l = -2, u = -1;
        for(let h = e; h <= t; h++){
            const p = h - e, g = this._computeIndentLevel(h - 1);
            if (g >= 0) {
                a = h - 1, c = g, o[p] = Math.ceil(g / i.indentSize);
                continue;
            }
            if (a === -2) {
                a = -1, c = -1;
                for(let f = h - 2; f >= 0; f--){
                    const v = this._computeIndentLevel(f);
                    if (v >= 0) {
                        a = f, c = v;
                        break;
                    }
                }
            }
            if (l !== -1 && (l === -2 || l < h - 1)) {
                l = -1, u = -1;
                for(let f = h; f < n; f++){
                    const v = this._computeIndentLevel(f);
                    if (v >= 0) {
                        l = f, u = v;
                        break;
                    }
                }
            }
            o[p] = this._getIndentLevelForWhitespaceLine(s, c, u);
        }
        return o;
    }
    _getIndentLevelForWhitespaceLine(e, t, n) {
        const i = this.textModel.getOptions();
        return t === -1 || n === -1 ? 0 : t < n ? 1 + Math.floor(t / i.indentSize) : t === n || e ? Math.ceil(n / i.indentSize) : 1 + Math.floor(n / i.indentSize);
    }
}, OQr = class {
    constructor(){
        this.activeClassName = "indent-active";
    }
    getInlineClassName(e, t, n) {
        return this.getInlineClassNameOfLevel(n ? t : e);
    }
    getInlineClassNameOfLevel(e) {
        return `bracket-indent-guide lvl-${e % 30}`;
    }
};

}
