import { createSpawnWorkload, resolveWorkloadPlacement } from "../../dist_exports.js";
import { init_oom_score_adj } from "./oom-score-adj.js";
import { init_safe_spawn_cwd } from "./safe-spawn-cwd.js";
var import_node_fs6, WORKLOAD_CGROUP_ENV_VAR2, WORKLOAD_CGROUP_PATH_PATTERN, DIRECT_WORKLOAD_PLACEMENT, capturedWorkloadPlacement, spawnWorkload;
export { DIRECT_WORKLOAD_PLACEMENT, WORKLOAD_CGROUP_ENV_VAR2, WORKLOAD_CGROUP_PATH_PATTERN, capturedWorkloadPlacement, import_node_fs6, spawnWorkload };
var __wakaru_init_workload_spawn_initialized = false;
export function init_workload_spawn() {
if (__wakaru_init_workload_spawn_initialized) return;
__wakaru_init_workload_spawn_initialized = true;
"use strict";
import_node_fs6 = require("node:fs");
init_oom_score_adj();
init_safe_spawn_cwd();
WORKLOAD_CGROUP_ENV_VAR2 = "CURSOR_WORKLOAD_CGROUP";
WORKLOAD_CGROUP_PATH_PATTERN = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/;
DIRECT_WORKLOAD_PLACEMENT = Object.freeze({
    kind: "direct"
});
capturedWorkloadPlacement = resolveWorkloadPlacement(process.platform, process.env[WORKLOAD_CGROUP_ENV_VAR2]);
spawnWorkload = createSpawnWorkload(capturedWorkloadPlacement);

}
