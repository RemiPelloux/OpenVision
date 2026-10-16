import { init_agent_store_pb } from "../../../proto/dist/generated/aiserver/v1/agent_store_pb.js";
var AgentStoreDirectoryNotEmptyError;
export { AgentStoreDirectoryNotEmptyError };
var __wakaru_init_bcs_client_initialized = false;
export function init_bcs_client() {
if (__wakaru_init_bcs_client_initialized) return;
__wakaru_init_bcs_client_initialized = true;
"use strict";
init_agent_store_pb();
AgentStoreDirectoryNotEmptyError = class extends Error {
    constructor(message = "Agent store directory is not empty"){
        super(message);
        this.name = "AgentStoreDirectoryNotEmptyError";
    }
};

}
