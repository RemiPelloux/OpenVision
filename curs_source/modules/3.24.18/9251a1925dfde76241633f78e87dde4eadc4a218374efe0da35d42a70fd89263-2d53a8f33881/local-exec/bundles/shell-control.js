import { ForceBackgroundShellResult, ForceBackgroundShellStatus, init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var LocalForceBackgroundShellExecutor;
export { LocalForceBackgroundShellExecutor };
var __wakaru_init_shell_control2_initialized = false;
export function init_shell_control2() {
if (__wakaru_init_shell_control2_initialized) return;
__wakaru_init_shell_control2_initialized = true;
"use strict";
init_shell_exec_pb();
LocalForceBackgroundShellExecutor = class {
    constructor(shellStreamExecutor){
        this.shellStreamExecutor = shellStreamExecutor;
    }
    async execute(_ctx, args, _options) {
        if (args.toolCallId.trim() === "") {
            return new ForceBackgroundShellResult({
                status: ForceBackgroundShellStatus.NOT_FOUND
            });
        }
        return this.shellStreamExecutor.forceBackgroundByToolCallId(args.toolCallId);
    }
};

}
