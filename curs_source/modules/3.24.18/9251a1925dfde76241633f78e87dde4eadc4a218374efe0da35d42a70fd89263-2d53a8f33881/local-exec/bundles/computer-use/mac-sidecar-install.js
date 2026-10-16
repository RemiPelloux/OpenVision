import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_mac_rpc_client } from "./mac-rpc-client.js";
import { init_sidecar_release_pin } from "./sidecar-release-pin.js";
var import_node_path43, INNER_BINARY_REL;
export { INNER_BINARY_REL, import_node_path43 };
var __wakaru_init_mac_sidecar_install_initialized = false;
export function init_mac_sidecar_install() {
if (__wakaru_init_mac_sidecar_install_initialized) return;
__wakaru_init_mac_sidecar_install_initialized = true;
"use strict";
import_node_path43 = __toESM(require("node:path"), 1);
init_mac_rpc_client();
init_sidecar_release_pin();
INNER_BINARY_REL = import_node_path43.default.join("Contents", "MacOS", "CUCursorService");

}
