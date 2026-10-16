import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { init_cursor_rules_service } from "../services/extensibility/cursor-rules-service.js";
import { init_skill_dedupe } from "../services/extensibility/skill-dedupe.js";
import { init_skill_discovery } from "../services/extensibility/skill-discovery.js";
import { init_subagents_service } from "../services/extensibility/subagents-service.js";
import { require_ignore } from "../../../node_modules/.pnpm/ignore@7.0.5/node_modules/ignore/index.js";
import { init_esm8 } from "../../../node_modules/.pnpm/minimatch@10.2.5/node_modules/minimatch/dist/esm/index.js";
var import_ignore3, CLOUD_SPECIFIC_INSTRUCTIONS_HEADER, CLOUD_SPECIFIC_INSTRUCTIONS_SEPARATOR;
export { CLOUD_SPECIFIC_INSTRUCTIONS_HEADER, CLOUD_SPECIFIC_INSTRUCTIONS_SEPARATOR, import_ignore3 };
var __wakaru_init_bare_git_workspace_initialized = false;
export function init_bare_git_workspace() {
if (__wakaru_init_bare_git_workspace_initialized) return;
__wakaru_init_bare_git_workspace_initialized = true;
"use strict";
init_dist8();
import_ignore3 = __toESM(require_ignore(), 1);
init_esm8();
init_cursor_rules_service();
init_skill_dedupe();
init_skill_discovery();
init_subagents_service();
CLOUD_SPECIFIC_INSTRUCTIONS_HEADER = "## Cursor Cloud specific instructions";
CLOUD_SPECIFIC_INSTRUCTIONS_SEPARATOR = `

${CLOUD_SPECIFIC_INSTRUCTIONS_HEADER}
`;

}
