import { init_claude_code_mapper } from "./claude-code-mapper.js";
import { init_claude_code_types } from "./claude-code-types.js";
import { init_matcher } from "./matcher.js";
import { init_normalize } from "./normalize.js";
import { init_sanitize_system_reminder } from "./sanitize-system-reminder.js";
import { init_transport } from "./transport.js";
import { init_types3 } from "./types.js";
import { init_hooksConfig } from "./validators/hooksConfig.js";
var __wakaru_init_dist6_initialized = false;
export function init_dist6() {
if (__wakaru_init_dist6_initialized) return;
__wakaru_init_dist6_initialized = true;
"use strict";
init_claude_code_mapper();
init_claude_code_types();
init_matcher();
init_normalize();
init_sanitize_system_reminder();
init_transport();
init_types3();
init_hooksConfig();

}
