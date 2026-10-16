import { P7, uA } from "./lineTokens.js";
import { Yn, ya } from "./position.js";
import { i5c } from "./qIc.js";
import { QBe, xpt } from "./textModelEvents.js";
import { x } from "./tslib.es6.js";
import { Cle, KBc, v_i } from "./viewModel.js";
var r5c, y_i, XJr, S_i, ZJr, k_i;
export { S_i, XJr, ZJr, k_i, r5c, y_i };
var __wakaru_tvg_initialized = false;
export function tvg() {
if (__wakaru_tvg_initialized) return;
__wakaru_tvg_initialized = true;
"use strict";
x(), P7(), ya(), xpt(), Cle(), r5c = class {
    constructor(e, t){
        this._projectionData = e, this._isVisible = t;
    }
    isVisible() {
        return this._isVisible;
    }
    setVisible(e) {
        return this._isVisible = e, this;
    }
    getProjectionData() {
        return this._projectionData;
    }
    getViewLineCount() {
        return this._isVisible ? this._projectionData.getOutputLineCount() : 0;
    }
    getViewLineContent(e, t, n) {
        this._assertVisible();
        const i = n > 0 ? this._projectionData.breakOffsets[n - 1] : 0, r = this._projectionData.breakOffsets[n];
        let s;
        if (this._projectionData.injectionOffsets !== null) {
            const o = this._projectionData.injectionOffsets.map((c, l)=>new QBe(0, 0, c + 1, this._projectionData.injectionOptions[l], this._projectionData.injectionOptions[l].order ?? 0));
            o.sort((c, l)=>c.column === l.column ? c.order - l.order : c.column - l.column), s = QBe.applyInjectedText(e.getLineContent(t), o).substring(i, r);
        } else s = e.getValueInRange({
            startLineNumber: t,
            startColumn: i + 1,
            endLineNumber: t,
            endColumn: r + 1
        });
        return n > 0 && (s = i5c(this._projectionData.wrappedTextIndentLength) + s), s;
    }
    getViewLineLength(e, t, n) {
        return this._assertVisible(), this._projectionData.getLineLength(n);
    }
    getViewLineMinColumn(e, t, n) {
        return this._assertVisible(), this._projectionData.getMinOutputOffset(n) + 1;
    }
    getViewLineMaxColumn(e, t, n) {
        return this._assertVisible(), this._projectionData.getMaxOutputOffset(n) + 1;
    }
    getViewLineData(e, t, n) {
        const i = new Array;
        return this.getViewLinesData(e, t, n, 1, 0, [
            !0
        ], i), i[0];
    }
    getViewLinesData(e, t, n, i, r, s, o) {
        this._assertVisible();
        const a = this._projectionData, c = a.injectionOffsets, l = a.injectionOptions;
        let u = null;
        if (c) {
            u = [];
            let p = 0, g = 0;
            for(let f = 0; f < a.getOutputLineCount(); f++){
                const v = new Array;
                u[f] = v;
                const b = f > 0 ? a.breakOffsets[f - 1] : 0, y = a.breakOffsets[f];
                for(; g < c.length;){
                    const T = l[g].content.length, E = c[g] + p, A = E + T;
                    if (E > y) break;
                    if (b < A) {
                        const R = l[g];
                        if (R.inlineClassName) {
                            const D = f > 0 ? a.wrappedTextIndentLength : 0, P = D + Math.max(E - b, 0), N = D + Math.min(A - b, y - b);
                            P !== N && v.push(new KBc(P, N, R.inlineClassName, R.inlineClassNameAffectsLetterSpacing));
                        }
                    }
                    if (A <= y) p += T, g++;
                    else break;
                }
            }
        }
        let h;
        if (c) {
            const p = c.map((f, v)=>v).sort((f, v)=>{
                const b = c[f], y = c[v];
                if (b === y) {
                    const T = l[f].order ?? 0, E = l[v].order ?? 0;
                    return T - E;
                }
                return b - y;
            }), g = [];
            for (const f of p){
                const v = c[f], b = l[f].tokens;
                b ? b.forEach((y, T)=>{
                    g.push({
                        offset: v,
                        text: y.substring(l[f].content),
                        tokenMetadata: T.metadata
                    });
                }) : g.push({
                    offset: v,
                    text: l[f].content,
                    tokenMetadata: uA.defaultTokenMetadata
                });
            }
            h = e.tokenization.getLineTokens(t).withInserted(g);
        } else h = e.tokenization.getLineTokens(t);
        for(let p = n; p < n + i; p++){
            const g = r + p - n;
            if (!s[g]) {
                o[g] = null;
                continue;
            }
            o[g] = this._getViewLineData(h, u ? u[p] : null, p);
        }
    }
    _getViewLineData(e, t, n) {
        this._assertVisible();
        const i = this._projectionData, r = n > 0 ? i.wrappedTextIndentLength : 0, s = n > 0 ? i.breakOffsets[n - 1] : 0, o = i.breakOffsets[n], a = e.sliceAndInflate(s, o, r);
        let c = a.getLineContent();
        n > 0 && (c = i5c(i.wrappedTextIndentLength) + c);
        const l = this._projectionData.getMinOutputOffset(n) + 1, u = c.length + 1, h = n + 1 < this.getViewLineCount(), p = n === 0 ? 0 : i.breakOffsetsVisibleColumn[n - 1];
        return new v_i(c, h, l, u, p, a, t);
    }
    getModelColumnOfViewPosition(e, t) {
        return this._assertVisible(), this._projectionData.translateToInputOffset(e, t - 1) + 1;
    }
    getViewPositionOfModelPosition(e, t, n = 2) {
        return this._assertVisible(), this._projectionData.translateToOutputPosition(t - 1, n).toPosition(e);
    }
    getViewLineNumberOfModelPosition(e, t) {
        this._assertVisible();
        const n = this._projectionData.translateToOutputPosition(t - 1);
        return e + n.outputLineIndex;
    }
    normalizePosition(e, t, n) {
        const i = t.lineNumber - e;
        return this._projectionData.normalizeOutputPosition(e, t.column - 1, n).toPosition(i);
    }
    getInjectedTextAt(e, t) {
        return this._projectionData.getInjectedText(e, t - 1);
    }
    _assertVisible() {
        if (!this._isVisible) throw new Error("Not supported");
    }
}, y_i = class {
    constructor(){}
    isVisible() {
        return !0;
    }
    setVisible(t) {
        return t ? this : ZJr.INSTANCE;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 1;
    }
    getViewLineContent(t, n, i) {
        return t.getLineContent(n);
    }
    getViewLineLength(t, n, i) {
        return t.getLineLength(n);
    }
    getViewLineMinColumn(t, n, i) {
        return t.getLineMinColumn(n);
    }
    getViewLineMaxColumn(t, n, i) {
        return t.getLineMaxColumn(n);
    }
    getViewLineData(t, n, i) {
        const r = t.tokenization.getLineTokens(n), s = r.getLineContent();
        return new v_i(s, !1, 1, s.length + 1, 0, r.inflate(), null);
    }
    getViewLinesData(t, n, i, r, s, o, a) {
        if (!o[s]) {
            a[s] = null;
            return;
        }
        a[s] = this.getViewLineData(t, n, 0);
    }
    getModelColumnOfViewPosition(t, n) {
        return n;
    }
    getViewPositionOfModelPosition(t, n) {
        return new Yn(t, n);
    }
    getViewLineNumberOfModelPosition(t, n) {
        return t;
    }
    normalizePosition(t, n, i) {
        return n;
    }
    getInjectedTextAt(t, n) {
        return null;
    }
}, y_i.INSTANCE = new y_i, XJr = y_i, S_i = class {
    constructor(){}
    isVisible() {
        return !1;
    }
    setVisible(t) {
        return t ? XJr.INSTANCE : this;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 0;
    }
    getViewLineContent(t, n, i) {
        throw new Error("Not supported");
    }
    getViewLineLength(t, n, i) {
        throw new Error("Not supported");
    }
    getViewLineMinColumn(t, n, i) {
        throw new Error("Not supported");
    }
    getViewLineMaxColumn(t, n, i) {
        throw new Error("Not supported");
    }
    getViewLineData(t, n, i) {
        throw new Error("Not supported");
    }
    getViewLinesData(t, n, i, r, s, o, a) {
        throw new Error("Not supported");
    }
    getModelColumnOfViewPosition(t, n) {
        throw new Error("Not supported");
    }
    getViewPositionOfModelPosition(t, n) {
        throw new Error("Not supported");
    }
    getViewLineNumberOfModelPosition(t, n) {
        throw new Error("Not supported");
    }
    normalizePosition(t, n, i) {
        throw new Error("Not supported");
    }
    getInjectedTextAt(t, n) {
        throw new Error("Not supported");
    }
}, S_i.INSTANCE = new S_i, ZJr = S_i, k_i = [
    ""
];

}
