import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var b_r, rcd;
export { b_r, rcd };
var __wakaru_MPo_initialized = false;
export function MPo() {
if (__wakaru_MPo_initialized) return;
__wakaru_MPo_initialized = true;
"use strict";
E(), Rn(), It(), b_r = Il("reactiveStorageSinglePassStringifyGate"), rcd = class {
    constructor(){
        this.isEnabled = !1;
    }
    set(t) {
        this.isEnabled = t;
    }
}, bn(b_r, rcd, 1, 1);

}
