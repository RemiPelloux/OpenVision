import { Zt } from "./cancellation.js";
import { w } from "./tslib.es6.js";
function wa(e) {
    return e;
}
var ui;
export { ui, wa };
var __wakaru_ba_initialized = false;
export function ba() {
if (__wakaru_ba_initialized) return;
__wakaru_ba_initialized = true;
"use strict";
w(), Zt(), ui = class {
    constructor(e, t){
        this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = wa) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get(e) {
        const t = this._computeKey(e);
        return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
    }
};

}
