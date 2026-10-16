import { init_manifest } from "./manifest.js";
import { __toESM } from "../storage/sqlite-store.js";
var path58;
export { path58 };
var __wakaru_init_module_selection_initialized = false;
export function init_module_selection() {
if (__wakaru_init_module_selection_initialized) return;
__wakaru_init_module_selection_initialized = true;
"use strict";
path58 = __toESM(require("node:path"), 1);
init_manifest();

}
