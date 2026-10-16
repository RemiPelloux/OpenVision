import { x } from "./tslib.es6.js";
var kc;
export { kc };
var __wakaru_am_initialized = false;
export function am() {
if (__wakaru_am_initialized) return;
__wakaru_am_initialized = true;
"use strict";
x(), kc = {
    extensionIsDev: !1,
    developmentTooling: !1,
    enableTraceSpanCollection: !0,
    enableEmbeddingsModelToggle: !1,
    enableCPPControlTokenToggle: !1,
    cursorPredictionOptions: !1,
    localMode: !1
};

}
