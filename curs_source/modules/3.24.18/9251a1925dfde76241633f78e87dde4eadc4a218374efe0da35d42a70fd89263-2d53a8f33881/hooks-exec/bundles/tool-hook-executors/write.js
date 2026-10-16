import { init_generic_hooks } from "../generic-hooks.js";
import { init_tool_names } from "../tool-names.js";
import { init_dist6 } from "../../../hooks/dist/index.js";
import { createExecutorWithHooks, createWriteHooksConfig } from "../../../mcp_sandbox_policy_exports.js";
import { init_libesm } from "../../../node_modules/.pnpm/diff@8.0.3/node_modules/diff/libesm/index.js";
import { init_write_exec_pb } from "../../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var import_promises48, DIFF_SIZE_THRESHOLD_BYTES, WriteExecutorWithHooks;
export { DIFF_SIZE_THRESHOLD_BYTES, WriteExecutorWithHooks, import_promises48 };
var __wakaru_init_write4_initialized = false;
export function init_write4() {
if (__wakaru_init_write4_initialized) return;
__wakaru_init_write4_initialized = true;
"use strict";
import_promises48 = require("node:fs/promises");
init_dist6();
init_write_exec_pb();
init_dist3();
init_libesm();
init_generic_hooks();
init_tool_names();
DIFF_SIZE_THRESHOLD_BYTES = 256 * 1024;
WriteExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        const preWriteStateMap = new Map();
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, createWriteHooksConfig(hookExecutor, preWriteStateMap));
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
