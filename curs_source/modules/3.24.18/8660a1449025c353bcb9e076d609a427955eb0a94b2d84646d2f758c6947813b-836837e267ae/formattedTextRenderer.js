import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
var iGd;
export { iGd };
var __wakaru_tTr_initialized = false;
export function tTr() {
if (__wakaru_tTr_initialized) return;
__wakaru_tTr_initialized = true;
"use strict";
E(), Hn(), iGd = class {
    constructor(t){
        this.source = t, this.index = 0;
    }
    eos() {
        return this.index >= this.source.length;
    }
    next() {
        const t = this.peek();
        return this.advance(), t;
    }
    peek() {
        return this.source[this.index];
    }
    advance() {
        this.index++;
    }
};

}
