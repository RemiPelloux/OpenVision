import { tc } from "./colorRegistry.js";
import { DBe } from "./editorColors.js";
import { G2t } from "./minimapColors.js";
import { Cb, xE } from "./model_2.js";
import { VS } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Mv, Vd } from "./textModel.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var cQe, n7t;
export { cQe, n7t };
var __wakaru_z$s_initialized = false;
export function z$s() {
if (__wakaru_z$s_initialized) return;
__wakaru_z$s_initialized = true;
"use strict";
x(), qi(), Cb(), Mv(), tc(), as(), cQe = class dxe {
    constructor(t){
        this._editor = t, this._decorations = [], this._overviewRulerApproximateDecorations = [], this._findScopeDecorationIds = [], this._rangeHighlightDecorationId = null, this._highlightedDecorationId = null, this._startPosition = this._editor.getPosition();
    }
    dispose() {
        this._editor.removeDecorations(this._allDecorations()), this._decorations = [], this._overviewRulerApproximateDecorations = [], this._findScopeDecorationIds = [], this._rangeHighlightDecorationId = null, this._highlightedDecorationId = null;
    }
    reset() {
        this._decorations = [], this._overviewRulerApproximateDecorations = [], this._findScopeDecorationIds = [], this._rangeHighlightDecorationId = null, this._highlightedDecorationId = null;
    }
    getCount() {
        return this._decorations.length;
    }
    getFindScope() {
        return this._findScopeDecorationIds[0] ? this._editor.getModel().getDecorationRange(this._findScopeDecorationIds[0]) : null;
    }
    getFindScopes() {
        if (this._findScopeDecorationIds.length) {
            const t = this._findScopeDecorationIds.map((n)=>this._editor.getModel().getDecorationRange(n)).filter((n)=>!!n);
            if (t.length) return t;
        }
        return null;
    }
    getStartPosition() {
        return this._startPosition;
    }
    setStartPosition(t) {
        this._startPosition = t, this.setCurrentFindMatch(null);
    }
    _getDecorationIndex(t) {
        const n = this._decorations.indexOf(t);
        return n >= 0 ? n + 1 : 1;
    }
    getDecorationRangeAt(t) {
        const n = t < this._decorations.length ? this._decorations[t] : null;
        return n ? this._editor.getModel().getDecorationRange(n) : null;
    }
    getCurrentMatchesPosition(t) {
        const n = this._editor.getModel().getDecorationsInRange(t);
        for (const i of n){
            const r = i.options;
            if (r === dxe._FIND_MATCH_DECORATION || r === dxe._CURRENT_FIND_MATCH_DECORATION) return this._getDecorationIndex(i.id);
        }
        return 0;
    }
    setCurrentFindMatch(t) {
        let n = null, i = 0;
        if (t) for(let r = 0, s = this._decorations.length; r < s; r++){
            const o = this._editor.getModel().getDecorationRange(this._decorations[r]);
            if (t.equalsRange(o)) {
                n = this._decorations[r], i = r + 1;
                break;
            }
        }
        return (this._highlightedDecorationId !== null || n !== null) && this._editor.changeDecorations((r)=>{
            if (this._highlightedDecorationId !== null && (r.changeDecorationOptions(this._highlightedDecorationId, dxe._FIND_MATCH_DECORATION), this._highlightedDecorationId = null), n !== null && (this._highlightedDecorationId = n, r.changeDecorationOptions(this._highlightedDecorationId, dxe._CURRENT_FIND_MATCH_DECORATION)), this._rangeHighlightDecorationId !== null && (r.removeDecoration(this._rangeHighlightDecorationId), this._rangeHighlightDecorationId = null), n !== null) {
                let s = this._editor.getModel().getDecorationRange(n);
                if (s.startLineNumber !== s.endLineNumber && s.endColumn === 1) {
                    const o = s.endLineNumber - 1, a = this._editor.getModel().getLineMaxColumn(o);
                    s = new dt(s.startLineNumber, s.startColumn, o, a);
                }
                this._rangeHighlightDecorationId = r.addDecoration(s, dxe._RANGE_HIGHLIGHT_DECORATION);
            }
        }), i;
    }
    set(t, n) {
        this._editor.changeDecorations((i)=>{
            let r = dxe._FIND_MATCH_DECORATION;
            const s = [];
            if (t.length > 1e3) {
                r = dxe._FIND_MATCH_NO_OVERVIEW_DECORATION;
                const a = this._editor.getModel().getLineCount(), l = this._editor.getLayoutInfo().height / a, u = Math.max(2, Math.ceil(3 / l));
                let h = t[0].range.startLineNumber, p = t[0].range.endLineNumber;
                for(let g = 1, f = t.length; g < f; g++){
                    const v = t[g].range;
                    p + u >= v.startLineNumber ? v.endLineNumber > p && (p = v.endLineNumber) : (s.push({
                        range: new dt(h, 1, p, 1),
                        options: dxe._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                    }), h = v.startLineNumber, p = v.endLineNumber);
                }
                s.push({
                    range: new dt(h, 1, p, 1),
                    options: dxe._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                });
            }
            const o = new Array(t.length);
            for(let a = 0, c = t.length; a < c; a++)o[a] = {
                range: t[a].range,
                options: r
            };
            this._decorations = i.deltaDecorations(this._decorations, o), this._overviewRulerApproximateDecorations = i.deltaDecorations(this._overviewRulerApproximateDecorations, s), this._rangeHighlightDecorationId && (i.removeDecoration(this._rangeHighlightDecorationId), this._rangeHighlightDecorationId = null), this._findScopeDecorationIds.length && (this._findScopeDecorationIds.forEach((a)=>i.removeDecoration(a)), this._findScopeDecorationIds = []), n?.length && (this._findScopeDecorationIds = n.map((a)=>i.addDecoration(a, dxe._FIND_SCOPE_DECORATION)));
        });
    }
    matchBeforePosition(t) {
        if (this._decorations.length === 0) return null;
        for(let n = this._decorations.length - 1; n >= 0; n--){
            const i = this._decorations[n], r = this._editor.getModel().getDecorationRange(i);
            if (!(!r || r.endLineNumber > t.lineNumber)) {
                if (r.endLineNumber < t.lineNumber) return r;
                if (!(r.endColumn > t.column)) return r;
            }
        }
        return this._editor.getModel().getDecorationRange(this._decorations[this._decorations.length - 1]);
    }
    matchAfterPosition(t) {
        if (this._decorations.length === 0) return null;
        for(let n = 0, i = this._decorations.length; n < i; n++){
            const r = this._decorations[n], s = this._editor.getModel().getDecorationRange(r);
            if (!(!s || s.startLineNumber < t.lineNumber)) {
                if (s.startLineNumber > t.lineNumber) return s;
                if (!(s.startColumn < t.column)) return s;
            }
        }
        return this._editor.getModel().getDecorationRange(this._decorations[0]);
    }
    _allDecorations() {
        let t = [];
        return t = t.concat(this._decorations), t = t.concat(this._overviewRulerApproximateDecorations), this._findScopeDecorationIds.length && t.push(...this._findScopeDecorationIds), this._rangeHighlightDecorationId && t.push(this._rangeHighlightDecorationId), t;
    }
}, cQe._CURRENT_FIND_MATCH_DECORATION = Vd.register({
    description: "current-find-match",
    stickiness: 1,
    zIndex: 13,
    className: "currentFindMatch",
    inlineClassName: "currentFindMatchInline",
    showIfCollapsed: !0,
    overviewRuler: {
        color: VS(DBe),
        position: xE.Center
    },
    minimap: {
        color: VS(G2t),
        position: 1
    }
}), cQe._FIND_MATCH_DECORATION = Vd.register({
    description: "find-match",
    stickiness: 1,
    zIndex: 10,
    className: "findMatch",
    inlineClassName: "findMatchInline",
    showIfCollapsed: !0,
    overviewRuler: {
        color: VS(DBe),
        position: xE.Center
    },
    minimap: {
        color: VS(G2t),
        position: 1
    }
}), cQe._FIND_MATCH_NO_OVERVIEW_DECORATION = Vd.register({
    description: "find-match-no-overview",
    stickiness: 1,
    className: "findMatch",
    showIfCollapsed: !0
}), cQe._FIND_MATCH_ONLY_OVERVIEW_DECORATION = Vd.register({
    description: "find-match-only-overview",
    stickiness: 1,
    overviewRuler: {
        color: VS(DBe),
        position: xE.Center
    }
}), cQe._RANGE_HIGHLIGHT_DECORATION = Vd.register({
    description: "find-range-highlight",
    stickiness: 1,
    className: "rangeHighlight",
    isWholeLine: !0
}), cQe._FIND_SCOPE_DECORATION = Vd.register({
    description: "find-scope",
    className: "findScope",
    isWholeLine: !0
}), n7t = cQe;

}
