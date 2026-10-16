import { en } from "./dom_2.js";
import { x } from "./tslib.es6.js";
var BUc;
export { BUc };
var __wakaru_mvn_initialized = false;
export function mvn() {
if (__wakaru_mvn_initialized) return;
__wakaru_mvn_initialized = true;
"use strict";
x(), en(), BUc = class {
    constructor(e){
        this.source = e, this.index = 0;
    }
    eos() {
        return this.index >= this.source.length;
    }
    next() {
        const e = this.peek();
        return this.advance(), e;
    }
    peek() {
        return this.source[this.index];
    }
    advance() {
        this.index++;
    }
};

}
