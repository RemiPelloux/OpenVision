import { x } from "./tslib.es6.js";
var LMc;
export { LMc };
var __wakaru_qmn_initialized = false;
export function qmn() {
if (__wakaru_qmn_initialized) return;
__wakaru_qmn_initialized = true;
"use strict";
x(), LMc = class {
    constructor(e, t, n, i, r, s){
        this._scopedLineTokensBrand = void 0, this._actual = e, this.languageId = t, this._firstTokenIndex = n, this._lastTokenIndex = i, this.firstCharOffset = r, this._lastCharOffset = s, this.languageIdCodec = e.languageIdCodec;
    }
    getLineContent() {
        return this._actual.getLineContent().substring(this.firstCharOffset, this._lastCharOffset);
    }
    getLineLength() {
        return this._lastCharOffset - this.firstCharOffset;
    }
    getActualLineContentBefore(e) {
        return this._actual.getLineContent().substring(0, this.firstCharOffset + e);
    }
    getTokenCount() {
        return this._lastTokenIndex - this._firstTokenIndex;
    }
    findTokenIndexAtOffset(e) {
        return this._actual.findTokenIndexAtOffset(e + this.firstCharOffset) - this._firstTokenIndex;
    }
    getStandardTokenType(e) {
        return this._actual.getStandardTokenType(e + this._firstTokenIndex);
    }
    toIViewLineTokens() {
        return this._actual.sliceAndInflate(this.firstCharOffset, this._lastCharOffset, 0);
    }
};

}
