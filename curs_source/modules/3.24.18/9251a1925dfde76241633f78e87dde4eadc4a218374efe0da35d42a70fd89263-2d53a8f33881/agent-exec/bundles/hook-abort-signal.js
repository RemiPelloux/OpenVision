var import_node_async_hooks, hookAbortSignals;
export { hookAbortSignals, import_node_async_hooks };
var __wakaru_init_hook_abort_signal_initialized = false;
export function init_hook_abort_signal() {
if (__wakaru_init_hook_abort_signal_initialized) return;
__wakaru_init_hook_abort_signal_initialized = true;
"use strict";
import_node_async_hooks = require("node:async_hooks");
hookAbortSignals = new import_node_async_hooks.AsyncLocalStorage();

}
