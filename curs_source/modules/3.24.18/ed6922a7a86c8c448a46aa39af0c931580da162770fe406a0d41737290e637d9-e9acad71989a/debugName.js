import { WRc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var EO, XKr, Cgi, ZKr, QKr;
export { Cgi, EO, QKr, XKr, ZKr };
var __wakaru_uBe_initialized = false;
export function uBe() {
if (__wakaru_uBe_initialized) return;
__wakaru_uBe_initialized = true;
"use strict";
x(), EO = class {
    constructor(e, t, n){
        this.owner = e, this.debugNameSource = t, this.referenceFn = n;
    }
    getDebugName(e) {
        return WRc(e, this);
    }
}, XKr = new Map, Cgi = new WeakMap, ZKr = new Map, QKr = new WeakMap;

}
