import { init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_surface_channel_hub } from "./surface-channel-hub.ts";
var SurfaceGitHopError;
export { SurfaceGitHopError };
var __wakaru_init_surface_git_initialized = false;
export function init_surface_git() {
if (__wakaru_init_surface_git_initialized) return;
__wakaru_init_surface_git_initialized = true;
"use strict";
init_agent_host_surface_pb();
init_surface_channel_hub();
SurfaceGitHopError = class extends Error {
    constructor(reason){
        super(`surface git hop failed: ${reason}`);
        this.reason = reason;
        this.name = "SurfaceGitHopError";
    }
};

}
