import { igr } from "./SZu.js";
import { E } from "./tslib.es6.js";
var NQu, LQu, OQu, FQu, qdn, jTo, QR;
export { FQu, LQu, NQu, OQu, QR, jTo, qdn };
var __wakaru_Nde_initialized = false;
export function Nde() {
if (__wakaru_Nde_initialized) return;
__wakaru_Nde_initialized = true;
"use strict";
E(), NQu = " DEBUG ", LQu = "  INFO ", OQu = "  WARN ", FQu = " ERROR ", qdn = {
    None: 0,
    Error: 1,
    Warn: 2,
    Info: 3,
    Debug: 4
}, jTo = class aXi {
    static info(...e) {
        aXi.level >= qdn.Info && console.info(LQu, ...igr(e));
    }
    static debug(...e) {
        aXi.level >= qdn.Debug && console.debug(NQu, ...igr(e));
    }
    static warn(...e) {
        aXi.level >= qdn.Warn && console.warn(OQu, ...igr(e));
    }
    static error(...e) {
        aXi.level >= qdn.Error && console.error(FQu, ...igr(e));
    }
}, jTo.level = qdn.Warn, QR = jTo;

}
