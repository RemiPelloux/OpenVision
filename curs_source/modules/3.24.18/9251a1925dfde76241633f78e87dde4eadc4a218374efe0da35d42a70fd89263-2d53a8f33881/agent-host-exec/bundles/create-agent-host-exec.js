import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_create_headless_decision_provider } from "./create-headless-decision-provider.js";
import { init_deny_fetch } from "./deny-fetch.js";
import { init_headless_cursorignore_ls } from "./headless-cursorignore-ls.js";
import { init_permissions_policy } from "./permissions-policy.js";
import { init_ripgrep2 } from "./ripgrep.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { init_headless_defaults } from "../../daemon_metrics_exports.js";
import { init_dist20 } from "../../local-exec/dist/index.js";
var logger142, UNPAIRED_PERMISSION_OVERRIDE_ERROR, MIXED_PERMISSION_POLICY_ERROR;
export { MIXED_PERMISSION_POLICY_ERROR, UNPAIRED_PERMISSION_OVERRIDE_ERROR, logger142 };
var __wakaru_init_create_agent_host_exec_initialized = false;
export function init_create_agent_host_exec() {
if (__wakaru_init_create_agent_host_exec_initialized) return;
__wakaru_init_create_agent_host_exec_initialized = true;
"use strict";
init_dist8();
init_dist();
init_dist20();
init_create_headless_decision_provider();
init_deny_fetch();
init_headless_cursorignore_ls();
init_headless_defaults();
init_permissions_policy();
init_ripgrep2();
logger142 = createLogger("agent-host-exec");
UNPAIRED_PERMISSION_OVERRIDE_ERROR = "permissionsService and pendingDecisionStore must be overridden together";
MIXED_PERMISSION_POLICY_ERROR = "configureSession.permissions cannot be combined with permissionsService or pendingDecisionStore overrides";

}
