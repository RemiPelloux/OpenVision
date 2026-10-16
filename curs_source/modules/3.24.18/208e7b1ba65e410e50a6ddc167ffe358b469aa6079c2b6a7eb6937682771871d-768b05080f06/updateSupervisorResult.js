import { h } from "./tslib.es6.js";
var Khe, zhe, Yhe;
export { Khe, Yhe, zhe };
var __wakaru_zJe_initialized = false;
export function zJe() {
if (__wakaru_zJe_initialized) return;
__wakaru_zJe_initialized = true;
"use strict";
h(), Khe = new Set([
    "overall_timeout",
    "version_mismatch",
    "shipit_install_cancelled",
    "shipit_install_error",
    "shipit_attempts_exhausted",
    "shipit_update_bundle_missing",
    "shipit_relaunch_failed"
]), zhe = new Set([
    "armed",
    "waitingForOldApp",
    "installing",
    "swapped",
    "restarting",
    "confirmed"
]), Yhe = /Error Domain=([A-Za-z][A-Za-z0-9_.]{0,80}) Code=(-?\d{1,10})\b/;

}
