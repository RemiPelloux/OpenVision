import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var _Jl;
export { _Jl };
var __wakaru_xT0_initialized = false;
export function xT0() {
if (__wakaru_xT0_initialized) return;
__wakaru_xT0_initialized = true;
"use strict";
E(), Mt(), _Jl = ()=>globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;

}
