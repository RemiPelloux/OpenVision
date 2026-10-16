import { E } from "./tslib.es6.js";
var T7;
export { T7 };
var __wakaru_lMy_initialized = false;
export function lMy() {
if (__wakaru_lMy_initialized) return;
__wakaru_lMy_initialized = true;
"use strict";
E(), T7 = class {
    constructor(t, e, n, i){
        this.endIndex = t, this.type = e, this.metadata = n, this.containsRTL = i, this._linePartBrand = void 0;
    }
    isWhitespace() {
        return !!(this.metadata & 1);
    }
    isPseudoAfter() {
        return !!(this.metadata & 4);
    }
};

}
