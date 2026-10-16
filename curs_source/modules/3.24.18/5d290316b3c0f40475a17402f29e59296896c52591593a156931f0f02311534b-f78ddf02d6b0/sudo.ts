import { h } from "./tslib.es6.js";
var J1, Z1;
export { J1, Z1 };
var __wakaru_os_initialized = false;
export function os() {
if (__wakaru_os_initialized) return;
__wakaru_os_initialized = true;
"use strict";
h(), J1 = process.platform === "win32", Z1 = "alias sudo='sudo -A'";

}
