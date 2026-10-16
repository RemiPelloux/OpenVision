import { kmn } from "./ask_question_tool_pb.js";
import { ebt } from "./create_plan_tool_pb.js";
import { VSm } from "./interaction-queries.ts";
import { w5o } from "./pr_management_tool_pb.js";
import { vSr } from "./replace_env_tool_pb.js";
import { b5o } from "./setup_vm_environment_tool_pb.js";
import { E } from "./tslib.es6.js";
var L91;
export { L91 };
var __wakaru_O91_initialized = false;
export function O91() {
if (__wakaru_O91_initialized) return;
__wakaru_O91_initialized = true;
"use strict";
E(), kmn(), ebt(), w5o(), vSr(), b5o(), VSm(), L91 = class extends Error {
    static{
        this.telemetryName = "InteractionListenerStreamClosedError";
    }
    constructor(t, e = {}){
        super(t), this.name = "InteractionListenerStreamClosedError", this.cause = e.cause, Object.setPrototypeOf(this, new.target.prototype);
    }
};

}
