import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_common9 } from "./common.js";
import { init_remote_hooks } from "./core/remote-hooks.js";
import { init_task } from "./task.js";
import { init_event_tracking } from "../utils/event-tracking.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var logger82;
export { logger82 };
var __wakaru_init_task_subagent_completion_initialized = false;
export function init_task_subagent_completion() {
if (__wakaru_init_task_subagent_completion_initialized) return;
__wakaru_init_task_subagent_completion_initialized = true;
"use strict";
init_dist();
init_agent_pb();
init_event_tracking();
init_common9();
init_remote_hooks();
init_task();
logger82 = createLogger("task-subagent-completion");

}
