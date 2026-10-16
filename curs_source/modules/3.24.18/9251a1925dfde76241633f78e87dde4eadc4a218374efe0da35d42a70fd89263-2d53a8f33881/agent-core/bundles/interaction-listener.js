import { init_interaction_queries } from "./interaction-queries.js";
import { init_ask_question_tool_pb } from "../../proto/dist/generated/agent/v1/ask_question_tool_pb.js";
import { init_create_plan_tool_pb } from "../../proto/dist/generated/agent/v1/create_plan_tool_pb.js";
import { init_pr_management_tool_pb } from "../../proto/dist/generated/agent/v1/pr_management_tool_pb.js";
import { init_replace_env_tool_pb } from "../../proto/dist/generated/agent/v1/replace_env_tool_pb.js";
import { init_setup_vm_environment_tool_pb } from "../../proto/dist/generated/agent/v1/setup_vm_environment_tool_pb.js";
var InteractionListenerStreamClosedError;
export { InteractionListenerStreamClosedError };
var __wakaru_init_interaction_listener_initialized = false;
export function init_interaction_listener() {
if (__wakaru_init_interaction_listener_initialized) return;
__wakaru_init_interaction_listener_initialized = true;
"use strict";
init_ask_question_tool_pb();
init_create_plan_tool_pb();
init_pr_management_tool_pb();
init_replace_env_tool_pb();
init_setup_vm_environment_tool_pb();
init_interaction_queries();
InteractionListenerStreamClosedError = class extends Error {
    constructor(message, options2 = {}){
        super(message);
        this.name = "InteractionListenerStreamClosedError";
        this.cause = options2.cause;
        Object.setPrototypeOf(this, new.target.prototype);
    }
};
InteractionListenerStreamClosedError.telemetryName = "InteractionListenerStreamClosedError";

}
