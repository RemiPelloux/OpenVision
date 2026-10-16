import { init_common11 } from "./common.js";
import { init_openai_codex_cloud2 } from "./openai-codex-cloud.js";
import { init_dist35 } from "../index.js";
import { init_openai3 } from "../prompts/deprecated-do-not-use/openai.js";
import { init_core5 } from "../tools/core.js";
import { init_dev_smart_mode_classifier_block } from "../tools/dev-smart-mode-classifier-block.js";
var __wakaru_init_openai_codex2_initialized = false;
export function init_openai_codex2() {
if (__wakaru_init_openai_codex2_initialized) return;
__wakaru_init_openai_codex2_initialized = true;
"use strict";
init_dist35();
init_openai3();
init_core5();
init_dev_smart_mode_classifier_block();
init_common11();
init_openai_codex_cloud2();

}
