import { en } from "./dom_2.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var UUc;
export { UUc };
var __wakaru_DE_initialized = false;
export function DE() {
if (__wakaru_DE_initialized) return;
__wakaru_DE_initialized = true;
"use strict";
x(), en(), Sr(), UUc = new RegExp(`(\\\\)?\\$\\((${Ft.iconNameExpression}(?:${Ft.iconModifierExpression})?)(?:#([\\w-]+))?\\)`, "g");

}
