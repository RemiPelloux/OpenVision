import { Wns, tyi } from "./defaultLinesDiffComputer.js";
import { Qwu, Xwu } from "./legacyLinesDiffComputer.js";
import { x } from "./tslib.es6.js";
var vee;
export { vee };
var __wakaru_lyt_initialized = false;
export function lyt() {
if (__wakaru_lyt_initialized) return;
__wakaru_lyt_initialized = true;
"use strict";
x(), Qwu(), Wns(), vee = {
    getLegacy: ()=>new Xwu,
    getDefault: ()=>new tyi
};

}
