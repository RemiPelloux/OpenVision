import { x } from "./tslib.es6.js";
var ejc;
export { ejc };
var __wakaru_nb_initialized = false;
export function nb() {
if (__wakaru_nb_initialized) return;
__wakaru_nb_initialized = true;
"use strict";
x(), ejc = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-57][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

}
