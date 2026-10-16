import { Hxc } from "./HVr.js";
import { Ar, Eo } from "./cancellation.js";
import { x } from "./tslib.es6.js";
var dmi, Oqr, vNt;
export { Oqr, dmi, vNt };
var __wakaru_Upn_initialized = false;
export function Upn() {
if (__wakaru_Upn_initialized) return;
__wakaru_Upn_initialized = true;
"use strict";
x(), Ar(), dmi = class {
    constructor(e){
        this.task = e, this.result = null;
    }
    get() {
        if (this.result) return this.result;
        const e = new Eo, t = this.task(e.token);
        return this.result = {
            promise: t,
            dispose: ()=>{
                this.result = null, e.cancel(), e.dispose();
            }
        }, this.result;
    }
}, Oqr = class {
    constructor(e, t){
        this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = Hxc) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get(e) {
        const t = this._computeKey(e);
        return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
    }
}, vNt = class {
    constructor(e, t){
        this._map = new Map, this._map2 = new Map, typeof e == "function" ? (this._fn = e, this._computeKey = Hxc) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get cachedValues() {
        return this._map;
    }
    get(e) {
        const t = this._computeKey(e);
        if (this._map2.has(t)) return this._map2.get(t);
        const n = this._fn(e);
        return this._map.set(e, n), this._map2.set(t, n), n;
    }
};

}
