import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
var fs23, NS_PER_MS;
export { NS_PER_MS, fs23 };
var __wakaru_init_stat_fast_path_initialized = false;
export function init_stat_fast_path() {
if (__wakaru_init_stat_fast_path_initialized) return;
__wakaru_init_stat_fast_path_initialized = true;
"use strict";
fs23 = __toESM(require("node:fs"), 1);
NS_PER_MS = BigInt(1e6);

}
