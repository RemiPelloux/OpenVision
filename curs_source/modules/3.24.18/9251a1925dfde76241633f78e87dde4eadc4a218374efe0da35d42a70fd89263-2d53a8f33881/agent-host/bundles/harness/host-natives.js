import { host_natives_default, init_host_natives } from "./host-natives.json";
import { __toESM } from "../storage/sqlite-store.js";
var fs30, import_node_module, HOST_PROVIDED_NATIVES;
export { HOST_PROVIDED_NATIVES, fs30, import_node_module };
var __wakaru_init_host_natives2_initialized = false;
export function init_host_natives2() {
if (__wakaru_init_host_natives2_initialized) return;
__wakaru_init_host_natives2_initialized = true;
"use strict";
fs30 = __toESM(require("node:fs"), 1);
import_node_module = require("node:module");
init_host_natives();
HOST_PROVIDED_NATIVES = host_natives_default.natives;

}
