import { Apn, oc } from "./map.js";
import { x } from "./tslib.es6.js";
var O6c;
export { O6c };
var __wakaru_G_g_initialized = false;
export function G_g() {
if (__wakaru_G_g_initialized) return;
__wakaru_G_g_initialized = true;
"use strict";
x(), oc(), O6c = class {
    constructor(){
        this._nextId = 1, this._cacheById = new Map, this._cacheByStyle = new Apn;
    }
    getOrCreateEntry(e, t, n) {
        if (e === void 0 && t === void 0 && n === void 0) return 0;
        const i = this._cacheByStyle.get(e ?? 0, t ? 1 : 0, n === void 0 ? "" : n.toFixed(2));
        if (i) return i.id;
        const r = this._nextId++, s = {
            id: r,
            color: e,
            bold: t,
            opacity: n
        };
        return this._cacheById.set(r, s), this._cacheByStyle.set(s, e ?? 0, t ? 1 : 0, n === void 0 ? "" : n.toFixed(2)), r;
    }
    getStyleSet(e) {
        if (e !== 0) return this._cacheById.get(e);
    }
};

}
