import { init_agent_data_cleanup2 } from "./agent-data-cleanup.js";
import { init_create_agent_host_exec } from "./create-agent-host-exec.js";
import { init_create_headless_decision_provider } from "./create-headless-decision-provider.js";
import { init_create_headless_disk_hook_executor } from "./create-headless-disk-hook-executor.js";
import { init_create_headless_hooks_overlay } from "./create-headless-hooks-overlay.js";
import { init_create_headless_mcp_lease } from "./create-headless-mcp-lease.js";
import { init_create_headless_setting_sources_loader } from "./create-headless-setting-sources-loader.js";
import { init_credential_bound_team_settings } from "./credential-bound-team-settings.js";
import { init_hosted_mcp_routing } from "./hosted-mcp-routing.js";
import { init_permissions_policy } from "./permissions-policy.js";
import { init_setting_sources } from "./setting-sources.js";
import { init_headless_defaults } from "../../daemon_metrics_exports.js";
import { init_dist20 } from "../../local-exec/dist/index.js";
import { init_dist39 } from "../../placement-routing-mcp/dist/index.js";
var __wakaru_init_dist40_initialized = false;
export function init_dist40() {
if (__wakaru_init_dist40_initialized) return;
__wakaru_init_dist40_initialized = true;
"use strict";
init_dist20();
init_dist39();
init_agent_data_cleanup2();
init_create_agent_host_exec();
init_create_headless_decision_provider();
init_create_headless_disk_hook_executor();
init_create_headless_hooks_overlay();
init_create_headless_mcp_lease();
init_create_headless_setting_sources_loader();
init_credential_bound_team_settings();
init_headless_defaults();
init_hosted_mcp_routing();
init_permissions_policy();
init_setting_sources();

}
