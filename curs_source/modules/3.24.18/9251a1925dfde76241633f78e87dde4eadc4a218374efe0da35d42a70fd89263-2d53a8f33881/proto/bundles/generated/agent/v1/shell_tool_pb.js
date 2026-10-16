import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ShellArgs, ShellResult, init_shell_exec_pb } from "./shell_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage6, __protoMessage36, ShellToolCall, ShellToolCallStdoutDelta, ShellToolCallStderrDelta, ShellToolCallDelta;
export { ShellToolCall, ShellToolCallDelta, ShellToolCallStderrDelta, ShellToolCallStdoutDelta, __protoMessage36, __protoPackage6 };
var __wakaru_init_shell_tool_pb_initialized = false;
export function init_shell_tool_pb() {
if (__wakaru_init_shell_tool_pb_initialized) return;
__wakaru_init_shell_tool_pb_initialized = true;
"use strict";
init_esm2();
init_shell_exec_pb();
init_compact();
__protoPackage6 = "agent.v1.";
__protoMessage36 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage6;
    }
};
ShellToolCall = class _ShellToolCall extends __protoMessage36 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShellToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShellToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShellToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShellToolCall, a, b2);
    }
    static $() {
        return [
            "ShellToolCall|1 args #0|2 result #1|3 description 9?",
            ShellArgs,
            ShellResult
        ];
    }
};
ShellToolCallStdoutDelta = class _ShellToolCallStdoutDelta extends __protoMessage36 {
    constructor(data){
        super();
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShellToolCallStdoutDelta().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShellToolCallStdoutDelta().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShellToolCallStdoutDelta().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShellToolCallStdoutDelta, a, b2);
    }
    static $() {
        return [
            "ShellToolCallStdoutDelta|1 content 9"
        ];
    }
};
ShellToolCallStderrDelta = class _ShellToolCallStderrDelta extends __protoMessage36 {
    constructor(data){
        super();
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShellToolCallStderrDelta().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShellToolCallStderrDelta().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShellToolCallStderrDelta().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShellToolCallStderrDelta, a, b2);
    }
    static $() {
        return [
            "ShellToolCallStderrDelta|1 content 9"
        ];
    }
};
ShellToolCallDelta = class _ShellToolCallDelta extends __protoMessage36 {
    constructor(data){
        super();
        this.delta = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShellToolCallDelta().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShellToolCallDelta().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShellToolCallDelta().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShellToolCallDelta, a, b2);
    }
    static $() {
        return [
            "ShellToolCallDelta|1 stdout #0 delta|2 stderr #1 delta",
            ShellToolCallStdoutDelta,
            ShellToolCallStderrDelta
        ];
    }
};

}
