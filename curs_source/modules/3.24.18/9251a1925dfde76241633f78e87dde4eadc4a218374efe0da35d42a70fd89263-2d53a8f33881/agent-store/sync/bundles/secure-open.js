import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_paths3 } from "./paths.js";
var fs21;
export { fs21 };
var __wakaru_init_secure_open_initialized = false;
export function init_secure_open() {
if (__wakaru_init_secure_open_initialized) return;
__wakaru_init_secure_open_initialized = true;
"use strict";
fs21 = __toESM(require("node:fs"), 1);
init_paths3();

}
