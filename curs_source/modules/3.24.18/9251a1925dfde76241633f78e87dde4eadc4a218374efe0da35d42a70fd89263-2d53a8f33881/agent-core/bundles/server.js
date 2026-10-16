import { init_cloud_agent_artifact_paths } from "./cloud-agent-artifact-paths.js";
import { init_redacted_interaction_listener } from "./redacted-interaction-listener.js";
import { init_redacted_interaction_updates } from "./redacted-interaction-updates.js";
var __wakaru_init_server_initialized = false;
export function init_server() {
if (__wakaru_init_server_initialized) return;
__wakaru_init_server_initialized = true;
"use strict";
init_cloud_agent_artifact_paths();
init_redacted_interaction_listener();
init_redacted_interaction_updates();

}
