import { li } from "./network.js";
import { x } from "./tslib.es6.js";
var zge;
export { zge };
var __wakaru_MO_initialized = false;
export function MO() {
if (__wakaru_MO_initialized) return;
__wakaru_MO_initialized = true;
"use strict";
x(), li(), zge = class {
    constructor(){
        this._parts = [];
    }
    push(...e) {
        this._parts.push(...e);
    }
    join(e = `
`) {
        return this._parts.join(e);
    }
};

}
