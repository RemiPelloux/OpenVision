import { init_platform_communication_tools } from "../../../automations/platform-communication-tools.js";
import { init_computer_use_subagent } from "../../cloud-agents/subagent/computer-use-subagent.js";
import { init_debug_subagent } from "../../cloud-agents/subagent/debug-subagent.js";
import { init_past_conversation_explorer_subagent } from "../../cloud-agents/subagent/past-conversation-explorer-subagent.js";
import { init_video_review_subagent } from "../../cloud-agents/subagent/video-review-subagent.js";
import { init_vm_setup_subagent } from "../../cloud-agents/subagent/vm-setup-subagent.js";
import { init_watch_video_subagent } from "../../cloud-agents/subagent/watch-video-subagent.js";
import { init_browser_use_subagent } from "./browser-use-subagent.js";
import { init_bugbot_subagent } from "./bugbot-subagent.js";
import { init_ci_investigator_subagent } from "./ci-investigator-subagent.js";
import { init_cursor_blame_learning_subagent } from "./cursor-blame-learning-subagent.js";
import { init_cursor_guide_subagent } from "./cursor-guide-subagent.js";
import { init_explore_subagent } from "./explore-subagent.js";
import { init_fsd_subagent } from "./fsd-subagent.js";
import { init_grind_swarm_subagent } from "./grind-swarm-subagent.js";
import { init_security_review_subagent } from "./security-review-subagent.js";
import { init_shell_subagent } from "./shell-subagent.js";
import { init_agent_config } from "../../../utils/agent-config.js";
import { normalizeSubagentTypeName } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { init_background_composer_pb } from "../../../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
var GENERAL_PURPOSE_SUBAGENT_TYPE, EXPLORE_SUBAGENT_TYPE, BEST_OF_N_RUNNER_SUBAGENT_TYPE, DEFAULT_SUBAGENT_SYSTEM_REMINDER, CONFIGURABLE_BUILTIN_SUBAGENT_MODEL_TYPES, COORDINATOR_SUBAGENT_KEEP_LIST, COORDINATOR_KEEP_LIST_NORMALIZED;
export { BEST_OF_N_RUNNER_SUBAGENT_TYPE, CONFIGURABLE_BUILTIN_SUBAGENT_MODEL_TYPES, COORDINATOR_KEEP_LIST_NORMALIZED, COORDINATOR_SUBAGENT_KEEP_LIST, DEFAULT_SUBAGENT_SYSTEM_REMINDER, EXPLORE_SUBAGENT_TYPE, GENERAL_PURPOSE_SUBAGENT_TYPE };
var __wakaru_init_subagent_config_initialized = false;
export function init_subagent_config() {
if (__wakaru_init_subagent_config_initialized) return;
__wakaru_init_subagent_config_initialized = true;
"use strict";
init_agent_pb();
init_subagents_pb();
init_background_composer_pb();
init_platform_communication_tools();
init_agent_config();
init_computer_use_subagent();
init_debug_subagent();
init_past_conversation_explorer_subagent();
init_video_review_subagent();
init_vm_setup_subagent();
init_watch_video_subagent();
init_browser_use_subagent();
init_bugbot_subagent();
init_ci_investigator_subagent();
init_cursor_blame_learning_subagent();
init_cursor_guide_subagent();
init_explore_subagent();
init_fsd_subagent();
init_grind_swarm_subagent();
init_security_review_subagent();
init_shell_subagent();
GENERAL_PURPOSE_SUBAGENT_TYPE = "generalPurpose";
EXPLORE_SUBAGENT_TYPE = "explore";
BEST_OF_N_RUNNER_SUBAGENT_TYPE = "best-of-n-runner";
DEFAULT_SUBAGENT_SYSTEM_REMINDER = "You are running as a subagent under a parent agent. Do not spawn additional subagents unless requested by the user or by your instructions. Do not create Cursor Canvas files unless requested by the user or by your instructions.";
CONFIGURABLE_BUILTIN_SUBAGENT_MODEL_TYPES = [
    EXPLORE_SUBAGENT_TYPE
];
COORDINATOR_SUBAGENT_KEEP_LIST = [
    GENERAL_PURPOSE_SUBAGENT_TYPE,
    EXPLORE_SUBAGENT_TYPE,
    "computerUse",
    "videoReview",
    "bugbot",
    "security-review"
];
COORDINATOR_KEEP_LIST_NORMALIZED = new Set(COORDINATOR_SUBAGENT_KEEP_LIST.map((name17)=>normalizeSubagentTypeName(name17)));

}
