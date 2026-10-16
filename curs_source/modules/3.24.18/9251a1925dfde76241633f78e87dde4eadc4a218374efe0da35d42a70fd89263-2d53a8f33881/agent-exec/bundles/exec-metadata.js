import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var execConversationIdKey, execRequestIdKey, execBrowserOperationSourceKey;
export { execBrowserOperationSourceKey, execConversationIdKey, execRequestIdKey };
var __wakaru_init_exec_metadata_initialized = false;
export function init_exec_metadata() {
if (__wakaru_init_exec_metadata_initialized) return;
__wakaru_init_exec_metadata_initialized = true;
"use strict";
init_dist();
execConversationIdKey = createKey(Symbol("execConversationId"), void 0);
execRequestIdKey = createKey(Symbol("execRequestId"), void 0);
execBrowserOperationSourceKey = createKey(Symbol("execBrowserOperationSource"), void 0);

}
