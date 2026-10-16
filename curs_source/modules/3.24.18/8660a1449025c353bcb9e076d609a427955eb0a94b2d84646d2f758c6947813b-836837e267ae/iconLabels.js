import { Fa } from "./Iwo.js";
import { s6 } from "./filters.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
var oWd, WCr, aWd, lWd, cWd, GCr;
export { GCr, WCr, aWd, cWd, lWd, oWd };
var __wakaru_tRe_initialized = false;
export function tRe() {
if (__wakaru_tRe_initialized) return;
__wakaru_tRe_initialized = true;
"use strict";
E(), s6(), Fa(), ta(), oWd = "$(", WCr = new RegExp(`\\$\\(${Gn.iconNameExpression}(?:${Gn.iconModifierExpression})?\\)`, "g"), aWd = new RegExp(`(\\\\)?${WCr.source}`, "g"), lWd = new RegExp(`\\\\${WCr.source}`, "g"), cWd = new RegExp(`(\\s)?(\\\\)?${WCr.source}(\\s)?`, "g"), GCr = new RegExp(`\\$\\(${Gn.iconNameCharacter}+\\)`, "g");

}
