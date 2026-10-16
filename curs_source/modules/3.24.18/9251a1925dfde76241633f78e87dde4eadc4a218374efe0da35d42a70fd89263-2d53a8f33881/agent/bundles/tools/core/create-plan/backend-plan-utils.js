import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_common9 } from "../../common.js";
import { init_common15 } from "../edit/common.js";
import { init_common13 } from "../todo/common.js";
import { init_request_path } from "../../../utils/request-path.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_read_exec_pb } from "../../../../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { init_write_exec_pb } from "../../../../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_agent_v1 } from "../../../../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
import { init_gray_matter } from "../../../../../utils/dist/gray-matter.js";
var import_node_crypto36, logger93, planTodoFrontmatterSchema, planPhaseFrontmatterSchema, planFrontmatterSchema, planFrontmatterStringifyOptions;
export { import_node_crypto36, logger93, planFrontmatterSchema, planFrontmatterStringifyOptions, planPhaseFrontmatterSchema, planTodoFrontmatterSchema };
var __wakaru_init_backend_plan_utils_initialized = false;
export function init_backend_plan_utils() {
if (__wakaru_init_backend_plan_utils_initialized) return;
__wakaru_init_backend_plan_utils_initialized = true;
"use strict";
import_node_crypto36 = require("node:crypto");
init_dist8();
init_dist();
init_agent_pb();
init_read_exec_pb();
init_write_exec_pb();
init_agent_v1();
init_dist27();
init_gray_matter();
init_zod();
init_request_path();
init_common9();
init_common15();
init_common13();
logger93 = createLogger("@anysphere/agent:backend-plan-utils");
planTodoFrontmatterSchema = external_exports.object({
    id: external_exports.string(),
    status: external_exports.unknown().optional()
}).passthrough();
planPhaseFrontmatterSchema = external_exports.object({
    todos: external_exports.array(external_exports.unknown()).optional()
}).passthrough();
planFrontmatterSchema = external_exports.object({
    todos: external_exports.array(external_exports.unknown()).optional(),
    phases: external_exports.array(external_exports.unknown()).optional()
}).passthrough();
planFrontmatterStringifyOptions = {
    indent: 2,
    lineWidth: -1,
    quotingType: '"',
    forceQuotes: false
};

}
