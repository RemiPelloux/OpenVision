import { WriteShellStdinError, WriteShellStdinResult, WriteShellStdinSuccess, init_background_shell_exec_pb } from "../../proto/dist/generated/agent/v1/background_shell_exec_pb.js";
var LocalShellWriteStdinExecutor;
export { LocalShellWriteStdinExecutor };
var __wakaru_init_background_shell_write_stdin_initialized = false;
export function init_background_shell_write_stdin() {
if (__wakaru_init_background_shell_write_stdin_initialized) return;
__wakaru_init_background_shell_write_stdin_initialized = true;
"use strict";
init_background_shell_exec_pb();
LocalShellWriteStdinExecutor = class {
    constructor(shellStdinWriter){
        this.shellStdinWriter = shellStdinWriter;
    }
    async execute(_ctx, args) {
        const shellId = args.shellId;
        try {
            await this.shellStdinWriter(shellId, args.chars);
        } catch (error3) {
            return new WriteShellStdinResult({
                result: {
                    case: "error",
                    value: new WriteShellStdinError({
                        error: `Failed to write to shell ${shellId} stdin: ${error3 instanceof Error ? error3.message : "Unknown error"}`
                    })
                }
            });
        }
        return new WriteShellStdinResult({
            result: {
                case: "success",
                value: new WriteShellStdinSuccess({
                    shellId,
                    terminalFileLengthBeforeInputWritten: 0
                })
            }
        });
    }
};

}
