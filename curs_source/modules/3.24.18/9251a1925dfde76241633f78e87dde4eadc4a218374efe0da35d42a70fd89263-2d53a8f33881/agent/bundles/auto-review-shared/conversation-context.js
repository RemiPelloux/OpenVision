import { init_simulated_message_prompts } from "../simulated-message-prompts.js";
import { init_state } from "../state.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_selected_context_pb } from "../../../proto/dist/generated/agent/v1/selected_context_pb.js";
import { init_smart_mode_classifier_exec_pb } from "../../../proto/dist/generated/agent/v1/smart_mode_classifier_exec_pb.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var INVOKED_SKILLS_OPEN_TAG, INVOKED_SKILLS_CLOSE_TAG, INVOKED_COMMANDS_OPEN_TAG, INVOKED_COMMANDS_CLOSE_TAG, MANUALLY_ATTACHED_SKILLS_CLOSE_TAG;
export { INVOKED_COMMANDS_CLOSE_TAG, INVOKED_COMMANDS_OPEN_TAG, INVOKED_SKILLS_CLOSE_TAG, INVOKED_SKILLS_OPEN_TAG, MANUALLY_ATTACHED_SKILLS_CLOSE_TAG };
var __wakaru_init_conversation_context_initialized = false;
export function init_conversation_context() {
if (__wakaru_init_conversation_context_initialized) return;
__wakaru_init_conversation_context_initialized = true;
"use strict";
init_agent_pb();
init_selected_context_pb();
init_smart_mode_classifier_exec_pb();
init_agent_v1();
init_dist27();
init_simulated_message_prompts();
init_state();
INVOKED_SKILLS_OPEN_TAG = '<invoked_skills note="skill files the user explicitly invoked for this request">';
INVOKED_SKILLS_CLOSE_TAG = "</invoked_skills>";
INVOKED_COMMANDS_OPEN_TAG = '<invoked_commands note="command files the user explicitly invoked for this request">';
INVOKED_COMMANDS_CLOSE_TAG = "</invoked_commands>";
MANUALLY_ATTACHED_SKILLS_CLOSE_TAG = "</manually_attached_skills>";

}
