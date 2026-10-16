import { mXu } from "./Iwo.js";
import { yo } from "./cancellation.js";
import { E } from "./tslib.es6.js";
var gXu, tZn;
export { gXu, tZn };
var __wakaru_wCo_initialized = false;
export function wCo() {
if (__wakaru_wCo_initialized) return;
__wakaru_wCo_initialized = true;
"use strict";
E(), yo(), gXu = class {
    constructor(t, e){
        this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = mXu) : (this._fn = e, this._computeKey = t.getCacheKey);
    }
    get(t) {
        const e = this._computeKey(t);
        return this.lastArgKey !== e && (this.lastArgKey = e, this.lastCache = this._fn(t)), this.lastCache;
    }
}, tZn = class {
    constructor(t, e){
        this._map = new Map, this._map2 = new Map, typeof t == "function" ? (this._fn = t, this._computeKey = mXu) : (this._fn = e, this._computeKey = t.getCacheKey);
    }
    get cachedValues() {
        return this._map;
    }
    get(t) {
        const e = this._computeKey(t);
        if (this._map2.has(e)) return this._map2.get(e);
        const n = this._fn(t);
        return this._map.set(t, n), this._map2.set(e, n), n;
    }
};

}
