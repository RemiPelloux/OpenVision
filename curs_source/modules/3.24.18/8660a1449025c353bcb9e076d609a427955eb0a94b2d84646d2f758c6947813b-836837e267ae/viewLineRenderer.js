import { Fa } from "./Iwo.js";
import { Cw } from "./charCode.js";
import { RQ, byt } from "./lineDecorations.js";
import { lMy } from "./linePart.js";
import { Bt } from "./nls.js";
import { Q$e } from "./stringBuilder.js";
import { E } from "./tslib.es6.js";
var bHo, yyt, yHo, eCr, tCr, njd, ijd;
export { bHo, eCr, ijd, njd, tCr, yHo, yyt };
var __wakaru_dBt_initialized = false;
export function dBt() {
if (__wakaru_dBt_initialized) return;
__wakaru_dBt_initialized = true;
"use strict";
E(), Bt(), Cw(), Fa(), Q$e(), byt(), lMy(), bHo = class {
    constructor(t, e){
        this.startOffset = t, this.endOffset = e;
    }
    equals(t) {
        return this.startOffset === t.startOffset && this.endOffset === t.endOffset;
    }
}, yyt = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y){
        this.useMonospaceOptimizations = t, this.canUseHalfwidthRightwardsArrow = e, this.lineContent = n, this.continuesWithWrappedLine = i, this.isBasicASCII = r, this.containsRTL = s, this.fauxIndentLength = o, this.lineTokens = a, this.lineDecorations = l.sort(RQ.compare), this.tabSize = c, this.startVisibleColumn = u, this.spaceWidth = d, this.stopRenderingLineAfter = g, this.renderWhitespace = f === "all" ? 4 : f === "boundary" ? 1 : f === "selection" ? 2 : f === "trailing" ? 3 : 0, this.renderControlCharacters = _, this.fontLigatures = b, this.selectionsOnLine = y && y.sort((C, T)=>C.startOffset < T.startOffset ? -1 : 1);
        const S = Math.abs(p - d), k = Math.abs(h - d);
        S < k ? (this.renderSpaceWidth = p, this.renderSpaceCharCode = 11825) : (this.renderSpaceWidth = h, this.renderSpaceCharCode = 183);
    }
    sameSelection(t) {
        if (this.selectionsOnLine === null) return t === null;
        if (t === null || t.length !== this.selectionsOnLine.length) return !1;
        for(let e = 0; e < this.selectionsOnLine.length; e++)if (!this.selectionsOnLine[e].equals(t[e])) return !1;
        return !0;
    }
    equals(t) {
        return this.useMonospaceOptimizations === t.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === t.canUseHalfwidthRightwardsArrow && this.lineContent === t.lineContent && this.continuesWithWrappedLine === t.continuesWithWrappedLine && this.isBasicASCII === t.isBasicASCII && this.containsRTL === t.containsRTL && this.fauxIndentLength === t.fauxIndentLength && this.tabSize === t.tabSize && this.startVisibleColumn === t.startVisibleColumn && this.spaceWidth === t.spaceWidth && this.renderSpaceWidth === t.renderSpaceWidth && this.renderSpaceCharCode === t.renderSpaceCharCode && this.stopRenderingLineAfter === t.stopRenderingLineAfter && this.renderWhitespace === t.renderWhitespace && this.renderControlCharacters === t.renderControlCharacters && this.fontLigatures === t.fontLigatures && RQ.equalsArr(this.lineDecorations, t.lineDecorations) && this.lineTokens.equals(t.lineTokens) && this.sameSelection(t.selectionsOnLine);
    }
}, yHo = class {
    constructor(t, e){
        this.partIndex = t, this.charIndex = e;
    }
}, eCr = class umt {
    static getPartIndex(e) {
        return (e & 4294901760) >>> 16;
    }
    static getCharIndex(e) {
        return (e & 65535) >>> 0;
    }
    constructor(e, n){
        this.length = e, this._data = new Uint32Array(this.length), this._horizontalOffset = new Uint32Array(this.length);
    }
    setColumnInfo(e, n, i, r) {
        const s = (n << 16 | i << 0) >>> 0;
        this._data[e - 1] = s, this._horizontalOffset[e - 1] = r;
    }
    getHorizontalOffset(e) {
        return this._horizontalOffset.length === 0 ? 0 : this._horizontalOffset[e - 1];
    }
    charOffsetToPartData(e) {
        return this.length === 0 ? 0 : e < 0 ? this._data[0] : e >= this.length ? this._data[this.length - 1] : this._data[e];
    }
    getDomPosition(e) {
        const n = this.charOffsetToPartData(e - 1), i = umt.getPartIndex(n), r = umt.getCharIndex(n);
        return new yHo(i, r);
    }
    getColumn(e, n) {
        return this.partDataToCharOffset(e.partIndex, n, e.charIndex) + 1;
    }
    partDataToCharOffset(e, n, i) {
        if (this.length === 0) return 0;
        const r = (e << 16 | i << 0) >>> 0;
        let s = 0, o = this.length - 1;
        for(; s + 1 < o;){
            const f = s + o >>> 1, _ = this._data[f];
            if (_ === r) return f;
            _ > r ? o = f : s = f;
        }
        if (s === o) return s;
        const a = this._data[s], l = this._data[o];
        if (a === r) return s;
        if (l === r) return o;
        const c = umt.getPartIndex(a), u = umt.getCharIndex(a), d = umt.getPartIndex(l);
        let h;
        c !== d ? h = n : h = umt.getCharIndex(l);
        const p = i - u, g = h - i;
        return p <= g ? s : o;
    }
    inflate() {
        const e = [];
        for(let n = 0; n < this.length; n++){
            const i = this._data[n], r = umt.getPartIndex(i), s = umt.getCharIndex(i), o = this._horizontalOffset[n];
            e.push([
                r,
                s,
                o
            ]);
        }
        return e;
    }
}, tCr = class {
    constructor(t, e, n){
        this._renderLineOutputBrand = void 0, this.characterMapping = t, this.containsRTL = e, this.containsForeignElements = n;
    }
}, njd = class {
    constructor(t, e, n, i){
        this.characterMapping = t, this.html = e, this.containsRTL = n, this.containsForeignElements = i;
    }
}, ijd = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f){
        this.fontIsMonospace = t, this.canUseHalfwidthRightwardsArrow = e, this.lineContent = n, this.len = i, this.isOverflowing = r, this.overflowingCharCount = s, this.parts = o, this.containsForeignElements = a, this.fauxIndentLength = l, this.tabSize = c, this.startVisibleColumn = u, this.containsRTL = d, this.spaceWidth = h, this.renderSpaceCharCode = p, this.renderWhitespace = g, this.renderControlCharacters = f;
    }
};

}
