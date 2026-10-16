import { TM } from "./error-message-utils.ts";
import { j$ } from "./oauth-errors.ts";
import { H$ } from "./reconnect-manager.ts";
import { h } from "./tslib.es6.js";
var __wakaru_q$_initialized = false;
export function q$() {
if (__wakaru_q$_initialized) return;
__wakaru_q$_initialized = true;
"use strict";
h(), j$(), TM(), H$();

}
