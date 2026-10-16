import { hopAgentStoreExtraEnv, hopAgentStoreSkillRoots, registerImplementedDaemonCapability } from "../../daemon_metrics_exports.js";
import { init_dist20 } from "../../local-exec/dist/index.js";
import { init_surface_agent_store } from "./surface-agent-store.ts";
import { DAEMON_CAPABILITY_AGENT_STORE_V1, init_capabilities2 } from "../capabilities.ts";
var defaultStitchedAgentStoreDeps;
export { defaultStitchedAgentStoreDeps };
var __wakaru_init_stitch_agent_store_initialized = false;
export function init_stitch_agent_store() {
if (__wakaru_init_stitch_agent_store_initialized) return;
__wakaru_init_stitch_agent_store_initialized = true;
"use strict";
init_dist20();
init_capabilities2();
init_surface_agent_store();
registerImplementedDaemonCapability(DAEMON_CAPABILITY_AGENT_STORE_V1);
defaultStitchedAgentStoreDeps = ()=>({
        hopExtraEnv: hopAgentStoreExtraEnv,
        hopSkillRoots: hopAgentStoreSkillRoots
    });

}
