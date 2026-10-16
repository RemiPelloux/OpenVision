import { init_common11 } from "./common.js";
import { init_openai_codex_cloud2 } from "./openai-codex-cloud.js";
import { init_openai3 } from "../prompts/deprecated-do-not-use/openai.js";
import { init_core5 } from "../tools/core.js";
import { init_tools } from "../tools/index.js";
var __wakaru_init_unified_initialized = false;
export function init_unified() {
if (__wakaru_init_unified_initialized) return;
__wakaru_init_unified_initialized = true;
"use strict";
init_openai3();
init_core5();
init_tools();
init_common11();
init_openai_codex_cloud2();

}
