import { qy } from "./charCode.js";
import { a7c } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Hns;
export { Hns };
var __wakaru_aSg_initialized = false;
export function aSg() {
if (__wakaru_aSg_initialized) return;
__wakaru_aSg_initialized = true;
"use strict";
x(), qy(), Hns = class {
    constructor(e, t){
        this.trimmedHash = e, this.lines = t;
    }
    getElement(e) {
        return this.trimmedHash[e];
    }
    get length() {
        return this.trimmedHash.length;
    }
    getBoundaryScore(e) {
        const t = e === 0 ? 0 : a7c(this.lines[e - 1]), n = e === this.lines.length ? 0 : a7c(this.lines[e]);
        return 1e3 - (t + n);
    }
    getText(e) {
        return this.lines.slice(e.start, e.endExclusive).join(`
`);
    }
    isStronglyEqual(e, t) {
        return this.lines[e] === this.lines[t];
    }
};

}
