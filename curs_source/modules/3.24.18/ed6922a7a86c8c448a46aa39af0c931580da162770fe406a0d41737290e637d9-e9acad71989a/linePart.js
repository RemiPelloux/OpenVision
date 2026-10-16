import { x } from "./tslib.es6.js";
var k3;
export { k3 };
var __wakaru_gvg_initialized = false;
export function gvg() {
if (__wakaru_gvg_initialized) return;
__wakaru_gvg_initialized = true;
"use strict";
x(), k3 = class {
    constructor(e, t, n, i){
        this.endIndex = e, this.type = t, this.metadata = n, this.containsRTL = i, this._linePartBrand = void 0;
    }
    isWhitespace() {
        return !!(this.metadata & 1);
    }
    isPseudoAfter() {
        return !!(this.metadata & 4);
    }
};

}
