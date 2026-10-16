var AgentHostNoActiveParentTurnError;
export { AgentHostNoActiveParentTurnError };
var __wakaru_init_interaction_errors_initialized = false;
export function init_interaction_errors() {
if (__wakaru_init_interaction_errors_initialized) return;
__wakaru_init_interaction_errors_initialized = true;
"use strict";
AgentHostNoActiveParentTurnError = class extends Error {
    constructor(sessionId){
        super(`Agent host bubbled interaction has no active parent turn: ${sessionId}`);
        this.name = "AgentHostNoActiveParentTurnError";
    }
};

}
