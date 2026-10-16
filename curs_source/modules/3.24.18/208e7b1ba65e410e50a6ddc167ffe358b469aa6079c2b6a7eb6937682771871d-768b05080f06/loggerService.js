import { r6, te } from "./log.js";
import { Cpe, cYe } from "./spdlogLog.js";
import { h } from "./tslib.es6.js";
import { Wn, vt } from "./uuid.js";
var Ipe;
export { Ipe };
var __wakaru_lYe_initialized = false;
export function lYe() {
if (__wakaru_lYe_initialized) return;
__wakaru_lYe_initialized = true;
"use strict";
h(), Wn(), te(), cYe(), Ipe = class extends r6 {
    doCreateLogger(e, t, n) {
        return new Cpe(vt(), e.fsPath, !n?.donotRotate, !!n?.donotUseFormatters, t);
    }
};

}
