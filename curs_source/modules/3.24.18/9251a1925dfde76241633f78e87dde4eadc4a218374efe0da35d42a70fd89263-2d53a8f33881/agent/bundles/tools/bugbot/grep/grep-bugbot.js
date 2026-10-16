import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_common9 } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var logger87, parametersSchema3;
export { logger87, parametersSchema3 };
var __wakaru_init_grep_bugbot_initialized = false;
export function init_grep_bugbot() {
if (__wakaru_init_grep_bugbot_initialized) return;
__wakaru_init_grep_bugbot_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_zod();
init_common9();
logger87 = createLogger("tools/grep-bugbot");
parametersSchema3 = external_exports.object({
    pattern: external_exports.string().describe("The regular expression pattern to search for in file contents"),
    path: external_exports.string().optional().describe("File or directory to search in. Defaults to repository root.")
});

}
