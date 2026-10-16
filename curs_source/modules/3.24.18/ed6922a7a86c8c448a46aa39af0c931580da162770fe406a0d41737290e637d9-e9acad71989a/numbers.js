import { C0 } from "./assert.js";
import { x } from "./tslib.es6.js";
var Kzr, UAc;
export { Kzr, UAc };
var __wakaru_cR_initialized = false;
export function cR() {
if (__wakaru_cR_initialized) return;
__wakaru_cR_initialized = true;
"use strict";
x(), C0(), Kzr = class {
    constructor(){
        this._n = 1, this._val = 0;
    }
    update(e) {
        return this._val = this._val + (e - this._val) / this._n, this._n += 1, this._val;
    }
    get value() {
        return this._val;
    }
}, UAc = class {
    constructor(e){
        this._n = 0, this._val = 0, this._values = [], this._index = 0, this._sum = 0, this._values = new Array(e), this._values.fill(0, 0, e);
    }
    update(e) {
        const t = this._values[this._index];
        return this._values[this._index] = e, this._index = (this._index + 1) % this._values.length, this._sum -= t, this._sum += e, this._n < this._values.length && (this._n += 1), this._val = this._sum / this._n, this._val;
    }
    get value() {
        return this._val;
    }
};

}
