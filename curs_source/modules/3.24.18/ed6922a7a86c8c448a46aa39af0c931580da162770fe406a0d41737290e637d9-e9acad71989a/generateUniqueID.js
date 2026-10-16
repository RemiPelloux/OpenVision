import { x } from "./tslib.es6.js";
var MTc;
export { MTc };
var __wakaru_Icg_initialized = false;
export function Icg() {
if (__wakaru_Icg_initialized) return;
__wakaru_Icg_initialized = true;
"use strict";
x(), MTc = ()=>`v5-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;

}
