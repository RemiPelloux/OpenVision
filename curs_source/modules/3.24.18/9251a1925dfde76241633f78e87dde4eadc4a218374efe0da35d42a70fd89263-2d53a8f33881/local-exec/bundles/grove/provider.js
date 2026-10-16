import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_common3 } from "../common.js";
import { init_detector } from "./detector.js";
import { init_plan } from "./plan.js";
import { init_platform2 } from "./platform.js";
import { init_process } from "./process.js";
import { init_result } from "./result.js";
import { init_types10 } from "./types.js";
import { init_indexed_grep_ignore } from "../indexed-grep-ignore.js";
var GROVE_GREP_MAX_STDOUT_BYTES, GROVE_GREP_MAX_STDERR_BYTES, logger25;
export { GROVE_GREP_MAX_STDERR_BYTES, GROVE_GREP_MAX_STDOUT_BYTES, logger25 };
var __wakaru_init_provider_initialized = false;
export function init_provider() {
if (__wakaru_init_provider_initialized) return;
__wakaru_init_provider_initialized = true;
"use strict";
init_dist();
init_common3();
init_indexed_grep_ignore();
init_detector();
init_plan();
init_platform2();
init_process();
init_result();
init_types10();
GROVE_GREP_MAX_STDOUT_BYTES = 64 * 1024 * 1024;
GROVE_GREP_MAX_STDERR_BYTES = 64 * 1024;
logger25 = createLogger("local-exec/grove-grep");

}
