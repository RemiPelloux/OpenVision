import { Q, ne } from "./instantiation.js";
import { h } from "./tslib.es6.js";
var Vpe, $pe, il, fO;
export { $pe, Vpe, fO, il };
var __wakaru__O_initialized = false;
export function _O() {
if (__wakaru__O_initialized) return;
__wakaru__O_initialized = true;
"use strict";
h(), ne(), Vpe = "cursor.shutdownHangWatchdog.darwinSigkillEnabled", $pe = "cursor.shutdownHangWatchdog.config", il = {
    perJoinerWarnMs: 2e3,
    fireOnWillShutdownTotalMs: 3e3,
    processExitTotalMs: 5e3
}, fO = Q("shutdownHangWatchdogService");

}
