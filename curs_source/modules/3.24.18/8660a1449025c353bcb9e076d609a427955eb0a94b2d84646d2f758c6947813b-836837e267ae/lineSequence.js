import { Cw } from "./charCode.js";
import { E } from "./tslib.es6.js";
import { Lqd } from "./ze.js";
var zGo;
export { zGo };
var __wakaru_tLy_initialized = false;
export function tLy() {
if (__wakaru_tLy_initialized) return;
__wakaru_tLy_initialized = true;
"use strict";
E(), Cw(), zGo = class {
    constructor(t, e){
        this.trimmedHash = t, this.lines = e;
    }
    getElement(t) {
        return this.trimmedHash[t];
    }
    get length() {
        return this.trimmedHash.length;
    }
    getBoundaryScore(t) {
        const e = t === 0 ? 0 : Lqd(this.lines[t - 1]), n = t === this.lines.length ? 0 : Lqd(this.lines[t]);
        return 1e3 - (e + n);
    }
    getText(t) {
        return this.lines.slice(t.start, t.endExclusive).join(`
`);
    }
    isStronglyEqual(t, e) {
        return this.lines[t] === this.lines[e];
    }
};

}
