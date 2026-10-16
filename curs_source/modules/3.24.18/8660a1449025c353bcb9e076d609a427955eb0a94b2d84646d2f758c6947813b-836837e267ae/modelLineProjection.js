import { PD, SY } from "./lineTokens.js";
import { er, jc } from "./position.js";
import { iBt, ztt } from "./textModelEvents.js";
import { E } from "./tslib.es6.js";
import { $0r, cUd, zAe } from "./viewModel.js";
import { _Ud } from "./ze.js";
var bUd, G0r, Z$o, q0r, Q$o, z0r;
export { G0r, Q$o, Z$o, bUd, q0r, z0r };
var __wakaru_VPy_initialized = false;
export function VPy() {
if (__wakaru_VPy_initialized) return;
__wakaru_VPy_initialized = true;
"use strict";
E(), SY(), jc(), iBt(), zAe(), bUd = class {
    constructor(t, e){
        this._projectionData = t, this._isVisible = e;
    }
    isVisible() {
        return this._isVisible;
    }
    setVisible(t) {
        return this._isVisible = t, this;
    }
    getProjectionData() {
        return this._projectionData;
    }
    getViewLineCount() {
        return this._isVisible ? this._projectionData.getOutputLineCount() : 0;
    }
    getViewLineContent(t, e, n) {
        this._assertVisible();
        const i = n > 0 ? this._projectionData.breakOffsets[n - 1] : 0, r = this._projectionData.breakOffsets[n];
        let s;
        if (this._projectionData.injectionOffsets !== null) {
            const o = this._projectionData.injectionOffsets.map((l, c)=>new ztt(0, 0, l + 1, this._projectionData.injectionOptions[c], this._projectionData.injectionOptions[c].order ?? 0));
            o.sort((l, c)=>l.column === c.column ? l.order - c.order : l.column - c.column), s = ztt.applyInjectedText(t.getLineContent(e), o).substring(i, r);
        } else s = t.getValueInRange({
            startLineNumber: e,
            startColumn: i + 1,
            endLineNumber: e,
            endColumn: r + 1
        });
        return n > 0 && (s = _Ud(this._projectionData.wrappedTextIndentLength) + s), s;
    }
    getViewLineLength(t, e, n) {
        return this._assertVisible(), this._projectionData.getLineLength(n);
    }
    getViewLineMinColumn(t, e, n) {
        return this._assertVisible(), this._projectionData.getMinOutputOffset(n) + 1;
    }
    getViewLineMaxColumn(t, e, n) {
        return this._assertVisible(), this._projectionData.getMaxOutputOffset(n) + 1;
    }
    getViewLineData(t, e, n) {
        const i = new Array;
        return this.getViewLinesData(t, e, n, 1, 0, [
            !0
        ], i), i[0];
    }
    getViewLinesData(t, e, n, i, r, s, o) {
        this._assertVisible();
        const a = this._projectionData, l = a.injectionOffsets, c = a.injectionOptions;
        let u = null;
        if (l) {
            u = [];
            let h = 0, p = 0;
            for(let g = 0; g < a.getOutputLineCount(); g++){
                const f = new Array;
                u[g] = f;
                const _ = g > 0 ? a.breakOffsets[g - 1] : 0, b = a.breakOffsets[g];
                for(; p < l.length;){
                    const y = c[p].content.length, S = l[p] + h, k = S + y;
                    if (S > b) break;
                    if (_ < k) {
                        const C = c[p];
                        if (C.inlineClassName) {
                            const T = g > 0 ? a.wrappedTextIndentLength : 0, I = T + Math.max(S - _, 0), A = T + Math.min(k - _, b - _);
                            I !== A && f.push(new cUd(I, A, C.inlineClassName, C.inlineClassNameAffectsLetterSpacing));
                        }
                    }
                    if (k <= b) h += y, p++;
                    else break;
                }
            }
        }
        let d;
        if (l) {
            const h = l.map((g, f)=>f).sort((g, f)=>{
                const _ = l[g], b = l[f];
                if (_ === b) {
                    const y = c[g].order ?? 0, S = c[f].order ?? 0;
                    return y - S;
                }
                return _ - b;
            }), p = [];
            for (const g of h){
                const f = l[g], _ = c[g].tokens;
                _ ? _.forEach((b, y)=>{
                    p.push({
                        offset: f,
                        text: b.substring(c[g].content),
                        tokenMetadata: y.metadata
                    });
                }) : p.push({
                    offset: f,
                    text: c[g].content,
                    tokenMetadata: PD.defaultTokenMetadata
                });
            }
            d = t.tokenization.getLineTokens(e).withInserted(p);
        } else d = t.tokenization.getLineTokens(e);
        for(let h = n; h < n + i; h++){
            const p = r + h - n;
            if (!s[p]) {
                o[p] = null;
                continue;
            }
            o[p] = this._getViewLineData(d, u ? u[h] : null, h);
        }
    }
    _getViewLineData(t, e, n) {
        this._assertVisible();
        const i = this._projectionData, r = n > 0 ? i.wrappedTextIndentLength : 0, s = n > 0 ? i.breakOffsets[n - 1] : 0, o = i.breakOffsets[n], a = t.sliceAndInflate(s, o, r);
        let l = a.getLineContent();
        n > 0 && (l = _Ud(i.wrappedTextIndentLength) + l);
        const c = this._projectionData.getMinOutputOffset(n) + 1, u = l.length + 1, d = n + 1 < this.getViewLineCount(), h = n === 0 ? 0 : i.breakOffsetsVisibleColumn[n - 1];
        return new $0r(l, d, c, u, h, a, e);
    }
    getModelColumnOfViewPosition(t, e) {
        return this._assertVisible(), this._projectionData.translateToInputOffset(t, e - 1) + 1;
    }
    getViewPositionOfModelPosition(t, e, n = 2) {
        return this._assertVisible(), this._projectionData.translateToOutputPosition(e - 1, n).toPosition(t);
    }
    getViewLineNumberOfModelPosition(t, e) {
        this._assertVisible();
        const n = this._projectionData.translateToOutputPosition(e - 1);
        return t + n.outputLineIndex;
    }
    normalizePosition(t, e, n) {
        const i = e.lineNumber - t;
        return this._projectionData.normalizeOutputPosition(t, e.column - 1, n).toPosition(i);
    }
    getInjectedTextAt(t, e) {
        return this._projectionData.getInjectedText(t, e - 1);
    }
    _assertVisible() {
        if (!this._isVisible) throw new Error("Not supported");
    }
}, G0r = class {
    constructor(){}
    isVisible() {
        return !0;
    }
    setVisible(e) {
        return e ? this : Q$o.INSTANCE;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 1;
    }
    getViewLineContent(e, n, i) {
        return e.getLineContent(n);
    }
    getViewLineLength(e, n, i) {
        return e.getLineLength(n);
    }
    getViewLineMinColumn(e, n, i) {
        return e.getLineMinColumn(n);
    }
    getViewLineMaxColumn(e, n, i) {
        return e.getLineMaxColumn(n);
    }
    getViewLineData(e, n, i) {
        const r = e.tokenization.getLineTokens(n), s = r.getLineContent();
        return new $0r(s, !1, 1, s.length + 1, 0, r.inflate(), null);
    }
    getViewLinesData(e, n, i, r, s, o, a) {
        if (!o[s]) {
            a[s] = null;
            return;
        }
        a[s] = this.getViewLineData(e, n, 0);
    }
    getModelColumnOfViewPosition(e, n) {
        return n;
    }
    getViewPositionOfModelPosition(e, n) {
        return new er(e, n);
    }
    getViewLineNumberOfModelPosition(e, n) {
        return e;
    }
    normalizePosition(e, n, i) {
        return n;
    }
    getInjectedTextAt(e, n) {
        return null;
    }
}, G0r.INSTANCE = new G0r, Z$o = G0r, q0r = class {
    constructor(){}
    isVisible() {
        return !1;
    }
    setVisible(e) {
        return e ? Z$o.INSTANCE : this;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 0;
    }
    getViewLineContent(e, n, i) {
        throw new Error("Not supported");
    }
    getViewLineLength(e, n, i) {
        throw new Error("Not supported");
    }
    getViewLineMinColumn(e, n, i) {
        throw new Error("Not supported");
    }
    getViewLineMaxColumn(e, n, i) {
        throw new Error("Not supported");
    }
    getViewLineData(e, n, i) {
        throw new Error("Not supported");
    }
    getViewLinesData(e, n, i, r, s, o, a) {
        throw new Error("Not supported");
    }
    getModelColumnOfViewPosition(e, n) {
        throw new Error("Not supported");
    }
    getViewPositionOfModelPosition(e, n) {
        throw new Error("Not supported");
    }
    getViewLineNumberOfModelPosition(e, n) {
        throw new Error("Not supported");
    }
    normalizePosition(e, n, i) {
        throw new Error("Not supported");
    }
    getInjectedTextAt(e, n) {
        throw new Error("Not supported");
    }
}, q0r.INSTANCE = new q0r, Q$o = q0r, z0r = [
    ""
];

}
