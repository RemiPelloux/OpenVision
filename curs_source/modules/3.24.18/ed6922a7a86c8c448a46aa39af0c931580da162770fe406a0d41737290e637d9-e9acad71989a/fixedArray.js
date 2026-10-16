import { xpn } from "./HVr.js";
import { dr } from "./arrays.js";
import { vfg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var d3c;
export { d3c };
var __wakaru__fg_initialized = false;
export function _fg() {
if (__wakaru__fg_initialized) return;
__wakaru__fg_initialized = true;
"use strict";
x(), dr(), d3c = class {
    constructor(e){
        this._default = e, this._store = [];
    }
    get(e) {
        return e < this._store.length ? this._store[e] : this._default;
    }
    set(e, t) {
        for(; e >= this._store.length;)this._store[this._store.length] = this._default;
        this._store[e] = t;
    }
    replace(e, t, n) {
        if (e >= this._store.length) return;
        if (t === 0) {
            this.insert(e, n);
            return;
        } else if (n === 0) {
            this.delete(e, t);
            return;
        }
        const i = this._store.slice(0, e), r = this._store.slice(e + t), s = vfg(n, this._default);
        this._store = i.concat(s, r);
    }
    delete(e, t) {
        t === 0 || e >= this._store.length || this._store.splice(e, t);
    }
    insert(e, t) {
        if (t === 0 || e >= this._store.length) return;
        const n = [];
        for(let i = 0; i < t; i++)n[i] = this._default;
        this._store = xpn(this._store, e, n);
    }
};

}
