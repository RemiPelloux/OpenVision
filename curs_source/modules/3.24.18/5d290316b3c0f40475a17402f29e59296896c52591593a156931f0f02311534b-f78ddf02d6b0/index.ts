import { TS } from "./mcp.ts";
import { NS } from "./permissions.ts";
import { h } from "./tslib.es6.js";
var __wakaru_Be_initialized = false;
export function Be() {
if (__wakaru_Be_initialized) return;
__wakaru_Be_initialized = true;
h(), TS(), NS();

}
