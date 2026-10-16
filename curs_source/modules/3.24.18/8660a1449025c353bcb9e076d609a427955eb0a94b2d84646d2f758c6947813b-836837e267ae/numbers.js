import { YE } from "./assert.js";
import { E } from "./tslib.es6.js";
var a7o, POd;
export { POd, a7o };
var __wakaru_b4_initialized = false;
export function b4() {
if (__wakaru_b4_initialized) return;
__wakaru_b4_initialized = true;
"use strict";
E(), YE(), a7o = class {
    constructor(){
        this._n = 1, this._val = 0;
    }
    update(t) {
        return this._val = this._val + (t - this._val) / this._n, this._n += 1, this._val;
    }
    get value() {
        return this._val;
    }
}, POd = class {
    constructor(t){
        this._n = 0, this._val = 0, this._values = [], this._index = 0, this._sum = 0, this._values = new Array(t), this._values.fill(0, 0, t);
    }
    update(t) {
        const e = this._values[this._index];
        return this._values[this._index] = t, this._index = (this._index + 1) % this._values.length, this._sum -= e, this._sum += t, this._n < this._values.length && (this._n += 1), this._val = this._sum / this._n, this._val;
    }
    get value() {
        return this._val;
    }
};

}
