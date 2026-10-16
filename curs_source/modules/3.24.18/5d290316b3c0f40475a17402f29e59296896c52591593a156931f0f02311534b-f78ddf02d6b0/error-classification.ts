import { Gi } from "./error-message-utils.ts";
import { gs } from "./oauth-errors.ts";
import { cn } from "./reconnect-manager.ts";
import { h } from "./tslib.es6.js";
var __wakaru_em_initialized = false;
export function em() {
if (__wakaru_em_initialized) return;
__wakaru_em_initialized = true;
"use strict";
h(), gs(), Gi(), cn();

}
