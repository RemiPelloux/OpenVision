import { ShellAllowlistPrecheckResult, init_shell_allowlist_precheck_exec_pb } from "../../proto/dist/generated/agent/v1/shell_allowlist_precheck_exec_pb.js";
import { ShellCommandParsingResult, init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var LocalShellAllowlistPrecheckExecutor;
export { LocalShellAllowlistPrecheckExecutor };
var __wakaru_init_shell_allowlist_precheck2_initialized = false;
export function init_shell_allowlist_precheck2() {
if (__wakaru_init_shell_allowlist_precheck2_initialized) return;
__wakaru_init_shell_allowlist_precheck2_initialized = true;
"use strict";
init_shell_allowlist_precheck_exec_pb();
init_shell_exec_pb();
LocalShellAllowlistPrecheckExecutor = class {
    constructor(permissionsService){
        this.permissionsService = permissionsService;
    }
    async execute(ctx, args) {
        const parsingResult = args.parsingResult ?? new ShellCommandParsingResult();
        const allowlisted = await this.permissionsService.isShellCommandFullyAllowlisted(ctx, args.command, {
            workingDirectory: args.workingDirectory,
            parsingResult,
            classifierResult: args.classifierResult,
            toolCallId: args.toolCallId
        });
        return new ShellAllowlistPrecheckResult({
            allowlisted
        });
    }
};

}
