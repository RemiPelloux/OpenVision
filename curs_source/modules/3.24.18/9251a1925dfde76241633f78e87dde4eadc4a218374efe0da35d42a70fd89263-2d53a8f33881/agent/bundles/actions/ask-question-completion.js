import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_ask_question2 } from "../tools/core/ask-question/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var import_node_crypto31, logger71;
export { import_node_crypto31, logger71 };
var __wakaru_init_ask_question_completion_initialized = false;
export function init_ask_question_completion() {
if (__wakaru_init_ask_question_completion_initialized) return;
__wakaru_init_ask_question_completion_initialized = true;
"use strict";
import_node_crypto31 = require("node:crypto");
init_dist();
init_agent_v1();
init_dist27();
init_ask_question2();
logger71 = createLogger("@anysphere/agent/ask-question-completion");

}
