import { imi } from "./HVr.js";
import { wxc } from "./nls.messages.js";
import { x } from "./tslib.es6.js";
var Txc;
export { Txc };
var __wakaru_rt_initialized = false;
export function rt() {
if (__wakaru_rt_initialized) return;
__wakaru_rt_initialized = true;
"use strict";
x(), wxc(), wxc(), Txc = imi() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;

}
