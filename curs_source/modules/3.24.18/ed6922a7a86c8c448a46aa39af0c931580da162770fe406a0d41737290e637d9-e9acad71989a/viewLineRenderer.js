import { Ps } from "./HVr.js";
import { qy } from "./charCode.js";
import { Wze, gW } from "./lineDecorations.js";
import { gvg } from "./linePart.js";
import { rt } from "./nls.js";
import { lwe } from "./stringBuilder.js";
import { x } from "./tslib.es6.js";
var fes, Gze, ves, x_i, I_i, W5c, G5c;
export { G5c, Gze, I_i, W5c, fes, ves, x_i };
var __wakaru_Wpt_initialized = false;
export function Wpt() {
if (__wakaru_Wpt_initialized) return;
__wakaru_Wpt_initialized = true;
"use strict";
x(), rt(), qy(), Ps(), lwe(), Wze(), gvg(), fes = class {
    constructor(e, t){
        this.startOffset = e, this.endOffset = t;
    }
    equals(e) {
        return this.startOffset === e.startOffset && this.endOffset === e.endOffset;
    }
}, Gze = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T){
        this.useMonospaceOptimizations = e, this.canUseHalfwidthRightwardsArrow = t, this.lineContent = n, this.continuesWithWrappedLine = i, this.isBasicASCII = r, this.containsRTL = s, this.fauxIndentLength = o, this.lineTokens = a, this.lineDecorations = c.sort(gW.compare), this.tabSize = l, this.startVisibleColumn = u, this.spaceWidth = h, this.stopRenderingLineAfter = f, this.renderWhitespace = v === "all" ? 4 : v === "boundary" ? 1 : v === "selection" ? 2 : v === "trailing" ? 3 : 0, this.renderControlCharacters = b, this.fontLigatures = y, this.selectionsOnLine = T && T.sort((R, D)=>R.startOffset < D.startOffset ? -1 : 1);
        const E = Math.abs(g - h), A = Math.abs(p - h);
        E < A ? (this.renderSpaceWidth = g, this.renderSpaceCharCode = 11825) : (this.renderSpaceWidth = p, this.renderSpaceCharCode = 183);
    }
    sameSelection(e) {
        if (this.selectionsOnLine === null) return e === null;
        if (e === null || e.length !== this.selectionsOnLine.length) return !1;
        for(let t = 0; t < this.selectionsOnLine.length; t++)if (!this.selectionsOnLine[t].equals(e[t])) return !1;
        return !0;
    }
    equals(e) {
        return this.useMonospaceOptimizations === e.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.lineContent === e.lineContent && this.continuesWithWrappedLine === e.continuesWithWrappedLine && this.isBasicASCII === e.isBasicASCII && this.containsRTL === e.containsRTL && this.fauxIndentLength === e.fauxIndentLength && this.tabSize === e.tabSize && this.startVisibleColumn === e.startVisibleColumn && this.spaceWidth === e.spaceWidth && this.renderSpaceWidth === e.renderSpaceWidth && this.renderSpaceCharCode === e.renderSpaceCharCode && this.stopRenderingLineAfter === e.stopRenderingLineAfter && this.renderWhitespace === e.renderWhitespace && this.renderControlCharacters === e.renderControlCharacters && this.fontLigatures === e.fontLigatures && gW.equalsArr(this.lineDecorations, e.lineDecorations) && this.lineTokens.equals(e.lineTokens) && this.sameSelection(e.selectionsOnLine);
    }
}, ves = class {
    constructor(e, t){
        this.partIndex = e, this.charIndex = t;
    }
}, x_i = class jWe {
    static getPartIndex(t) {
        return (t & 4294901760) >>> 16;
    }
    static getCharIndex(t) {
        return (t & 65535) >>> 0;
    }
    constructor(t, n){
        this.length = t, this._data = new Uint32Array(this.length), this._horizontalOffset = new Uint32Array(this.length);
    }
    setColumnInfo(t, n, i, r) {
        const s = (n << 16 | i << 0) >>> 0;
        this._data[t - 1] = s, this._horizontalOffset[t - 1] = r;
    }
    getHorizontalOffset(t) {
        return this._horizontalOffset.length === 0 ? 0 : this._horizontalOffset[t - 1];
    }
    charOffsetToPartData(t) {
        return this.length === 0 ? 0 : t < 0 ? this._data[0] : t >= this.length ? this._data[this.length - 1] : this._data[t];
    }
    getDomPosition(t) {
        const n = this.charOffsetToPartData(t - 1), i = jWe.getPartIndex(n), r = jWe.getCharIndex(n);
        return new ves(i, r);
    }
    getColumn(t, n) {
        return this.partDataToCharOffset(t.partIndex, n, t.charIndex) + 1;
    }
    partDataToCharOffset(t, n, i) {
        if (this.length === 0) return 0;
        const r = (t << 16 | i << 0) >>> 0;
        let s = 0, o = this.length - 1;
        for(; s + 1 < o;){
            const v = s + o >>> 1, b = this._data[v];
            if (b === r) return v;
            b > r ? o = v : s = v;
        }
        if (s === o) return s;
        const a = this._data[s], c = this._data[o];
        if (a === r) return s;
        if (c === r) return o;
        const l = jWe.getPartIndex(a), u = jWe.getCharIndex(a), h = jWe.getPartIndex(c);
        let p;
        l !== h ? p = n : p = jWe.getCharIndex(c);
        const g = i - u, f = p - i;
        return g <= f ? s : o;
    }
    inflate() {
        const t = [];
        for(let n = 0; n < this.length; n++){
            const i = this._data[n], r = jWe.getPartIndex(i), s = jWe.getCharIndex(i), o = this._horizontalOffset[n];
            t.push([
                r,
                s,
                o
            ]);
        }
        return t;
    }
}, I_i = class {
    constructor(e, t, n){
        this._renderLineOutputBrand = void 0, this.characterMapping = e, this.containsRTL = t, this.containsForeignElements = n;
    }
}, W5c = class {
    constructor(e, t, n, i){
        this.characterMapping = e, this.html = t, this.containsRTL = n, this.containsForeignElements = i;
    }
}, G5c = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v){
        this.fontIsMonospace = e, this.canUseHalfwidthRightwardsArrow = t, this.lineContent = n, this.len = i, this.isOverflowing = r, this.overflowingCharCount = s, this.parts = o, this.containsForeignElements = a, this.fauxIndentLength = c, this.tabSize = l, this.startVisibleColumn = u, this.containsRTL = h, this.spaceWidth = p, this.renderSpaceCharCode = g, this.renderWhitespace = f, this.renderControlCharacters = v;
    }
};

}
