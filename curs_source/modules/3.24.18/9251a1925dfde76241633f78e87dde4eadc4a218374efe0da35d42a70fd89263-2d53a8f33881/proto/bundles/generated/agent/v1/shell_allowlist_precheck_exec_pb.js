import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CommandClassifierResult, ShellCommandParsingResult, init_shell_exec_pb } from "./shell_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage91, __protoMessage390, ShellAllowlistPrecheckArgs, ShellAllowlistPrecheckResult;
export { ShellAllowlistPrecheckArgs, ShellAllowlistPrecheckResult, __protoMessage390, __protoPackage91 };
var __wakaru_init_shell_allowlist_precheck_exec_pb_initialized = false;
export function init_shell_allowlist_precheck_exec_pb() {
if (__wakaru_init_shell_allowlist_precheck_exec_pb_initialized) return;
__wakaru_init_shell_allowlist_precheck_exec_pb_initialized = true;
"use strict";
init_esm2();
init_shell_exec_pb();
init_compact();
__protoPackage91 = "agent.v1.";
__protoMessage390 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage91;
    }
};
ShellAllowlistPrecheckArgs = class _ShellAllowlistPrecheckArgs extends __protoMessage390 {
    constructor(data){
        super();
        this.command = "";
        this.workingDirectory = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShellAllowlistPrecheckArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShellAllowlistPrecheckArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShellAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShellAllowlistPrecheckArgs, a, b2);
    }
    static $() {
        return [
            "ShellAllowlistPrecheckArgs|1 command 9|2 working_directory 9|3 parsing_result #0|4 classifier_result #1?|5 tool_call_id 9?",
            ShellCommandParsingResult,
            CommandClassifierResult
        ];
    }
};
ShellAllowlistPrecheckResult = class _ShellAllowlistPrecheckResult extends __protoMessage390 {
    constructor(data){
        super();
        this.allowlisted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShellAllowlistPrecheckResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShellAllowlistPrecheckResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShellAllowlistPrecheckResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShellAllowlistPrecheckResult, a, b2);
    }
    static $() {
        return [
            "ShellAllowlistPrecheckResult|1 allowlisted 8"
        ];
    }
};

}
