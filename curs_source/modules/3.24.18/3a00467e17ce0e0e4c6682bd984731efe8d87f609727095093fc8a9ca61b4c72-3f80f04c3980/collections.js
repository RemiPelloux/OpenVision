import { w } from "./tslib.es6.js";
var rs, ss, Fo;
export { Fo, rs, ss };
var __wakaru_is_initialized = false;
export function is() {
if (__wakaru_is_initialized) return;
__wakaru_is_initialized = true;
"use strict";
w(), Fo = class {
    constructor(e, t){
        this.toKey = t, this._map = new Map, this[rs] = "SetWithKey";
        for (const r of e)this.add(r);
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
        this._map.forEach((r)=>e.call(t, r, r, this));
    }
    [(ss = Symbol.iterator, rs = Symbol.toStringTag, ss)]() {
        return this.values();
    }
};

}
