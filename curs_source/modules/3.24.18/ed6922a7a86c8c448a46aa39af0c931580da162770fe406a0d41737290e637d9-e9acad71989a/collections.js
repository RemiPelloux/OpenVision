import { x } from "./tslib.es6.js";
var REc, DEc, MEc;
export { DEc, MEc, REc };
var __wakaru_lge_initialized = false;
export function lge() {
if (__wakaru_lge_initialized) return;
__wakaru_lge_initialized = true;
"use strict";
x(), MEc = class {
    constructor(e, t){
        this.toKey = t, this._map = new Map, this[REc] = "SetWithKey";
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
    [(DEc = Symbol.iterator, REc = Symbol.toStringTag, DEc)]() {
        return this.values();
    }
};

}
