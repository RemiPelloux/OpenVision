import { Se, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var PQr;
export { PQr };
var __wakaru_NFc_initialized = false;
export function NFc() {
if (__wakaru_NFc_initialized) return;
__wakaru_NFc_initialized = true;
"use strict";
x(), Se(), PQr = class extends we {
    constructor(){
        super(...arguments), this._isDisposed = !1;
    }
    dispose() {
        super.dispose(), this._isDisposed = !0;
    }
    assertNotDisposed() {
        if (this._isDisposed) throw new Error("TextModelPart is disposed!");
    }
};

}
