import { m1 } from "./editorOptions.js";
import { Yn, ya } from "./position.js";
import { hvi, qJr } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
import { Cle, Cwe, GJr } from "./viewModel.js";
var t5c;
export { t5c };
var __wakaru_n5c_initialized = false;
export function n5c() {
if (__wakaru_n5c_initialized) return;
__wakaru_n5c_initialized = true;
"use strict";
x(), ya(), qi(), Cle(), m1(), t5c = class {
    constructor(e, t, n, i, r){
        this.editorId = e, this.model = t, this.configuration = n, this._linesCollection = i, this._coordinatesConverter = r, this._decorationsCache = Object.create(null), this._cachedModelDecorationsResolver = null, this._cachedModelDecorationsResolverViewRange = null;
    }
    _clearCachedModelDecorationsResolver() {
        this._cachedModelDecorationsResolver = null, this._cachedModelDecorationsResolverViewRange = null;
    }
    dispose() {
        this._decorationsCache = Object.create(null), this._clearCachedModelDecorationsResolver();
    }
    reset() {
        this._decorationsCache = Object.create(null), this._clearCachedModelDecorationsResolver();
    }
    onModelDecorationsChanged() {
        this._decorationsCache = Object.create(null), this._clearCachedModelDecorationsResolver();
    }
    onLineMappingChanged() {
        this._decorationsCache = Object.create(null), this._clearCachedModelDecorationsResolver();
    }
    _getOrCreateViewModelDecoration(e) {
        const t = e.id;
        let n = this._decorationsCache[t];
        if (!n) {
            const i = e.range, r = e.options;
            let s;
            if (r.isWholeLine) {
                const o = this._coordinatesConverter.convertModelPositionToViewPosition(new Yn(i.startLineNumber, 1), 0, !1, !0), a = this._coordinatesConverter.convertModelPositionToViewPosition(new Yn(i.endLineNumber, this.model.getLineMaxColumn(i.endLineNumber)), 1);
                s = new dt(o.lineNumber, o.column, a.lineNumber, a.column);
            } else s = this._coordinatesConverter.convertModelRangeToViewRange(i, 1);
            n = new GJr(s, r), this._decorationsCache[t] = n;
        }
        return n;
    }
    getMinimapDecorationsInRange(e) {
        return this._getDecorationsInRange(e, !0, !1).decorations;
    }
    getDecorationsViewportData(e) {
        let t = this._cachedModelDecorationsResolver !== null;
        return t = t && e.equalsRange(this._cachedModelDecorationsResolverViewRange), t || (this._cachedModelDecorationsResolver = this._getDecorationsInRange(e, !1, !1), this._cachedModelDecorationsResolverViewRange = e), this._cachedModelDecorationsResolver;
    }
    getInlineDecorationsOnLine(e, t = !1, n = !1) {
        const i = new dt(e, this._linesCollection.getViewLineMinColumn(e), e, this._linesCollection.getViewLineMaxColumn(e));
        return this._getDecorationsInRange(i, t, n).inlineDecorations[0];
    }
    _getDecorationsInRange(e, t, n) {
        const i = this._linesCollection.getDecorationsInRange(e, this.editorId, hvi(this.configuration.options), t, n), r = e.startLineNumber, s = e.endLineNumber, o = [];
        let a = 0;
        const c = [];
        for(let l = r; l <= s; l++)c[l - r] = [];
        for(let l = 0, u = i.length; l < u; l++){
            const h = i[l], p = h.options;
            if (!qJr(this.model, h)) continue;
            const g = this._getOrCreateViewModelDecoration(h), f = g.range;
            if (o[a++] = g, p.inlineClassName) {
                const v = new Cwe(f, p.inlineClassName, p.inlineClassNameAffectsLetterSpacing ? 3 : 0), b = Math.max(r, f.startLineNumber), y = Math.min(s, f.endLineNumber);
                for(let T = b; T <= y; T++)c[T - r].push(v);
            }
            if (p.beforeContentClassName && r <= f.startLineNumber && f.startLineNumber <= s) {
                const v = new Cwe(new dt(f.startLineNumber, f.startColumn, f.startLineNumber, f.startColumn), p.beforeContentClassName, 1);
                c[f.startLineNumber - r].push(v);
            }
            if (p.afterContentClassName && r <= f.endLineNumber && f.endLineNumber <= s) {
                const v = new Cwe(new dt(f.endLineNumber, f.endColumn, f.endLineNumber, f.endColumn), p.afterContentClassName, 2);
                c[f.endLineNumber - r].push(v);
            }
        }
        return {
            decorations: o,
            inlineDecorations: c
        };
    }
};

}
