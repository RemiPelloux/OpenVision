import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_constants6 } from "../../constants.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_dist27 } from "../../../../redaction/dist/index.js";
var logger67, NAMED_AGENT_SELF_DOCUMENT_TAG, SELF_DOCUMENT_OPEN, SELF_DOCUMENT_CLOSE, SELF_DOCUMENT_BLOCK_REGEX, USER_INFO_CLOSE;
export { NAMED_AGENT_SELF_DOCUMENT_TAG, SELF_DOCUMENT_BLOCK_REGEX, SELF_DOCUMENT_CLOSE, SELF_DOCUMENT_OPEN, USER_INFO_CLOSE, logger67 };
var __wakaru_init_self_document_initialized = false;
export function init_self_document() {
if (__wakaru_init_self_document_initialized) return;
__wakaru_init_self_document_initialized = true;
"use strict";
init_dist();
init_dist27();
init_constants6();
logger67 = createLogger("@anysphere/agent");
NAMED_AGENT_SELF_DOCUMENT_TAG = "agent_self_document";
SELF_DOCUMENT_OPEN = `<${NAMED_AGENT_SELF_DOCUMENT_TAG}>`;
SELF_DOCUMENT_CLOSE = `</${NAMED_AGENT_SELF_DOCUMENT_TAG}>`;
SELF_DOCUMENT_BLOCK_REGEX = new RegExp(`${SELF_DOCUMENT_OPEN}[\\s\\S]*?${SELF_DOCUMENT_CLOSE}`);
USER_INFO_CLOSE = "</user_info>";

}
