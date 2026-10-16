import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { init_ripgrep } from "./ripgrep.js";
import { init_sandbox } from "./sandbox/sandbox.js";
import { init_types4 } from "./types.js";
var import_node_child_process8, import_node_stream2, READ_PIPED_COMMAND;
export { READ_PIPED_COMMAND, import_node_child_process8, import_node_stream2 };
var __wakaru_init_core2_initialized = false;
export function init_core2() {
if (__wakaru_init_core2_initialized) return;
__wakaru_init_core2_initialized = true;
"use strict";
import_node_child_process8 = require("node:child_process");
import_node_stream2 = __toESM(require("node:stream"), 1);
init_ripgrep();
init_sandbox();
init_types4();
READ_PIPED_COMMAND = `IFS= builtin read -r -d '' __cursor_command <&5; exec 5<&-; builtin set -- "$__cursor_command"; builtin unset __cursor_command; `;

}
