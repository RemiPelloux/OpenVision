import { k8 } from "./escapeStringForRegex.js";
import { fn } from "./is.js";
import { h } from "./tslib.es6.js";
var __wakaru_Ui_initialized = false;
export function Ui() {
if (__wakaru_Ui_initialized) return;
__wakaru_Ui_initialized = true;
"use strict";
h(), fn(), k8();

}
