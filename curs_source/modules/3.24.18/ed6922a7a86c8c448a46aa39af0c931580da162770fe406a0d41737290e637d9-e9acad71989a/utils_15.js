import { Vo, lA } from "./actions.js";
import { x } from "./tslib.es6.js";
var _is;
export { _is };
var __wakaru_W7c_initialized = false;
export function W7c() {
if (__wakaru_W7c_initialized) return;
__wakaru_W7c_initialized = true;
"use strict";
x(), Vo(), _is = class extends lA {
    constructor(e){
        super(), this._getContext = e;
    }
    runAction(e, t) {
        const n = this._getContext();
        return super.runAction(e, n);
    }
};

}
