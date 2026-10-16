import { LQ, pTr } from "./textEdit.js";
import { N5, WAe } from "./textLength.js";
import { E } from "./tslib.es6.js";
var DBt;
export { DBt };
var __wakaru_koi_initialized = false;
export function koi() {
if (__wakaru_koi_initialized) return;
__wakaru_koi_initialized = true;
"use strict";
E(), LQ(), WAe(), DBt = class extends pTr {
    constructor(t){
        super(), this._textModel = t;
    }
    getValueOfRange(t) {
        return this._textModel.getValueInRange(t);
    }
    getLineLength(t) {
        return this._textModel.getLineLength(t);
    }
    get length() {
        const t = this._textModel.getLineCount(), e = this._textModel.getLineLength(t);
        return new N5(t - 1, e);
    }
};

}
