import { E } from "./tslib.es6.js";
import { MOd } from "./ze.js";
var eB, c7o, Ekr, u7o, d7o;
export { Ekr, c7o, d7o, eB, u7o };
var __wakaru_btt_initialized = false;
export function btt() {
if (__wakaru_btt_initialized) return;
__wakaru_btt_initialized = true;
"use strict";
E(), eB = class {
    constructor(t, e, n){
        this.owner = t, this.debugNameSource = e, this.referenceFn = n;
    }
    getDebugName(t) {
        return MOd(t, this);
    }
}, c7o = new Map, Ekr = new WeakMap, u7o = new Map, d7o = new WeakMap;

}
