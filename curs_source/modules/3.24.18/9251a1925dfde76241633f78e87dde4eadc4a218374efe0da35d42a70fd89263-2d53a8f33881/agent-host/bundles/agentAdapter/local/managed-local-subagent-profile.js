import { NonRetriableError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
var UnsupportedManagedLocalSubagentTypeError, UnconfinedManagedLocalSubagentError;
export { UnconfinedManagedLocalSubagentError, UnsupportedManagedLocalSubagentTypeError };
var __wakaru_init_managed_local_subagent_profile_initialized = false;
export function init_managed_local_subagent_profile() {
if (__wakaru_init_managed_local_subagent_profile_initialized) return;
__wakaru_init_managed_local_subagent_profile_initialized = true;
"use strict";
init_dist35();
init_dist9();
UnsupportedManagedLocalSubagentTypeError = class extends NonRetriableError {
    constructor(subagentTypeName){
        super(`Local loop cannot resolve subagent type "${subagentTypeName}"`, {
            displayInfo: {
                title: "Local loop can't run this subagent type",
                detail: `This build cannot resolve the "${subagentTypeName}" subagent type client-side (it is not a builtin or a workspace/plugin subagent this conversation knows; meta and computer-use subagents are not supported on the local loop yet \u2014 see GAPS.md). Disable agent_host_local_loop to run it through the backend loop.`,
                isRetryable: false
            }
        });
        this.subagentTypeName = subagentTypeName;
    }
};
UnconfinedManagedLocalSubagentError = class extends NonRetriableError {
    constructor(subagentTypeName){
        super(`Local loop cannot confine subagent type "${subagentTypeName}": the turn has no write allowlist`, {
            displayInfo: {
                title: "Local loop can't confine this subagent type",
                detail: `The "${subagentTypeName}" subagent type restricts where it writes, and this turn has no write allowlist to enforce (usually because no project folder is open), so the local loop refused to run it unconfined. Open a project folder and retry; if one is open, update Cursor, or disable agent_host_local_loop to run it through the backend loop.`,
                isRetryable: false
            }
        });
        this.subagentTypeName = subagentTypeName;
    }
};

}
