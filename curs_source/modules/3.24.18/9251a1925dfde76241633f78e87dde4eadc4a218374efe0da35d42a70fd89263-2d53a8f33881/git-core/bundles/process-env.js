var import_node_os4, BARE_REPO_GUARD_ENTRIES, REPO_CONFIG_EXECUTION_GUARD_ENTRIES;
export { BARE_REPO_GUARD_ENTRIES, REPO_CONFIG_EXECUTION_GUARD_ENTRIES, import_node_os4 };
var __wakaru_init_process_env_initialized = false;
export function init_process_env() {
if (__wakaru_init_process_env_initialized) return;
__wakaru_init_process_env_initialized = true;
"use strict";
import_node_os4 = require("node:os");
BARE_REPO_GUARD_ENTRIES = [
    [
        "safe.bareRepository",
        "explicit"
    ]
];
REPO_CONFIG_EXECUTION_GUARD_ENTRIES = [
    [
        "core.fsmonitor",
        "false"
    ],
    [
        "core.hooksPath",
        import_node_os4.devNull
    ],
    [
        "core.attributesFile",
        import_node_os4.devNull
    ]
];

}
