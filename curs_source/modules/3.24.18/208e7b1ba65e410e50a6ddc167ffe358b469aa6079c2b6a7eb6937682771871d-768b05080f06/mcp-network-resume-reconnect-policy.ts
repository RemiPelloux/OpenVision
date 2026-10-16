import { F$ } from "./mcp-focus-retry-cooldown.ts";
import { mo } from "./mcp-reconnect-config.ts";
import { h } from "./tslib.es6.js";
var __wakaru_q$e_initialized = false;
export function q$e() {
if (__wakaru_q$e_initialized) return;
__wakaru_q$e_initialized = true;
"use strict";
h(), F$(), mo();

}
