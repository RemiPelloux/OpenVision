import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_common12 } from "./common.js";
import { init_user_info_rerender } from "./user-info-rerender.js";
import { init_user_info } from "../prompts/user-info.js";
import { init_mcp_meta_tool } from "../utils/mcp-meta-tool.js";
import { init_prompt_prefix_telemetry } from "../utils/prompt-prefix-telemetry.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var USER_INFO_CATALOG_UPDATE_TAG, logger78, SECTIONS_ATTRIBUTE_PATTERN;
export { SECTIONS_ATTRIBUTE_PATTERN, USER_INFO_CATALOG_UPDATE_TAG, logger78 };
var __wakaru_init_user_info_catalog_update_initialized = false;
export function init_user_info_catalog_update() {
if (__wakaru_init_user_info_catalog_update_initialized) return;
__wakaru_init_user_info_catalog_update_initialized = true;
"use strict";
init_dist27();
init_user_info();
init_dist();
init_mcp_meta_tool();
init_prompt_prefix_telemetry();
init_common12();
init_user_info_rerender();
USER_INFO_CATALOG_UPDATE_TAG = "user_info_catalog_update";
logger78 = createLogger("@anysphere/agent:user-info-catalog-update");
SECTIONS_ATTRIBUTE_PATTERN = new RegExp(`<${USER_INFO_CATALOG_UPDATE_TAG} sections="([a-z_,]*)"`);

}
