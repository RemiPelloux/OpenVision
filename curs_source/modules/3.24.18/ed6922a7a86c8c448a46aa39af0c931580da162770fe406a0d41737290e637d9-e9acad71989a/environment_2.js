import { sCu, vMe } from "./canUseDOM.js";
import { x } from "./tslib.es6.js";
var oCu, wse, mQe, uyt, S7t, k7t, aCu, w7t;
export { S7t, aCu, k7t, mQe, oCu, uyt, w7t, wse };
var __wakaru_xHs_initialized = false;
export function xHs() {
if (__wakaru_xHs_initialized) return;
__wakaru_xHs_initialized = true;
"use strict";
x(), sCu(), oCu = vMe && "documentMode" in document ? document.documentMode : null, wse = vMe && /Mac|iPod|iPhone|iPad/.test(navigator.platform), mQe = vMe && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), uyt = vMe && "InputEvent" in window && !oCu ? "getTargetRanges" in new window.InputEvent("input") : !1, S7t = vMe && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), k7t = vMe && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, aCu = vMe && /^(?=.*Chrome).*/i.test(navigator.userAgent), w7t = vMe && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !aCu;

}
