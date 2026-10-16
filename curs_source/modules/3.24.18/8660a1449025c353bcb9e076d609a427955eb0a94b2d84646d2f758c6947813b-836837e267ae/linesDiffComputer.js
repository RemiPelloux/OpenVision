import { E } from "./tslib.es6.js";
var OQ, HGo;
export { HGo, OQ };
var __wakaru_ioi_initialized = false;
export function ioi() {
if (__wakaru_ioi_initialized) return;
__wakaru_ioi_initialized = true;
"use strict";
E(), OQ = class {
    constructor(t, e, n){
        this.changes = t, this.moves = e, this.hitTimeout = n;
    }
}, HGo = class uRb {
    constructor(e, n){
        this.lineRangeMapping = e, this.changes = n;
    }
    flip() {
        return new uRb(this.lineRangeMapping.flip(), this.changes.map((e)=>e.flip()));
    }
};

}
