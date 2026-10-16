import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
var path8, isWindows2, isMacintosh;
export { isMacintosh, isWindows2, path8 };
var __wakaru_init_util3_initialized = false;
export function init_util3() {
if (__wakaru_init_util3_initialized) return;
__wakaru_init_util3_initialized = true;
"use strict";
path8 = __toESM(require("node:path"), 1);
isWindows2 = process.platform === "win32";
isMacintosh = process.platform === "darwin";

}
