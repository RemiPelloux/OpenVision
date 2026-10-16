import { qXn } from "./Iwo.js";
import { bo } from "./arrays.js";
import { E } from "./tslib.es6.js";
import { SPy } from "./ze.js";
var U8d;
export { U8d };
var __wakaru_kPy_initialized = false;
export function kPy() {
if (__wakaru_kPy_initialized) return;
__wakaru_kPy_initialized = true;
"use strict";
E(), bo(), U8d = class {
    constructor(t){
        this._default = t, this._store = [];
    }
    get(t) {
        return t < this._store.length ? this._store[t] : this._default;
    }
    set(t, e) {
        for(; t >= this._store.length;)this._store[this._store.length] = this._default;
        this._store[t] = e;
    }
    replace(t, e, n) {
        if (t >= this._store.length) return;
        if (e === 0) {
            this.insert(t, n);
            return;
        } else if (n === 0) {
            this.delete(t, e);
            return;
        }
        const i = this._store.slice(0, t), r = this._store.slice(t + e), s = SPy(n, this._default);
        this._store = i.concat(s, r);
    }
    delete(t, e) {
        e === 0 || t >= this._store.length || this._store.splice(t, e);
    }
    insert(t, e) {
        if (e === 0 || t >= this._store.length) return;
        const n = [];
        for(let i = 0; i < e; i++)n[i] = this._default;
        this._store = qXn(this._store, t, n);
    }
};

}
