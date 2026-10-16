import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_common9 } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
var logger88, parametersSchema5;
export { logger88, parametersSchema5 };
var __wakaru_init_read_bugbot_initialized = false;
export function init_read_bugbot() {
if (__wakaru_init_read_bugbot_initialized) return;
__wakaru_init_read_bugbot_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_zod();
init_common9();
logger88 = createLogger("tools/read-bugbot");
parametersSchema5 = external_exports.object({
    path: external_exports.string().describe("The repository-relative path of the file to read (as shown in the diff)."),
    offset: external_exports.number().optional().describe("The 1-indexed line number to start reading from. Only provide if the file is too large to read at once."),
    limit: external_exports.number().optional().describe("The number of lines to read. Only provide if the file is too large to read at once.")
});

}
