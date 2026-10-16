import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_attached_media } from "../attached-media.js";
import { init_common9 } from "./common.js";
import { init_image_utils } from "./core/read/image-utils.js";
import { init_subagent_config } from "./core/subagent/subagent-config.js";
import { init_subagent_fork } from "./core/subagent/subagent-fork.js";
import { init_types13 } from "./core/subagent/types.js";
import { init_subagent_model_force_policy } from "./subagent-model-force-policy.js";
import { init_task } from "./task.js";
import { init_event_tracking } from "../utils/event-tracking.js";
import { init_request_id } from "../utils/request-id.js";
import { init_dist } from "../../../context/dist/index.js";
import { require_mime_types } from "../../../node_modules/.pnpm/mime-types@3.0.1/node_modules/mime-types/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_read_exec_pb } from "../../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { init_request_context_exec_pb } from "../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_selected_context_pb } from "../../../proto/dist/generated/agent/v1/selected_context_pb.js";
import { init_subagents_pb } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
var import_node_path81, import_mime_types2, logger83, VIDEO_MIME_MAP;
export { VIDEO_MIME_MAP, import_mime_types2, import_node_path81, logger83 };
var __wakaru_init_task_subagent_preparation_initialized = false;
export function init_task_subagent_preparation() {
if (__wakaru_init_task_subagent_preparation_initialized) return;
__wakaru_init_task_subagent_preparation_initialized = true;
"use strict";
import_node_path81 = __toESM(require("node:path"), 1);
init_dist8();
init_dist();
init_agent_pb();
init_read_exec_pb();
init_request_context_exec_pb();
init_selected_context_pb();
init_subagents_pb();
import_mime_types2 = __toESM(require_mime_types(), 1);
init_attached_media();
init_event_tracking();
init_request_id();
init_common9();
init_image_utils();
init_subagent_fork();
init_subagent_config();
init_types13();
init_subagent_model_force_policy();
init_task();
logger83 = createLogger("task-subagent-preparation");
VIDEO_MIME_MAP = {
    mp4: "video/mp4",
    webm: "video/webm",
    mov: "video/quicktime",
    avi: "video/x-msvideo",
    mkv: "video/x-matroska",
    wmv: "video/x-ms-wmv",
    flv: "video/x-flv",
    m4v: "video/x-m4v"
};

}
