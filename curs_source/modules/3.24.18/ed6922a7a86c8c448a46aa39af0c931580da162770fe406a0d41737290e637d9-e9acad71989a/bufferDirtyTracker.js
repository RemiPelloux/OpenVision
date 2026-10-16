import { x } from "./tslib.es6.js";
var R6c;
export { R6c };
var __wakaru_O_g_initialized = false;
export function O_g() {
if (__wakaru_O_g_initialized) return;
__wakaru_O_g_initialized = true;
"use strict";
x(), R6c = class {
    get dataOffset() {
        return this._startIndex;
    }
    get dirtySize() {
        if (!(this._startIndex === void 0 || this._endIndex === void 0)) return this._endIndex - this._startIndex + 1;
    }
    get isDirty() {
        return this._startIndex !== void 0;
    }
    flag(e, t = 1) {
        return this._flag(e), t > 1 && this._flag(e + t - 1), e;
    }
    _flag(e) {
        (this._startIndex === void 0 || e < this._startIndex) && (this._startIndex = e), (this._endIndex === void 0 || e > this._endIndex) && (this._endIndex = e);
    }
    clear() {
        this._startIndex = void 0, this._endIndex = void 0;
    }
};

}
