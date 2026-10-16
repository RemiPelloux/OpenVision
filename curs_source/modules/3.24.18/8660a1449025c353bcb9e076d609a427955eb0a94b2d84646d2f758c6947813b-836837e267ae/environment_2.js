import { NDp, VGe } from "./canUseDOM.js";
import { E } from "./tslib.es6.js";
var LDp, fbe, n0t, YHt, aCn, lCn, ODp, cCn;
export { LDp, ODp, YHt, aCn, cCn, fbe, lCn, n0t };
var __wakaru_dNa_initialized = false;
export function dNa() {
if (__wakaru_dNa_initialized) return;
__wakaru_dNa_initialized = true;
"use strict";
E(), NDp(), LDp = VGe && "documentMode" in document ? document.documentMode : null, fbe = VGe && /Mac|iPod|iPhone|iPad/.test(navigator.platform), n0t = VGe && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), YHt = VGe && "InputEvent" in window && !LDp ? "getTargetRanges" in new window.InputEvent("input") : !1, aCn = VGe && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), lCn = VGe && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, ODp = VGe && /^(?=.*Chrome).*/i.test(navigator.userAgent), cCn = VGe && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !ODp;

}
