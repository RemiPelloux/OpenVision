import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { LRUCache, init_lru_cache } from "./lru-cache.js";
var sfs, path3, isWindows, runDownPathCache;
export { isWindows, path3, runDownPathCache, sfs };
var __wakaru_init_find_executable_initialized = false;
export function init_find_executable() {
if (__wakaru_init_find_executable_initialized) return;
__wakaru_init_find_executable_initialized = true;
"use strict";
sfs = __toESM(require("node:fs"), 1);
path3 = __toESM(require("node:path"), 1);
init_lru_cache();
isWindows = typeof process !== "undefined" && process.platform === "win32";
runDownPathCache = new LRUCache({
    max: 512
});

}
