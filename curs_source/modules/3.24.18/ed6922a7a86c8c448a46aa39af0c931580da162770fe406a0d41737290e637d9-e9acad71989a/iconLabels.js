import { Ps } from "./HVr.js";
import { Yy } from "./filters.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var W4c, mbi, G4c, V4c, j4c, gbi;
export { G4c, V4c, W4c, gbi, j4c, mbi };
var __wakaru_bW_initialized = false;
export function bW() {
if (__wakaru_bW_initialized) return;
__wakaru_bW_initialized = true;
"use strict";
x(), Yy(), Ps(), Sr(), W4c = "$(", mbi = new RegExp(`\\$\\(${Ft.iconNameExpression}(?:${Ft.iconModifierExpression})?\\)`, "g"), G4c = new RegExp(`(\\\\)?${mbi.source}`, "g"), V4c = new RegExp(`\\\\${mbi.source}`, "g"), j4c = new RegExp(`(\\s)?(\\\\)?${mbi.source}(\\s)?`, "g"), gbi = new RegExp(`\\$\\(${Ft.iconNameCharacter}+\\)`, "g");

}
