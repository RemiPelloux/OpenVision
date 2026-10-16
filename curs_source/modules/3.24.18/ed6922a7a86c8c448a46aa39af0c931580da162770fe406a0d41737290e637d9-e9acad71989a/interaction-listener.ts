import { K7t } from "./ask_question_tool_pb.js";
import { Lyt } from "./create_plan_tool_pb.js";
import { _Pd } from "./interaction-queries.ts";
import { UGs } from "./pr_management_tool_pb.js";
import { N4i } from "./replace_env_tool_pb.js";
import { NGs } from "./setup_vm_environment_tool_pb.js";
import { x } from "./tslib.es6.js";
var OCv;
export { OCv };
var __wakaru_FCv_initialized = false;
export function FCv() {
if (__wakaru_FCv_initialized) return;
__wakaru_FCv_initialized = true;
"use strict";
x(), K7t(), Lyt(), UGs(), N4i(), NGs(), _Pd(), OCv = class extends Error {
    static{
        this.telemetryName = "InteractionListenerStreamClosedError";
    }
    constructor(e, t = {}){
        super(e), this.name = "InteractionListenerStreamClosedError", this.cause = t.cause, Object.setPrototypeOf(this, new.target.prototype);
    }
};

}
