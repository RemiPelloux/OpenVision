import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var UI;
export { UI };
var __wakaru_UD_initialized = false;
export function UD() {
if (__wakaru_UD_initialized) return;
__wakaru_UD_initialized = true;
"use strict";
E(), It(), UI = jn("layoutService");

}
