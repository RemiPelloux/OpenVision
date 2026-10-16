import { h } from "./tslib.es6.js";
var R4, C4, uUe;
export { C4, R4, uUe };
var __wakaru_I4_initialized = false;
export function I4() {
if (__wakaru_I4_initialized) return;
__wakaru_I4_initialized = true;
"use strict";
h(), uUe = class {
    constructor(e, t){
        this.toKey = t, this._map = new Map, this[R4] = "SetWithKey";
        for (const n of e)this.add(n);
    }
    get size() {
        return this._map.size;
    }
    add(e) {
        const t = this.toKey(e);
        return this._map.set(t, e), this;
    }
    delete(e) {
        return this._map.delete(this.toKey(e));
    }
    has(e) {
        return this._map.has(this.toKey(e));
    }
    *entries() {
        for (const e of this._map.values())yield [
            e,
            e
        ];
    }
    keys() {
        return this.values();
    }
    *values() {
        for (const e of this._map.values())yield e;
    }
    clear() {
        this._map.clear();
    }
    forEach(e, t) {
        this._map.forEach((n)=>e.call(t, n, n, this));
    }
    [(C4 = Symbol.iterator, R4 = Symbol.toStringTag, C4)]() {
        return this.values();
    }
};

}
