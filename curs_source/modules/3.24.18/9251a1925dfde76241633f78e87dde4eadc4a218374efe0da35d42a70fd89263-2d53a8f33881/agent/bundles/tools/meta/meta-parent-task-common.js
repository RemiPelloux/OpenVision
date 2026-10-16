import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { init_attached_media } from "../../attached-media.js";
import { init_state } from "../../state.js";
import { init_reference_resolver } from "../reference-resolver.js";
import { init_task_subagent_preparation } from "../task-subagent-preparation.js";
import { META_PARENT_COMPLETION_CLOSE_TAG, META_PARENT_COMPLETION_OPEN_TAG, init_meta_parent_completion_protocol } from "../../utils/meta-parent-completion-protocol.js";
import { init_request_id } from "../../utils/request-id.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_subagents_pb } from "../../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { init_dist27 } from "../../../../redaction/dist/index.js";
var META_PARENT_WORKER_SUBAGENT_TYPE, RESULT_SEPARATOR, RESPONSE_SEPARATOR, META_PARENT_COMPLETION_BLOCK_PATTERN, ATTACHMENTS_FIELD_DESCRIPTION_SUFFIX;
export { ATTACHMENTS_FIELD_DESCRIPTION_SUFFIX, META_PARENT_COMPLETION_BLOCK_PATTERN, META_PARENT_WORKER_SUBAGENT_TYPE, RESPONSE_SEPARATOR, RESULT_SEPARATOR };
var __wakaru_init_meta_parent_task_common_initialized = false;
export function init_meta_parent_task_common() {
if (__wakaru_init_meta_parent_task_common_initialized) return;
__wakaru_init_meta_parent_task_common_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_agent_pb();
init_subagents_pb();
init_dist27();
init_zod();
init_attached_media();
init_state();
init_meta_parent_completion_protocol();
init_request_id();
init_reference_resolver();
init_task_subagent_preparation();
META_PARENT_WORKER_SUBAGENT_TYPE = "meta-task-worker";
RESULT_SEPARATOR = "\nresult:\n";
RESPONSE_SEPARATOR = "\nresponse:\n";
META_PARENT_COMPLETION_BLOCK_PATTERN = new RegExp(`${META_PARENT_COMPLETION_OPEN_TAG}\\n([\\s\\S]*?)\\n${META_PARENT_COMPLETION_CLOSE_TAG}`, "g");
ATTACHMENTS_FIELD_DESCRIPTION_SUFFIX = "Use for forwarding relevant user-provided attachments to subagents. DO NOT use for non-user-provided files.";

}
