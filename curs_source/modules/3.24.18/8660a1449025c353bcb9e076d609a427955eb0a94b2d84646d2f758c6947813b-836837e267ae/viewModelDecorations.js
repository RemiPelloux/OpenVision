import { s2 } from "./editorOptions.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { G$o, pHe, zAe } from "./viewModel.js";
import { V$o, Zwr } from "./ze.js";
var fUd;
export { fUd };
var __wakaru_vUd_initialized = false;
export function vUd() {
if (__wakaru_vUd_initialized) return;
__wakaru_vUd_initialized = true;
"use strict";
E(), jc(), Qs(), zAe(), s2(), fUd = class {
    constructor(t, e, n, i, r){
        this.editorId = t, this.model = e, this.configuration = n, this._linesCollection = i, this._coordinatesConverter = r, this._decorationsCache = Object.create(null), this._cachedModelDecorationsResolver = null, this._cachedModelDecorationsResolverViewRange = null;
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
    _getOrCreateViewModelDecoration(t) {
        const e = t.id;
        let n = this._decorationsCache[e];
        if (!n) {
            const i = t.range, r = t.options;
            let s;
            if (r.isWholeLine) {
                const o = this._coordinatesConverter.convertModelPositionToViewPosition(new er(i.startLineNumber, 1), 0, !1, !0), a = this._coordinatesConverter.convertModelPositionToViewPosition(new er(i.endLineNumber, this.model.getLineMaxColumn(i.endLineNumber)), 1);
                s = new qt(o.lineNumber, o.column, a.lineNumber, a.column);
            } else s = this._coordinatesConverter.convertModelRangeToViewRange(i, 1);
            n = new G$o(s, r), this._decorationsCache[e] = n;
        }
        return n;
    }
    getMinimapDecorationsInRange(t) {
        return this._getDecorationsInRange(t, !0, !1).decorations;
    }
    getDecorationsViewportData(t) {
        let e = this._cachedModelDecorationsResolver !== null;
        return e = e && t.equalsRange(this._cachedModelDecorationsResolverViewRange), e || (this._cachedModelDecorationsResolver = this._getDecorationsInRange(t, !1, !1), this._cachedModelDecorationsResolverViewRange = t), this._cachedModelDecorationsResolver;
    }
    getInlineDecorationsOnLine(t, e = !1, n = !1) {
        const i = new qt(t, this._linesCollection.getViewLineMinColumn(t), t, this._linesCollection.getViewLineMaxColumn(t));
        return this._getDecorationsInRange(i, e, n).inlineDecorations[0];
    }
    _getDecorationsInRange(t, e, n) {
        const i = this._linesCollection.getDecorationsInRange(t, this.editorId, Zwr(this.configuration.options), e, n), r = t.startLineNumber, s = t.endLineNumber, o = [];
        let a = 0;
        const l = [];
        for(let c = r; c <= s; c++)l[c - r] = [];
        for(let c = 0, u = i.length; c < u; c++){
            const d = i[c], h = d.options;
            if (!V$o(this.model, d)) continue;
            const p = this._getOrCreateViewModelDecoration(d), g = p.range;
            if (o[a++] = p, h.inlineClassName) {
                const f = new pHe(g, h.inlineClassName, h.inlineClassNameAffectsLetterSpacing ? 3 : 0), _ = Math.max(r, g.startLineNumber), b = Math.min(s, g.endLineNumber);
                for(let y = _; y <= b; y++)l[y - r].push(f);
            }
            if (h.beforeContentClassName && r <= g.startLineNumber && g.startLineNumber <= s) {
                const f = new pHe(new qt(g.startLineNumber, g.startColumn, g.startLineNumber, g.startColumn), h.beforeContentClassName, 1);
                l[g.startLineNumber - r].push(f);
            }
            if (h.afterContentClassName && r <= g.endLineNumber && g.endLineNumber <= s) {
                const f = new pHe(new qt(g.endLineNumber, g.endColumn, g.endLineNumber, g.endColumn), h.afterContentClassName, 2);
                l[g.endLineNumber - r].push(f);
            }
        }
        return {
            decorations: o,
            inlineDecorations: l
        };
    }
};

}
