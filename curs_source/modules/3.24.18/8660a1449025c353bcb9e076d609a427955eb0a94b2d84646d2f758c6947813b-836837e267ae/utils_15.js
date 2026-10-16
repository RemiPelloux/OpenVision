import { _Y, vu } from "./actions.js";
import { E } from "./tslib.es6.js";
var wqo;
export { wqo };
var __wakaru_vzd_initialized = false;
export function vzd() {
if (__wakaru_vzd_initialized) return;
__wakaru_vzd_initialized = true;
"use strict";
E(), vu(), wqo = class extends _Y {
    constructor(t){
        super(), this._getContext = t;
    }
    runAction(t, e) {
        const n = this._getContext();
        return super.runAction(t, n);
    }
};

}
