import { E } from "./tslib.es6.js";
var YSm;
export { YSm };
var __wakaru_U91_initialized = false;
export function U91() {
if (__wakaru_U91_initialized) return;
__wakaru_U91_initialized = true;
"use strict";
E(), YSm = class {
    constructor(t = 0){
        this.nextId = t;
    }
    next() {
        return this.nextId++;
    }
    peekNext() {
        return this.nextId;
    }
    observe(t) {
        Number.isSafeInteger(t) && t >= this.nextId && (this.nextId = t + 1);
    }
};

}
