import { init_common12 } from "./common.js";
import { init_constants6 } from "../constants.js";
import { init_user_info } from "../prompts/user-info.js";
import { init_mcp_meta_tool } from "../utils/mcp-meta-tool.js";
import { init_prompt_prefix_telemetry } from "../utils/prompt-prefix-telemetry.js";
import { init_cursor_rules_pb } from "../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var USER_INFO_CATALOG_KINDS, CATALOG_RERENDER_REASON;
export { CATALOG_RERENDER_REASON, USER_INFO_CATALOG_KINDS };
var __wakaru_init_user_info_rerender_initialized = false;
export function init_user_info_rerender() {
if (__wakaru_init_user_info_rerender_initialized) return;
__wakaru_init_user_info_rerender_initialized = true;
"use strict";
init_cursor_rules_pb();
init_dist27();
init_constants6();
init_user_info();
init_mcp_meta_tool();
init_prompt_prefix_telemetry();
init_common12();
USER_INFO_CATALOG_KINDS = [
    "subagent_models",
    "subagent_types",
    "dynamic_tool_snapshot"
];
CATALOG_RERENDER_REASON = {
    subagent_models: "subagent_models_change",
    subagent_types: "subagent_types_change",
    dynamic_tool_snapshot: "dynamic_tool_snapshot_change"
};

}
