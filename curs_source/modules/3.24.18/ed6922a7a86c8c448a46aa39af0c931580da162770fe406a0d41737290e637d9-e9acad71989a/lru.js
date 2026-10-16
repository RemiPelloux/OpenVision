import { x } from "./tslib.es6.js";
var ITc;
export { ITc };
var __wakaru_Tcg_initialized = false;
export function Tcg() {
if (__wakaru_Tcg_initialized) return;
__wakaru_Tcg_initialized = true;
"use strict";
x(), ITc = class {
    constructor(e){
        this._maxSize = e, this._cache = new Map;
    }
    get size() {
        return this._cache.size;
    }
    get(e) {
        const t = this._cache.get(e);
        if (t !== void 0) return this._cache.delete(e), this._cache.set(e, t), t;
    }
    set(e, t) {
        if (this._cache.size >= this._maxSize) {
            const n = this._cache.keys().next().value;
            this._cache.delete(n);
        }
        this._cache.set(e, t);
    }
    remove(e) {
        const t = this._cache.get(e);
        return t && this._cache.delete(e), t;
    }
    clear() {
        this._cache.clear();
    }
    keys() {
        return Array.from(this._cache.keys());
    }
    values() {
        const e = [];
        return this._cache.forEach((t)=>e.push(t)), e;
    }
};

}
