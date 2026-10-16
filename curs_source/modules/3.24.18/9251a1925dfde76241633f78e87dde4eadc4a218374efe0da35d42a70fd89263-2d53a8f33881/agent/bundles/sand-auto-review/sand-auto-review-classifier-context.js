import { init_conversation_context } from "../auto-review-shared/conversation-context.js";
import { init_state } from "../state.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var SAND_AUTO_REVIEW_CLASSIFIER_MAX_ASSISTANT_MESSAGES, SAND_AUTO_REVIEW_CLASSIFIER_MAX_USER_MESSAGES, SAND_AUTO_REVIEW_CLASSIFIER_MAX_QUESTION_RESULTS, SAND_AUTO_REVIEW_CLASSIFIER_MAX_MESSAGE_CHARS, SAND_AUTO_REVIEW_CLASSIFIER_MAX_STRUCTURAL_CONTEXT_CHARS;
export { SAND_AUTO_REVIEW_CLASSIFIER_MAX_ASSISTANT_MESSAGES, SAND_AUTO_REVIEW_CLASSIFIER_MAX_MESSAGE_CHARS, SAND_AUTO_REVIEW_CLASSIFIER_MAX_QUESTION_RESULTS, SAND_AUTO_REVIEW_CLASSIFIER_MAX_STRUCTURAL_CONTEXT_CHARS, SAND_AUTO_REVIEW_CLASSIFIER_MAX_USER_MESSAGES };
var __wakaru_init_sand_auto_review_classifier_context_initialized = false;
export function init_sand_auto_review_classifier_context() {
if (__wakaru_init_sand_auto_review_classifier_context_initialized) return;
__wakaru_init_sand_auto_review_classifier_context_initialized = true;
"use strict";
init_agent_v1();
init_dist27();
init_conversation_context();
init_state();
SAND_AUTO_REVIEW_CLASSIFIER_MAX_ASSISTANT_MESSAGES = 4;
SAND_AUTO_REVIEW_CLASSIFIER_MAX_USER_MESSAGES = 2;
SAND_AUTO_REVIEW_CLASSIFIER_MAX_QUESTION_RESULTS = 2;
SAND_AUTO_REVIEW_CLASSIFIER_MAX_MESSAGE_CHARS = 4e3;
SAND_AUTO_REVIEW_CLASSIFIER_MAX_STRUCTURAL_CONTEXT_CHARS = (SAND_AUTO_REVIEW_CLASSIFIER_MAX_USER_MESSAGES + SAND_AUTO_REVIEW_CLASSIFIER_MAX_ASSISTANT_MESSAGES + SAND_AUTO_REVIEW_CLASSIFIER_MAX_QUESTION_RESULTS) * SAND_AUTO_REVIEW_CLASSIFIER_MAX_MESSAGE_CHARS;

}
