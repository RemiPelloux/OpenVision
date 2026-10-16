import { x } from "./tslib.es6.js";
var oU, gBc, fBc, vBc, _Bc, Fze, Bfn, bBc, yBc, Ufn, NJr, d_i, h_i, hW, FOt, SBc, kBc, wBc, CBc, TBc;
export { Bfn, CBc, FOt, Fze, NJr, SBc, TBc, Ufn, _Bc, bBc, d_i, fBc, gBc, hW, h_i, kBc, oU, vBc, wBc, yBc };
var __wakaru_Npt_initialized = false;
export function Npt() {
if (__wakaru_Npt_initialized) return;
__wakaru_Npt_initialized = true;
"use strict";
x(), oU = ((e)=>(e[e.ViewCompositionStart = 0] = "ViewCompositionStart", e[e.ViewCompositionEnd = 1] = "ViewCompositionEnd", e[e.ViewConfigurationChanged = 2] = "ViewConfigurationChanged", e[e.ViewCursorStateChanged = 3] = "ViewCursorStateChanged", e[e.ViewDecorationsChanged = 4] = "ViewDecorationsChanged", e[e.ViewFlushed = 5] = "ViewFlushed", e[e.ViewFocusChanged = 6] = "ViewFocusChanged", e[e.ViewLanguageConfigurationChanged = 7] = "ViewLanguageConfigurationChanged", e[e.ViewLineMappingChanged = 8] = "ViewLineMappingChanged", e[e.ViewLinesChanged = 9] = "ViewLinesChanged", e[e.ViewLinesDeleted = 10] = "ViewLinesDeleted", e[e.ViewLinesInserted = 11] = "ViewLinesInserted", e[e.ViewRevealRangeRequest = 12] = "ViewRevealRangeRequest", e[e.ViewScrollChanged = 13] = "ViewScrollChanged", e[e.ViewThemeChanged = 14] = "ViewThemeChanged", e[e.ViewTokensChanged = 15] = "ViewTokensChanged", e[e.ViewTokensColorsChanged = 16] = "ViewTokensColorsChanged", e[e.ViewZonesChanged = 17] = "ViewZonesChanged", e))(oU || {}), gBc = class {
    constructor(){
        this.type = 0;
    }
}, fBc = class {
    constructor(){
        this.type = 1;
    }
}, vBc = class {
    constructor(e){
        this.type = 2, this._source = e;
    }
    hasChanged(e) {
        return this._source.hasChanged(e);
    }
}, _Bc = class {
    constructor(e, t, n){
        this.selections = e, this.modelSelections = t, this.reason = n, this.type = 3;
    }
}, Fze = class {
    constructor(e){
        this.type = 4, e ? (this.affectsMinimap = e.affectsMinimap, this.affectsOverviewRuler = e.affectsOverviewRuler, this.affectsGlyphMargin = e.affectsGlyphMargin, this.affectsLineNumber = e.affectsLineNumber) : (this.affectsMinimap = !0, this.affectsOverviewRuler = !0, this.affectsGlyphMargin = !0, this.affectsLineNumber = !0);
    }
}, Bfn = class {
    constructor(){
        this.type = 5;
    }
}, bBc = class {
    constructor(e){
        this.type = 6, this.isFocused = e;
    }
}, yBc = class {
    constructor(){
        this.type = 7;
    }
}, Ufn = class {
    constructor(){
        this.type = 8;
    }
}, NJr = class {
    constructor(e, t){
        this.fromLineNumber = e, this.count = t, this.type = 9;
    }
}, d_i = class {
    constructor(e, t){
        this.type = 10, this.fromLineNumber = e, this.toLineNumber = t;
    }
}, h_i = class {
    constructor(e, t){
        this.type = 11, this.fromLineNumber = e, this.toLineNumber = t;
    }
}, hW = ((e)=>(e[e.Simple = 0] = "Simple", e[e.Center = 1] = "Center", e[e.CenterIfOutsideViewport = 2] = "CenterIfOutsideViewport", e[e.Top = 3] = "Top", e[e.Bottom = 4] = "Bottom", e[e.NearTop = 5] = "NearTop", e[e.NearTopIfOutsideViewport = 6] = "NearTopIfOutsideViewport", e))(hW || {}), FOt = class {
    constructor(e, t, n, i, r, s, o){
        this.source = e, this.minimalReveal = t, this.range = n, this.selections = i, this.verticalType = r, this.revealHorizontal = s, this.scrollType = o, this.type = 12;
    }
}, SBc = class {
    constructor(e){
        this.type = 13, this.scrollWidth = e.scrollWidth, this.scrollLeft = e.scrollLeft, this.scrollHeight = e.scrollHeight, this.scrollTop = e.scrollTop, this.scrollWidthChanged = e.scrollWidthChanged, this.scrollLeftChanged = e.scrollLeftChanged, this.scrollHeightChanged = e.scrollHeightChanged, this.scrollTopChanged = e.scrollTopChanged;
    }
}, kBc = class {
    constructor(e){
        this.theme = e, this.type = 14;
    }
}, wBc = class {
    constructor(e){
        this.type = 15, this.ranges = e;
    }
}, CBc = class {
    constructor(){
        this.type = 16;
    }
}, TBc = class {
    constructor(){
        this.type = 17;
    }
};

}
