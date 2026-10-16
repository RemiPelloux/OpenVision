import { Di, gdn } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var g4e, M9m;
export { M9m, g4e };
var __wakaru_Kqe_initialized = false;
export function Kqe() {
if (__wakaru_Kqe_initialized) return;
__wakaru_Kqe_initialized = true;
"use strict";
E(), Di(), It(), Rn(), g4e = jn("cloudMcpOAuthLoopbackService"), M9m = class {
    isEnabled() {
        return !1;
    }
    async arm(t) {
        return {
            kind: "unavailable",
            reason: "unsupported"
        };
    }
    async waitForCallback(t) {
        return {
            kind: "failed",
            reason: "unsupported"
        };
    }
    async cancel(t) {}
}, gdn || bn(g4e, M9m, 1);

}
