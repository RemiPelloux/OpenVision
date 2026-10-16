import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage52, __protoMessage352, GetMcpToolsArgs, GetMcpToolsAgentResult, GetMcpToolsSuccess, GetMcpToolsError, GetMcpToolsToolCall;
export { GetMcpToolsAgentResult, GetMcpToolsArgs, GetMcpToolsError, GetMcpToolsSuccess, GetMcpToolsToolCall, __protoMessage352, __protoPackage52 };
var __wakaru_init_get_mcp_tools_tool_pb_initialized = false;
export function init_get_mcp_tools_tool_pb() {
if (__wakaru_init_get_mcp_tools_tool_pb_initialized) return;
__wakaru_init_get_mcp_tools_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage52 = "agent.v1.";
__protoMessage352 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage52;
    }
};
GetMcpToolsArgs = class _GetMcpToolsArgs extends __protoMessage352 {
    constructor(data){
        super();
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMcpToolsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMcpToolsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMcpToolsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMcpToolsArgs, a, b2);
    }
    static $() {
        return [
            "GetMcpToolsArgs|1 server 9?|2 tool_name 9?|3 pattern 9?|4 tool_call_id 9"
        ];
    }
};
GetMcpToolsAgentResult = class _GetMcpToolsAgentResult extends __protoMessage352 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMcpToolsAgentResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMcpToolsAgentResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMcpToolsAgentResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMcpToolsAgentResult, a, b2);
    }
    static $() {
        return [
            "GetMcpToolsAgentResult|1 success #0 result|2 error #1 result",
            GetMcpToolsSuccess,
            GetMcpToolsError
        ];
    }
};
GetMcpToolsSuccess = class _GetMcpToolsSuccess extends __protoMessage352 {
    constructor(data){
        super();
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMcpToolsSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMcpToolsSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMcpToolsSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMcpToolsSuccess, a, b2);
    }
    static $() {
        return [
            "GetMcpToolsSuccess|1 content 9|2 output_file_path 9?"
        ];
    }
};
GetMcpToolsError = class _GetMcpToolsError extends __protoMessage352 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMcpToolsError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMcpToolsError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMcpToolsError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMcpToolsError, a, b2);
    }
    static $() {
        return [
            "GetMcpToolsError|1 error 9"
        ];
    }
};
GetMcpToolsToolCall = class _GetMcpToolsToolCall extends __protoMessage352 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMcpToolsToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMcpToolsToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMcpToolsToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMcpToolsToolCall, a, b2);
    }
    static $() {
        return [
            "GetMcpToolsToolCall|1 args #0|2 result #1",
            GetMcpToolsArgs,
            GetMcpToolsAgentResult
        ];
    }
};

}
