import { E } from "./tslib.es6.js";
var tFd;
export { tFd };
var __wakaru_Lii_initialized = false;
export function Lii() {
if (__wakaru_Lii_initialized) return;
__wakaru_Lii_initialized = true;
"use strict";
E(), tFd = class {
    constructor(t, e, n, i, r, s){
        this._scopedLineTokensBrand = void 0, this._actual = t, this.languageId = e, this._firstTokenIndex = n, this._lastTokenIndex = i, this.firstCharOffset = r, this._lastCharOffset = s, this.languageIdCodec = t.languageIdCodec;
    }
    getLineContent() {
        return this._actual.getLineContent().substring(this.firstCharOffset, this._lastCharOffset);
    }
    getLineLength() {
        return this._lastCharOffset - this.firstCharOffset;
    }
    getActualLineContentBefore(t) {
        return this._actual.getLineContent().substring(0, this.firstCharOffset + t);
    }
    getTokenCount() {
        return this._lastTokenIndex - this._firstTokenIndex;
    }
    findTokenIndexAtOffset(t) {
        return this._actual.findTokenIndexAtOffset(t + this.firstCharOffset) - this._firstTokenIndex;
    }
    getStandardTokenType(t) {
        return this._actual.getStandardTokenType(t + this._firstTokenIndex);
    }
    toIViewLineTokens() {
        return this._actual.sliceAndInflate(this.firstCharOffset, this._lastCharOffset, 0);
    }
};

}
