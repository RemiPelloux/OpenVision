import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var execHookConversationIdKey, execHookGenerationIdKey, execHookModelKey, execHookWorkspaceRootsKey;
export { execHookConversationIdKey, execHookGenerationIdKey, execHookModelKey, execHookWorkspaceRootsKey };
var __wakaru_init_hook_metadata_initialized = false;
export function init_hook_metadata() {
if (__wakaru_init_hook_metadata_initialized) return;
__wakaru_init_hook_metadata_initialized = true;
"use strict";
init_dist();
execHookConversationIdKey = createKey(Symbol("execHookConversationId"), void 0);
execHookGenerationIdKey = createKey(Symbol("execHookGenerationId"), void 0);
execHookModelKey = createKey(Symbol("execHookModel"), void 0);
execHookWorkspaceRootsKey = createKey(Symbol("execHookWorkspaceRoots"), void 0);

}
