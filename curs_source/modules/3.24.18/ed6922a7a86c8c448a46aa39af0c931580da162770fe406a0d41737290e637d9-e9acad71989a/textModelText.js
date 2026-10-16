import { Hbi, yW } from "./textEdit.js";
import { $ge, FP } from "./textLength.js";
import { x } from "./tslib.es6.js";
var hmt;
export { hmt };
var __wakaru_jvn_initialized = false;
export function jvn() {
if (__wakaru_jvn_initialized) return;
__wakaru_jvn_initialized = true;
"use strict";
x(), yW(), $ge(), hmt = class extends Hbi {
    constructor(e){
        super(), this._textModel = e;
    }
    getValueOfRange(e) {
        return this._textModel.getValueInRange(e);
    }
    getLineLength(e) {
        return this._textModel.getLineLength(e);
    }
    get length() {
        const e = this._textModel.getLineCount(), t = this._textModel.getLineLength(e);
        return new FP(e - 1, t);
    }
};

}
