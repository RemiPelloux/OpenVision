import { init_host_natives2 } from "../host-natives.js";
import { __toESM } from "../../storage/sqlite-store.js";
import { import_meta_url } from "../../../../agent/dist/tools/core/edit/common.js";
var fs36, import_node_module2, path61, import_node_url8, SHARED_NATIVE_PAYLOAD, REACHED_THROUGH, BUNDLE_FILE;
export { BUNDLE_FILE, REACHED_THROUGH, SHARED_NATIVE_PAYLOAD, fs36, import_node_module2, import_node_url8, path61 };
var __wakaru_init_host_native_paths_initialized = false;
export function init_host_native_paths() {
if (__wakaru_init_host_native_paths_initialized) return;
__wakaru_init_host_native_paths_initialized = true;
"use strict";
fs36 = __toESM(require("node:fs"), 1);
import_node_module2 = require("node:module");
path61 = __toESM(require("node:path"), 1);
import_node_url8 = require("node:url");
init_host_natives2();
SHARED_NATIVE_PAYLOAD = path61.join("..", "..", "cursor-agent-exec", "dist", "node_modules");
REACHED_THROUGH = new Map([
    [
        "@napi-rs/canvas",
        "pdf-parse"
    ]
]);
BUNDLE_FILE = (0, import_node_url8.fileURLToPath)(import_meta_url);

}
