import { Fa, Hvt, Zm, a6t } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var W$o, lUd, $0r, _fn, pHe, cUd, G$o, H0r;
export { $0r, G$o, H0r, W$o, _fn, cUd, lUd, pHe };
var __wakaru_zAe_initialized = false;
export function zAe() {
if (__wakaru_zAe_initialized) return;
__wakaru_zAe_initialized = true;
"use strict";
E(), bo(), Fa(), Qs(), W$o = class {
    constructor(t, e, n, i){
        this._viewportBrand = void 0, this.top = t | 0, this.left = e | 0, this.width = n | 0, this.height = i | 0;
    }
}, lUd = class {
    constructor(t, e){
        this.tabSize = t, this.data = e;
    }
}, $0r = class {
    constructor(t, e, n, i, r, s, o){
        this._viewLineDataBrand = void 0, this.content = t, this.continuesWithWrappedLine = e, this.minColumn = n, this.maxColumn = i, this.startVisibleColumn = r, this.tokens = s, this.inlineDecorations = o;
    }
}, _fn = class hJc {
    constructor(e, n, i, r, s, o, a, l, c, u){
        this.minColumn = e, this.maxColumn = n, this.content = i, this.continuesWithWrappedLine = r, this.isBasicASCII = hJc.isBasicASCII(i, o), this.containsRTL = hJc.containsRTL(i, this.isBasicASCII, s), this.tokens = a, this.inlineDecorations = l, this.tabSize = c, this.startVisibleColumn = u;
    }
    static isBasicASCII(e, n) {
        return n ? a6t(e) : !0;
    }
    static containsRTL(e, n, i) {
        return !n && i ? Hvt(e) : !1;
    }
}, pHe = class {
    constructor(t, e, n){
        this.range = t, this.inlineClassName = e, this.type = n;
    }
}, cUd = class {
    constructor(t, e, n, i){
        this.startOffset = t, this.endOffset = e, this.inlineClassName = n, this.inlineClassNameAffectsLetterSpacing = i;
    }
    toInlineDecoration(t) {
        return new pHe(new qt(t, this.startOffset + 1, t, this.endOffset + 1), this.inlineClassName, this.inlineClassNameAffectsLetterSpacing ? 3 : 0);
    }
}, G$o = class {
    constructor(t, e){
        this._viewModelDecorationBrand = void 0, this.range = t, this.options = e;
    }
}, H0r = class zAb {
    constructor(e, n, i){
        this.color = e, this.zIndex = n, this.data = i;
    }
    static compareByRenderingProps(e, n) {
        return e.zIndex === n.zIndex ? e.color < n.color ? -1 : e.color > n.color ? 1 : 0 : e.zIndex - n.zIndex;
    }
    static equals(e, n) {
        return e.color === n.color && e.zIndex === n.zIndex && Zm(e.data, n.data);
    }
    static equalsArr(e, n) {
        return Zm(e, n, zAb.equals);
    }
};

}
