import { Qbn } from "./control-tone.js";
import { x } from "./tslib.es6.js";
var mYc, gYc, fYc, vYc;
export { fYc, gYc, mYc, vYc };
var __wakaru_vas_initialized = false;
export function vas() {
if (__wakaru_vas_initialized) return;
__wakaru_vas_initialized = true;
"use strict";
x(), Qbn(), mYc = [
    "primary",
    "secondary",
    "media"
], gYc = [
    "outline",
    "ghost",
    "text"
], fYc = new Set(mYc), vYc = new Set(gYc);

}
