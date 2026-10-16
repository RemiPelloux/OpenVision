import { x } from "./tslib.es6.js";
var yPd;
export { yPd };
var __wakaru_$Cv_initialized = false;
export function $Cv() {
if (__wakaru_$Cv_initialized) return;
__wakaru_$Cv_initialized = true;
"use strict";
x(), yPd = class {
    constructor(e = 0){
        this.nextId = e;
    }
    next() {
        return this.nextId++;
    }
    peekNext() {
        return this.nextId;
    }
    observe(e) {
        Number.isSafeInteger(e) && e >= this.nextId && (this.nextId = e + 1);
    }
};

}
