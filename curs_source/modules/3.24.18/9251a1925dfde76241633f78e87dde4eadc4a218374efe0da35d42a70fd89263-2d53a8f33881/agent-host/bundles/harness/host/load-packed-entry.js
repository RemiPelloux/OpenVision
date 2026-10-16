import { init_host_natives2 } from "../host-natives.js";
import { init_rejections } from "./rejections.js";
import { init_manifest } from "../manifest.js";
import { __toESM } from "../../storage/sqlite-store.js";
var fs37, import_node_module3, path62, v8, vm;
export { fs37, import_node_module3, path62, v8, vm };
var __wakaru_init_load_packed_entry_initialized = false;
export function init_load_packed_entry() {
if (__wakaru_init_load_packed_entry_initialized) return;
__wakaru_init_load_packed_entry_initialized = true;
"use strict";
fs37 = __toESM(require("node:fs"), 1);
import_node_module3 = require("node:module");
path62 = __toESM(require("node:path"), 1);
v8 = __toESM(require("node:v8"), 1);
vm = __toESM(require("node:vm"), 1);
init_host_natives2();
init_manifest();
init_rejections();

}
