import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
var eRe;
export { eRe };
var __wakaru_NQ_initialized = false;
export function NQ() {
if (__wakaru_NQ_initialized) return;
__wakaru_NQ_initialized = true;
"use strict";
E(), Ki(), eRe = class {
    constructor(){
        this._parts = [];
    }
    push(...t) {
        this._parts.push(...t);
    }
    join(t = `
`) {
        return this._parts.join(t);
    }
};

}
