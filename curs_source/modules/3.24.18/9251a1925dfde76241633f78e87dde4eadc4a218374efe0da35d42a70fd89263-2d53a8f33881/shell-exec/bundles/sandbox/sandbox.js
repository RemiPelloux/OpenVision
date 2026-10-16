import { init_helper } from "../../../bidi_connect_exports.js";
import { init_env_filter } from "../env-filter.js";
import { init_cache_env } from "./cache-env.js";
import { init_seatbelt } from "./macos/seatbelt.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_child_process7, import_node_fs15, SandboxUnsupportedError, isMacOS2;
export { SandboxUnsupportedError, import_node_child_process7, import_node_fs15, isMacOS2 };
var __wakaru_init_sandbox_initialized = false;
export function init_sandbox() {
if (__wakaru_init_sandbox_initialized) return;
__wakaru_init_sandbox_initialized = true;
"use strict";
import_node_child_process7 = require("node:child_process");
import_node_fs15 = require("node:fs");
init_dist3();
init_env_filter();
init_cache_env();
init_helper();
init_seatbelt();
SandboxUnsupportedError = class extends Error {
    reason;
    constructor(message, reason){
        super(message);
        this.reason = reason;
        this.name = "SandboxUnsupportedError";
    }
};
isMacOS2 = process.platform === "darwin";

}
