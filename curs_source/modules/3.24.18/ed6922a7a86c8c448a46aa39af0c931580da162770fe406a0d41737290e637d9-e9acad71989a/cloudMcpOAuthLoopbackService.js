import { jn, mNt } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var DUe, IZd;
export { DUe, IZd };
var __wakaru_MUe_initialized = false;
export function MUe() {
if (__wakaru_MUe_initialized) return;
__wakaru_MUe_initialized = true;
"use strict";
x(), jn(), Ze(), Pn(), DUe = vn("cloudMcpOAuthLoopbackService"), IZd = class {
    isEnabled() {
        return !1;
    }
    async arm(e) {
        return {
            kind: "unavailable",
            reason: "unsupported"
        };
    }
    async waitForCallback(e) {
        return {
            kind: "failed",
            reason: "unsupported"
        };
    }
    async cancel(e) {}
}, mNt || mn(DUe, IZd, 1);

}
