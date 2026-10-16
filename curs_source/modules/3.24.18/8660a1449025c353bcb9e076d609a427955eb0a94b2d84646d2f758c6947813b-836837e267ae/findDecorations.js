import { Ap } from "./colorRegistry.js";
import { Mtt } from "./editorColors.js";
import { Ugn } from "./minimapColors.js";
import { J0, gO } from "./model_2.js";
import { Qs, qt } from "./range.js";
import { Kg, PC } from "./textModel.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { OI } from "./ze.js";
var Xwt, pWr;
export { Xwt, pWr };
var __wakaru_FPp_initialized = false;
export function FPp() {
if (__wakaru_FPp_initialized) return;
__wakaru_FPp_initialized = true;
"use strict";
E(), Qs(), J0(), PC(), Ap(), Dl(), Xwt = class J7e {
    constructor(e){
        this._editor = e, this._decorations = [], this._overviewRulerApproximateDecorations = [], this._findScopeDecorationIds = [], this._rangeHighlightDecorationId = null, this._highlightedDecorationId = null, this._startPosition = this._editor.getPosition();
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
            const e = this._findScopeDecorationIds.map((n)=>this._editor.getModel().getDecorationRange(n)).filter((n)=>!!n);
            if (e.length) return e;
        }
        return null;
    }
    getStartPosition() {
        return this._startPosition;
    }
    setStartPosition(e) {
        this._startPosition = e, this.setCurrentFindMatch(null);
    }
    _getDecorationIndex(e) {
        const n = this._decorations.indexOf(e);
        return n >= 0 ? n + 1 : 1;
    }
    getDecorationRangeAt(e) {
        const n = e < this._decorations.length ? this._decorations[e] : null;
        return n ? this._editor.getModel().getDecorationRange(n) : null;
    }
    getCurrentMatchesPosition(e) {
        const n = this._editor.getModel().getDecorationsInRange(e);
        for (const i of n){
            const r = i.options;
            if (r === J7e._FIND_MATCH_DECORATION || r === J7e._CURRENT_FIND_MATCH_DECORATION) return this._getDecorationIndex(i.id);
        }
        return 0;
    }
    setCurrentFindMatch(e) {
        let n = null, i = 0;
        if (e) for(let r = 0, s = this._decorations.length; r < s; r++){
            const o = this._editor.getModel().getDecorationRange(this._decorations[r]);
            if (e.equalsRange(o)) {
                n = this._decorations[r], i = r + 1;
                break;
            }
        }
        return (this._highlightedDecorationId !== null || n !== null) && this._editor.changeDecorations((r)=>{
            if (this._highlightedDecorationId !== null && (r.changeDecorationOptions(this._highlightedDecorationId, J7e._FIND_MATCH_DECORATION), this._highlightedDecorationId = null), n !== null && (this._highlightedDecorationId = n, r.changeDecorationOptions(this._highlightedDecorationId, J7e._CURRENT_FIND_MATCH_DECORATION)), this._rangeHighlightDecorationId !== null && (r.removeDecoration(this._rangeHighlightDecorationId), this._rangeHighlightDecorationId = null), n !== null) {
                let s = this._editor.getModel().getDecorationRange(n);
                if (s.startLineNumber !== s.endLineNumber && s.endColumn === 1) {
                    const o = s.endLineNumber - 1, a = this._editor.getModel().getLineMaxColumn(o);
                    s = new qt(s.startLineNumber, s.startColumn, o, a);
                }
                this._rangeHighlightDecorationId = r.addDecoration(s, J7e._RANGE_HIGHLIGHT_DECORATION);
            }
        }), i;
    }
    set(e, n) {
        this._editor.changeDecorations((i)=>{
            let r = J7e._FIND_MATCH_DECORATION;
            const s = [];
            if (e.length > 1e3) {
                r = J7e._FIND_MATCH_NO_OVERVIEW_DECORATION;
                const a = this._editor.getModel().getLineCount(), c = this._editor.getLayoutInfo().height / a, u = Math.max(2, Math.ceil(3 / c));
                let d = e[0].range.startLineNumber, h = e[0].range.endLineNumber;
                for(let p = 1, g = e.length; p < g; p++){
                    const f = e[p].range;
                    h + u >= f.startLineNumber ? f.endLineNumber > h && (h = f.endLineNumber) : (s.push({
                        range: new qt(d, 1, h, 1),
                        options: J7e._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                    }), d = f.startLineNumber, h = f.endLineNumber);
                }
                s.push({
                    range: new qt(d, 1, h, 1),
                    options: J7e._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                });
            }
            const o = new Array(e.length);
            for(let a = 0, l = e.length; a < l; a++)o[a] = {
                range: e[a].range,
                options: r
            };
            this._decorations = i.deltaDecorations(this._decorations, o), this._overviewRulerApproximateDecorations = i.deltaDecorations(this._overviewRulerApproximateDecorations, s), this._rangeHighlightDecorationId && (i.removeDecoration(this._rangeHighlightDecorationId), this._rangeHighlightDecorationId = null), this._findScopeDecorationIds.length && (this._findScopeDecorationIds.forEach((a)=>i.removeDecoration(a)), this._findScopeDecorationIds = []), n?.length && (this._findScopeDecorationIds = n.map((a)=>i.addDecoration(a, J7e._FIND_SCOPE_DECORATION)));
        });
    }
    matchBeforePosition(e) {
        if (this._decorations.length === 0) return null;
        for(let n = this._decorations.length - 1; n >= 0; n--){
            const i = this._decorations[n], r = this._editor.getModel().getDecorationRange(i);
            if (!(!r || r.endLineNumber > e.lineNumber)) {
                if (r.endLineNumber < e.lineNumber) return r;
                if (!(r.endColumn > e.column)) return r;
            }
        }
        return this._editor.getModel().getDecorationRange(this._decorations[this._decorations.length - 1]);
    }
    matchAfterPosition(e) {
        if (this._decorations.length === 0) return null;
        for(let n = 0, i = this._decorations.length; n < i; n++){
            const r = this._decorations[n], s = this._editor.getModel().getDecorationRange(r);
            if (!(!s || s.startLineNumber < e.lineNumber)) {
                if (s.startLineNumber > e.lineNumber) return s;
                if (!(s.startColumn < e.column)) return s;
            }
        }
        return this._editor.getModel().getDecorationRange(this._decorations[0]);
    }
    _allDecorations() {
        let e = [];
        return e = e.concat(this._decorations), e = e.concat(this._overviewRulerApproximateDecorations), this._findScopeDecorationIds.length && e.push(...this._findScopeDecorationIds), this._rangeHighlightDecorationId && e.push(this._rangeHighlightDecorationId), e;
    }
}, Xwt._CURRENT_FIND_MATCH_DECORATION = Kg.register({
    description: "current-find-match",
    stickiness: 1,
    zIndex: 13,
    className: "currentFindMatch",
    inlineClassName: "currentFindMatchInline",
    showIfCollapsed: !0,
    overviewRuler: {
        color: OI(Mtt),
        position: gO.Center
    },
    minimap: {
        color: OI(Ugn),
        position: 1
    }
}), Xwt._FIND_MATCH_DECORATION = Kg.register({
    description: "find-match",
    stickiness: 1,
    zIndex: 10,
    className: "findMatch",
    inlineClassName: "findMatchInline",
    showIfCollapsed: !0,
    overviewRuler: {
        color: OI(Mtt),
        position: gO.Center
    },
    minimap: {
        color: OI(Ugn),
        position: 1
    }
}), Xwt._FIND_MATCH_NO_OVERVIEW_DECORATION = Kg.register({
    description: "find-match-no-overview",
    stickiness: 1,
    className: "findMatch",
    showIfCollapsed: !0
}), Xwt._FIND_MATCH_ONLY_OVERVIEW_DECORATION = Kg.register({
    description: "find-match-only-overview",
    stickiness: 1,
    overviewRuler: {
        color: OI(Mtt),
        position: gO.Center
    }
}), Xwt._RANGE_HIGHLIGHT_DECORATION = Kg.register({
    description: "find-range-highlight",
    stickiness: 1,
    className: "rangeHighlight",
    isWholeLine: !0
}), Xwt._FIND_SCOPE_DECORATION = Kg.register({
    description: "find-scope",
    className: "findScope",
    isWholeLine: !0
}), pWr = Xwt;

}
