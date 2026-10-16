import { x } from "./tslib.es6.js";
var Wis, H$c;
export { H$c, Wis };
var __wakaru_jSg_initialized = false;
export function jSg() {
if (__wakaru_jSg_initialized) return;
__wakaru_jSg_initialized = true;
"use strict";
x(), Wis = class {
    constructor(e, t, n){
        this.hoverParts = e, this.isComplete = t, this.options = n;
    }
    filter(e) {
        const t = this.hoverParts.filter((n)=>n.isValidForHoverAnchor(e));
        return t.length === this.hoverParts.length ? this : new H$c(this, t, this.isComplete, this.options);
    }
}, H$c = class extends Wis {
    constructor(e, t, n, i){
        super(t, n, i), this.original = e;
    }
    filter(e) {
        return this.original.filter(e);
    }
};

}
