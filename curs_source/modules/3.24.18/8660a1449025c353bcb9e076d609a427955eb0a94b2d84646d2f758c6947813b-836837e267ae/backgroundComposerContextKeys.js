import { Hi, cn } from "./contextkey.js";
import { E } from "./tslib.es6.js";
var Yct, O9l, LBf, OBf;
export { LBf, O9l, OBf, Yct };
var __wakaru_F9l_initialized = false;
export function F9l() {
if (__wakaru_F9l_initialized) return;
__wakaru_F9l_initialized = true;
"use strict";
E(), Hi(), Yct = new cn("isInBackgroundComposerWindow", !1), O9l = new cn("isBackgroundComposerPeekContentActive", !1), LBf = new cn("isBackgroundComposerPeekContentDiffTab", !1), OBf = new cn("hasFetchedInitialBackgroundComposers", !1);

}
