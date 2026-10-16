import { E } from "./tslib.es6.js";
var YVu;
export { YVu };
var __wakaru_dvy_initialized = false;
export function dvy() {
if (__wakaru_dvy_initialized) return;
__wakaru_dvy_initialized = true;
"use strict";
E(), YVu = class {
    constructor(t){
        this._maxSize = t, this._cache = new Map;
    }
    get size() {
        return this._cache.size;
    }
    get(t) {
        const e = this._cache.get(t);
        if (e !== void 0) return this._cache.delete(t), this._cache.set(t, e), e;
    }
    set(t, e) {
        if (this._cache.size >= this._maxSize) {
            const n = this._cache.keys().next().value;
            this._cache.delete(n);
        }
        this._cache.set(t, e);
    }
    remove(t) {
        const e = this._cache.get(t);
        return e && this._cache.delete(t), e;
    }
    clear() {
        this._cache.clear();
    }
    keys() {
        return Array.from(this._cache.keys());
    }
    values() {
        const t = [];
        return this._cache.forEach((e)=>t.push(e)), t;
    }
};

}
