import { E } from "./tslib.es6.js";
var QOd;
export { QOd };
var __wakaru_Nxy_initialized = false;
export function Nxy() {
if (__wakaru_Nxy_initialized) return;
__wakaru_Nxy_initialized = true;
"use strict";
E(), QOd = class {
    constructor(){
        this._timeout = void 0;
    }
    throttle(t, e) {
        this._timeout === void 0 && (this._timeout = setTimeout(()=>{
            this._timeout = void 0, t();
        }, e));
    }
    dispose() {
        this._timeout !== void 0 && clearTimeout(this._timeout);
    }
};

}
