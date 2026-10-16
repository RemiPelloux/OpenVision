import { E } from "./tslib.es6.js";
var hz, I7d, x7d, A7d, R7d, pyt, hsi, P7d, M7d, psi, F$o, B0r, U0r, xQ, vfn, D7d, N7d, L7d, O7d, F7d;
export { A7d, B0r, D7d, F$o, F7d, I7d, L7d, M7d, N7d, O7d, P7d, R7d, U0r, hsi, hz, psi, pyt, vfn, x7d, xQ };
var __wakaru_sBt_initialized = false;
export function sBt() {
if (__wakaru_sBt_initialized) return;
__wakaru_sBt_initialized = true;
"use strict";
E(), hz = ((t)=>(t[t.ViewCompositionStart = 0] = "ViewCompositionStart", t[t.ViewCompositionEnd = 1] = "ViewCompositionEnd", t[t.ViewConfigurationChanged = 2] = "ViewConfigurationChanged", t[t.ViewCursorStateChanged = 3] = "ViewCursorStateChanged", t[t.ViewDecorationsChanged = 4] = "ViewDecorationsChanged", t[t.ViewFlushed = 5] = "ViewFlushed", t[t.ViewFocusChanged = 6] = "ViewFocusChanged", t[t.ViewLanguageConfigurationChanged = 7] = "ViewLanguageConfigurationChanged", t[t.ViewLineMappingChanged = 8] = "ViewLineMappingChanged", t[t.ViewLinesChanged = 9] = "ViewLinesChanged", t[t.ViewLinesDeleted = 10] = "ViewLinesDeleted", t[t.ViewLinesInserted = 11] = "ViewLinesInserted", t[t.ViewRevealRangeRequest = 12] = "ViewRevealRangeRequest", t[t.ViewScrollChanged = 13] = "ViewScrollChanged", t[t.ViewThemeChanged = 14] = "ViewThemeChanged", t[t.ViewTokensChanged = 15] = "ViewTokensChanged", t[t.ViewTokensColorsChanged = 16] = "ViewTokensColorsChanged", t[t.ViewZonesChanged = 17] = "ViewZonesChanged", t))(hz || {}), I7d = class {
    constructor(){
        this.type = 0;
    }
}, x7d = class {
    constructor(){
        this.type = 1;
    }
}, A7d = class {
    constructor(t){
        this.type = 2, this._source = t;
    }
    hasChanged(t) {
        return this._source.hasChanged(t);
    }
}, R7d = class {
    constructor(t, e, n){
        this.selections = t, this.modelSelections = e, this.reason = n, this.type = 3;
    }
}, pyt = class {
    constructor(t){
        this.type = 4, t ? (this.affectsMinimap = t.affectsMinimap, this.affectsOverviewRuler = t.affectsOverviewRuler, this.affectsGlyphMargin = t.affectsGlyphMargin, this.affectsLineNumber = t.affectsLineNumber) : (this.affectsMinimap = !0, this.affectsOverviewRuler = !0, this.affectsGlyphMargin = !0, this.affectsLineNumber = !0);
    }
}, hsi = class {
    constructor(){
        this.type = 5;
    }
}, P7d = class {
    constructor(t){
        this.type = 6, this.isFocused = t;
    }
}, M7d = class {
    constructor(){
        this.type = 7;
    }
}, psi = class {
    constructor(){
        this.type = 8;
    }
}, F$o = class {
    constructor(t, e){
        this.fromLineNumber = t, this.count = e, this.type = 9;
    }
}, B0r = class {
    constructor(t, e){
        this.type = 10, this.fromLineNumber = t, this.toLineNumber = e;
    }
}, U0r = class {
    constructor(t, e){
        this.type = 11, this.fromLineNumber = t, this.toLineNumber = e;
    }
}, xQ = ((t)=>(t[t.Simple = 0] = "Simple", t[t.Center = 1] = "Center", t[t.CenterIfOutsideViewport = 2] = "CenterIfOutsideViewport", t[t.Top = 3] = "Top", t[t.Bottom = 4] = "Bottom", t[t.NearTop = 5] = "NearTop", t[t.NearTopIfOutsideViewport = 6] = "NearTopIfOutsideViewport", t))(xQ || {}), vfn = class {
    constructor(t, e, n, i, r, s, o){
        this.source = t, this.minimalReveal = e, this.range = n, this.selections = i, this.verticalType = r, this.revealHorizontal = s, this.scrollType = o, this.type = 12;
    }
}, D7d = class {
    constructor(t){
        this.type = 13, this.scrollWidth = t.scrollWidth, this.scrollLeft = t.scrollLeft, this.scrollHeight = t.scrollHeight, this.scrollTop = t.scrollTop, this.scrollWidthChanged = t.scrollWidthChanged, this.scrollLeftChanged = t.scrollLeftChanged, this.scrollHeightChanged = t.scrollHeightChanged, this.scrollTopChanged = t.scrollTopChanged;
    }
}, N7d = class {
    constructor(t){
        this.theme = t, this.type = 14;
    }
}, L7d = class {
    constructor(t){
        this.type = 15, this.ranges = t;
    }
}, O7d = class {
    constructor(){
        this.type = 16;
    }
}, F7d = class {
    constructor(){
        this.type = 17;
    }
};

}
