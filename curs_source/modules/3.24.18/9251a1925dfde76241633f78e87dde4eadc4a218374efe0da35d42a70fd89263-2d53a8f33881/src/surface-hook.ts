import { init_dist8 } from "../agent-exec/dist/index.js";
import { init_node2 } from "../agent-exec/dist/node.js";
import { init_dist } from "../context/dist/index.js";
import { init_esm2 } from "../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_exec_pb } from "../proto/dist/generated/agent/v1/exec_pb.js";
import { init_hooks_pb } from "../proto/dist/generated/agent/v1/hooks_pb.js";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
var NOOP_HEADLESS_HOOK_EXECUTOR, SurfaceHookHopError;
export { NOOP_HEADLESS_HOOK_EXECUTOR, SurfaceHookHopError };
var __wakaru_init_surface_hook_initialized = false;
export function init_surface_hook() {
if (__wakaru_init_surface_hook_initialized) return;
__wakaru_init_surface_hook_initialized = true;
"use strict";
init_dist8();
init_node2();
init_dist();
init_agent_host_surface_pb();
init_exec_pb();
init_hooks_pb();
init_esm2();
init_surface_channel_hub();
NOOP_HEADLESS_HOOK_EXECUTOR = {
    executeHookForStep: async ()=>void 0
};
SurfaceHookHopError = class extends Error {
    constructor(reason){
        super(`surface hook hop failed: ${reason}`);
        this.reason = reason;
        this.name = "SurfaceHookHopError";
    }
};

}
