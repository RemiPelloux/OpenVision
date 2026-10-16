import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_openai2 } from "./adapters/openai.js";
import { init_observation } from "./observation.js";
import { init_shared } from "./shared.js";
import { init_types14 } from "./types.js";
import { init_common9 } from "../../common.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { init_esm20 } from "../../../../../node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/index.js";
var logger58;
export { logger58 };
var __wakaru_init_openai_tool_initialized = false;
export function init_openai_tool() {
if (__wakaru_init_openai_tool_initialized) return;
__wakaru_init_openai_tool_initialized = true;
"use strict";
init_dist8();
init_dist();
init_esm20();
init_common9();
init_openai2();
init_observation();
init_shared();
init_types14();
logger58 = createLogger("agent/tools/computer-use/openai");

}
