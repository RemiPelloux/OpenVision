import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_canvas_post_edit_diagnostics } from "./canvas-post-edit-diagnostics.js";
import { init_overridable_config } from "../../../utils/overridable-config.js";
import { init_request_id } from "../../../utils/request-id.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createCounter } from "../../../../../dist_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var logger91, eagerStoreConflictBarrier, DEFAULT_WRITE_BARRIER_TIMEOUT_MS2;
export { DEFAULT_WRITE_BARRIER_TIMEOUT_MS2, eagerStoreConflictBarrier, logger91 };
var __wakaru_init_post_write_result_decoration_initialized = false;
export function init_post_write_result_decoration() {
if (__wakaru_init_post_write_result_decoration_initialized) return;
__wakaru_init_post_write_result_decoration_initialized = true;
"use strict";
init_dist8();
init_dist();
init_dist4();
init_dist3();
init_overridable_config();
init_request_id();
init_canvas_post_edit_diagnostics();
logger91 = createLogger("@anysphere/agent");
eagerStoreConflictBarrier = createCounter("agent.store.eager_barrier", {
    description: "Eager same-result agent-store conflict barrier outcomes."
});
DEFAULT_WRITE_BARRIER_TIMEOUT_MS2 = 2e3;

}
