import { E } from "./tslib.es6.js";
var JKu, eYu, tYu;
export { JKu, eYu, tYu };
var __wakaru_YFt_initialized = false;
export function YFt() {
if (__wakaru_YFt_initialized) return;
__wakaru_YFt_initialized = true;
"use strict";
E(), tYu = class {
    constructor(t, e){
        this.toKey = e, this._map = new Map, this[JKu] = "SetWithKey";
        for (const n of t)this.add(n);
    }
    get size() {
        return this._map.size;
    }
    add(t) {
        const e = this.toKey(t);
        return this._map.set(e, t), this;
    }
    delete(t) {
        return this._map.delete(this.toKey(t));
    }
    has(t) {
        return this._map.has(this.toKey(t));
    }
    *entries() {
        for (const t of this._map.values())yield [
            t,
            t
        ];
    }
    keys() {
        return this.values();
    }
    *values() {
        for (const t of this._map.values())yield t;
    }
    clear() {
        this._map.clear();
    }
    forEach(t, e) {
        this._map.forEach((n)=>t.call(e, n, n, this));
    }
    [(eYu = Symbol.iterator, JKu = Symbol.toStringTag, eYu)]() {
        return this.values();
    }
};

}
