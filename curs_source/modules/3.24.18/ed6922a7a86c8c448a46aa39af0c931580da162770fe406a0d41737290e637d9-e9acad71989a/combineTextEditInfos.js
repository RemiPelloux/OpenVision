import { dr } from "./arrays.js";
import { wvi } from "./beforeEditPositionMapper.js";
import { WBe, uW } from "./length.js";
import { Qgn, Sle, lFc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Rvi;
export { Rvi };
var __wakaru_TFc_initialized = false;
export function TFc() {
if (__wakaru_TFc_initialized) return;
__wakaru_TFc_initialized = true;
"use strict";
x(), dr(), wvi(), WBe(), Rvi = class UXn {
    constructor(t, n, i){
        this.modified = t, this.lengthBefore = n, this.lengthAfter = i;
    }
    splitAt(t) {
        const n = Qgn(t, this.lengthAfter);
        return lFc(n, uW) ? [
            this,
            void 0
        ] : this.modified ? [
            new UXn(this.modified, this.lengthBefore, t),
            new UXn(this.modified, uW, n)
        ] : [
            new UXn(this.modified, t, t),
            new UXn(this.modified, n, n)
        ];
    }
    toString() {
        return `${this.modified ? "M" : "U"}:${Sle(this.lengthBefore)} -> ${Sle(this.lengthAfter)}`;
    }
};

}
