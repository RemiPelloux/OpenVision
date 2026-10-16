import { E } from "./tslib.es6.js";
var gzo, DVd;
export { DVd, gzo };
var __wakaru_EOy_initialized = false;
export function EOy() {
if (__wakaru_EOy_initialized) return;
__wakaru_EOy_initialized = true;
"use strict";
E(), gzo = class {
    constructor(t, e, n){
        this.hoverParts = t, this.isComplete = e, this.options = n;
    }
    filter(t) {
        const e = this.hoverParts.filter((n)=>n.isValidForHoverAnchor(t));
        return e.length === this.hoverParts.length ? this : new DVd(this, e, this.isComplete, this.options);
    }
}, DVd = class extends gzo {
    constructor(t, e, n, i){
        super(e, n, i), this.original = t;
    }
    filter(t) {
        return this.original.filter(t);
    }
};

}
