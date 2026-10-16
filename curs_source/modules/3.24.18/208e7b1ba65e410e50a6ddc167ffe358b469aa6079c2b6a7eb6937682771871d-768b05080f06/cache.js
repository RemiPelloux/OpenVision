import { Mt } from "./cancellation.js";
import { h } from "./tslib.es6.js";
function CUe(e) {
    return e;
}
var u5;
export { CUe, u5 };
var __wakaru_IUe_initialized = false;
export function IUe() {
if (__wakaru_IUe_initialized) return;
__wakaru_IUe_initialized = true;
"use strict";
h(), Mt(), u5 = class {
    constructor(e, t){
        this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = CUe) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get(e) {
        const t = this._computeKey(e);
        return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
    }
};

}
