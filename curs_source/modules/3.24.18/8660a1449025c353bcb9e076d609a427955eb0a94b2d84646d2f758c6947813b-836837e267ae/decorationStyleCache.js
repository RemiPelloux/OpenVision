import { du, zXn } from "./map.js";
import { E } from "./tslib.es6.js";
var X$d;
export { X$d };
var __wakaru_ODy_initialized = false;
export function ODy() {
if (__wakaru_ODy_initialized) return;
__wakaru_ODy_initialized = true;
"use strict";
E(), du(), X$d = class {
    constructor(){
        this._nextId = 1, this._cacheById = new Map, this._cacheByStyle = new zXn;
    }
    getOrCreateEntry(t, e, n) {
        if (t === void 0 && e === void 0 && n === void 0) return 0;
        const i = this._cacheByStyle.get(t ?? 0, e ? 1 : 0, n === void 0 ? "" : n.toFixed(2));
        if (i) return i.id;
        const r = this._nextId++, s = {
            id: r,
            color: t,
            bold: e,
            opacity: n
        };
        return this._cacheById.set(r, s), this._cacheByStyle.set(s, t ?? 0, e ? 1 : 0, n === void 0 ? "" : n.toFixed(2)), r;
    }
    getStyleSet(t) {
        if (t !== 0) return this._cacheById.get(t);
    }
};

}
