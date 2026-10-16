import { x } from "./tslib.es6.js";
var SW, Fns;
export { Fns, SW };
var __wakaru_Ivn_initialized = false;
export function Ivn() {
if (__wakaru_Ivn_initialized) return;
__wakaru_Ivn_initialized = true;
"use strict";
x(), SW = class {
    constructor(e, t, n){
        this.changes = e, this.moves = t, this.hitTimeout = n;
    }
}, Fns = class Ukm {
    constructor(t, n){
        this.lineRangeMapping = t, this.changes = n;
    }
    flip() {
        return new Ukm(this.lineRangeMapping.flip(), this.changes.map((t)=>t.flip()));
    }
};

}
