import { Qe, st } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Gjo;
export { Gjo };
var __wakaru_u8d_initialized = false;
export function u8d() {
if (__wakaru_u8d_initialized) return;
__wakaru_u8d_initialized = true;
"use strict";
E(), Qe(), Gjo = class extends st {
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
