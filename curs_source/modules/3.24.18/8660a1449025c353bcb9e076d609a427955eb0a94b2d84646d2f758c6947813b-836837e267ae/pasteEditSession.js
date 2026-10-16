import { Qe, Vn, st } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Uzd;
export { Uzd };
var __wakaru_NLy_initialized = false;
export function NLy() {
if (__wakaru_NLy_initialized) return;
__wakaru_NLy_initialized = true;
"use strict";
E(), Qe(), Uzd = class IRb extends st {
    constructor(e, n){
        super(), this.edits = e, this._disposables = this._register(new Vn), this._disposables.value = n;
    }
    take() {
        return new IRb(this.edits, this._disposables.clearAndLeak());
    }
};

}
