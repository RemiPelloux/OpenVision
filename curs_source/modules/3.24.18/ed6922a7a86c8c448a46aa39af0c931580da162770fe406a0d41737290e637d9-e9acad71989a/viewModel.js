import { Ps, Rqe, lht, nh } from "./HVr.js";
import { dr } from "./arrays.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var WJr, zBc, v_i, BOt, Cwe, KBc, GJr, __i;
export { BOt, Cwe, GJr, KBc, WJr, __i, v_i, zBc };
var __wakaru_Cle_initialized = false;
export function Cle() {
if (__wakaru_Cle_initialized) return;
__wakaru_Cle_initialized = true;
"use strict";
x(), dr(), Ps(), qi(), WJr = class {
    constructor(e, t, n, i){
        this._viewportBrand = void 0, this.top = e | 0, this.left = t | 0, this.width = n | 0, this.height = i | 0;
    }
}, zBc = class {
    constructor(e, t){
        this.tabSize = e, this.data = t;
    }
}, v_i = class {
    constructor(e, t, n, i, r, s, o){
        this._viewLineDataBrand = void 0, this.content = e, this.continuesWithWrappedLine = t, this.minColumn = n, this.maxColumn = i, this.startVisibleColumn = r, this.tokens = s, this.inlineDecorations = o;
    }
}, BOt = class AIa {
    constructor(t, n, i, r, s, o, a, c, l, u){
        this.minColumn = t, this.maxColumn = n, this.content = i, this.continuesWithWrappedLine = r, this.isBasicASCII = AIa.isBasicASCII(i, o), this.containsRTL = AIa.containsRTL(i, this.isBasicASCII, s), this.tokens = a, this.inlineDecorations = c, this.tabSize = l, this.startVisibleColumn = u;
    }
    static isBasicASCII(t, n) {
        return n ? lht(t) : !0;
    }
    static containsRTL(t, n, i) {
        return !n && i ? Rqe(t) : !1;
    }
}, Cwe = class {
    constructor(e, t, n){
        this.range = e, this.inlineClassName = t, this.type = n;
    }
}, KBc = class {
    constructor(e, t, n, i){
        this.startOffset = e, this.endOffset = t, this.inlineClassName = n, this.inlineClassNameAffectsLetterSpacing = i;
    }
    toInlineDecoration(e) {
        return new Cwe(new dt(e, this.startOffset + 1, e, this.endOffset + 1), this.inlineClassName, this.inlineClassNameAffectsLetterSpacing ? 3 : 0);
    }
}, GJr = class {
    constructor(e, t){
        this._viewModelDecorationBrand = void 0, this.range = e, this.options = t;
    }
}, __i = class Skm {
    constructor(t, n, i){
        this.color = t, this.zIndex = n, this.data = i;
    }
    static compareByRenderingProps(t, n) {
        return t.zIndex === n.zIndex ? t.color < n.color ? -1 : t.color > n.color ? 1 : 0 : t.zIndex - n.zIndex;
    }
    static equals(t, n) {
        return t.color === n.color && t.zIndex === n.zIndex && nh(t.data, n.data);
    }
    static equalsArr(t, n) {
        return nh(t, n, Skm.equals);
    }
};

}
