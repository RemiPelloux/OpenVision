import { __toESM } from "../../../../../agent-host/dist/storage/sqlite-store.js";
import { init_swarm_prompts } from "./swarm-prompts.js";
import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var path36, SWARM_GENERIC_PROPS;
export { SWARM_GENERIC_PROPS, path36 };
var __wakaru_init_grind_swarm_subagent_initialized = false;
export function init_grind_swarm_subagent() {
if (__wakaru_init_grind_swarm_subagent_initialized) return;
__wakaru_init_grind_swarm_subagent_initialized = true;
"use strict";
path36 = __toESM(require("node:path"), 1);
init_subagents_pb();
init_swarm_prompts();
SWARM_GENERIC_PROPS = {
    agentId: "",
    repoPath: ".",
    branch: "your branch",
    instructionsFile: "AGENTS.md",
    isolationMode: "shared-no-git"
};

}
