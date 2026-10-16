import { x } from "./tslib.es6.js";
var NHc;
export { NHc };
var __wakaru_bkg_initialized = false;
export function bkg() {
if (__wakaru_bkg_initialized) return;
__wakaru_bkg_initialized = true;
"use strict";
x(), NHc = class {
    constructor(e, t = 0, n = e.length, i = t - 1){
        this.items = e, this.start = t, this.end = n, this.index = i;
    }
    current() {
        return this.index === this.start - 1 || this.index === this.end ? null : this.items[this.index];
    }
    next() {
        return this.index = Math.min(this.index + 1, this.end), this.current();
    }
    previous() {
        return this.index = Math.max(this.index - 1, this.start - 1), this.current();
    }
    first() {
        return this.index = this.start, this.current();
    }
    last() {
        return this.index = this.end - 1, this.current();
    }
};

}
