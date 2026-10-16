import { bo } from "./arrays.js";
import { a0r } from "./beforeEditPositionMapper.js";
import { Ftt, IQ } from "./length.js";
import { E } from "./tslib.es6.js";
import { BBd, Dri, hwe } from "./ze.js";
var m0r;
export { m0r };
var __wakaru_e8d_initialized = false;
export function e8d() {
if (__wakaru_e8d_initialized) return;
__wakaru_e8d_initialized = true;
"use strict";
E(), bo(), a0r(), Ftt(), m0r = class kZi {
    constructor(e, n, i){
        this.modified = e, this.lengthBefore = n, this.lengthAfter = i;
    }
    splitAt(e) {
        const n = Dri(e, this.lengthAfter);
        return BBd(n, IQ) ? [
            this,
            void 0
        ] : this.modified ? [
            new kZi(this.modified, this.lengthBefore, e),
            new kZi(this.modified, IQ, n)
        ] : [
            new kZi(this.modified, e, e),
            new kZi(this.modified, n, n)
        ];
    }
    toString() {
        return `${this.modified ? "M" : "U"}:${hwe(this.lengthBefore)} -> ${hwe(this.lengthAfter)}`;
    }
};

}
