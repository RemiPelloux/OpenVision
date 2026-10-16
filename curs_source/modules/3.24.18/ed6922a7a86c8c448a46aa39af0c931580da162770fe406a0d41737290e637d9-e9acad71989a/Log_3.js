import { Q$i } from "./A3u.js";
import { x } from "./tslib.es6.js";
var Kgd, Ygd, Xgd, Zgd, pHt, lto, $E;
export { $E, Kgd, Xgd, Ygd, Zgd, lto, pHt };
var __wakaru_Pee_initialized = false;
export function Pee() {
if (__wakaru_Pee_initialized) return;
__wakaru_Pee_initialized = true;
"use strict";
x(), Kgd = " DEBUG ", Ygd = "  INFO ", Xgd = "  WARN ", Zgd = " ERROR ", pHt = {
    None: 0,
    Error: 1,
    Warn: 2,
    Info: 3,
    Debug: 4
}, lto = class pQn {
    static info(...t) {
        pQn.level >= pHt.Info && console.info(Ygd, ...Q$i(t));
    }
    static debug(...t) {
        pQn.level >= pHt.Debug && console.debug(Kgd, ...Q$i(t));
    }
    static warn(...t) {
        pQn.level >= pHt.Warn && console.warn(Xgd, ...Q$i(t));
    }
    static error(...t) {
        pQn.level >= pHt.Error && console.error(Zgd, ...Q$i(t));
    }
}, lto.level = pHt.Warn, $E = lto;

}
