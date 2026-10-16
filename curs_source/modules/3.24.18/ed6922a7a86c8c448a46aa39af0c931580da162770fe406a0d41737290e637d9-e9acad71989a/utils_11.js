import { x } from "./tslib.es6.js";
var lDc;
export { lDc };
var __wakaru_Shg_initialized = false;
export function Shg() {
if (__wakaru_Shg_initialized) return;
__wakaru_Shg_initialized = true;
"use strict";
x(), lDc = class {
    constructor(){
        this._timeout = void 0;
    }
    throttle(e, t) {
        this._timeout === void 0 && (this._timeout = setTimeout(()=>{
            this._timeout = void 0, e();
        }, t));
    }
    dispose() {
        this._timeout !== void 0 && clearTimeout(this._timeout);
    }
};

}
