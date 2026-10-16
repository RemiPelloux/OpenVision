import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var AHi, Ivd;
export { AHi, Ivd };
var __wakaru_rno_initialized = false;
export function rno() {
if (__wakaru_rno_initialized) return;
__wakaru_rno_initialized = true;
"use strict";
x(), Pn(), Ze(), AHi = pd("reactiveStorageSinglePassStringifyGate"), Ivd = class {
    constructor(){
        this.isEnabled = !1;
    }
    set(e) {
        this.isEnabled = e;
    }
}, mn(AHi, Ivd, 1, 1);

}
