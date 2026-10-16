import { Hn } from "./dom_2.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
var rGd;
export { rGd };
var __wakaru_bW_initialized = false;
export function bW() {
if (__wakaru_bW_initialized) return;
__wakaru_bW_initialized = true;
"use strict";
E(), Hn(), ta(), rGd = new RegExp(`(\\\\)?\\$\\((${Gn.iconNameExpression}(?:${Gn.iconModifierExpression})?)(?:#([\\w-]+))?\\)`, "g");

}
