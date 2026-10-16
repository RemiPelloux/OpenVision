import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { McpArgs, McpPermissionDenied, McpRejected, McpSuccess, SystemReminder, init_mcp_exec_pb } from "./mcp_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage22, __protoMessage322, McpToolError, McpToolResult, McpToolCall;
export { McpToolCall, McpToolError, McpToolResult, __protoMessage322, __protoPackage22 };
var __wakaru_init_mcp_tool_pb_initialized = false;
export function init_mcp_tool_pb() {
if (__wakaru_init_mcp_tool_pb_initialized) return;
__wakaru_init_mcp_tool_pb_initialized = true;
"use strict";
init_esm2();
init_mcp_exec_pb();
init_compact();
__protoPackage22 = "agent.v1.";
__protoMessage322 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage22;
    }
};
McpToolError = class _McpToolError extends __protoMessage322 {
    constructor(data){
        super();
        this.error = "";
        this.readToolDefReminder = "";
        this.systemReminders = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolError, a, b2);
    }
    static $() {
        return [
            "McpToolError|1 error 9|2 read_tool_def_reminder 9|3 system_reminders #0*",
            SystemReminder
        ];
    }
};
McpToolResult = class _McpToolResult extends __protoMessage322 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolResult, a, b2);
    }
    static $() {
        return [
            "McpToolResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result",
            McpSuccess,
            McpToolError,
            McpRejected,
            McpPermissionDenied
        ];
    }
};
McpToolCall = class _McpToolCall extends __protoMessage322 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolCall, a, b2);
    }
    static $() {
        return [
            "McpToolCall|1 args #0|2 result #1|3 description 9?",
            McpArgs,
            McpToolResult
        ];
    }
};

}
