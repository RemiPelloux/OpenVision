import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ReadMcpResourceExecArgs, ReadMcpResourceExecResult, init_mcp_exec_pb } from "./mcp_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage29, __protoMessage329, ListMcpResourcesToolCall, ReadMcpResourceToolCall;
export { ListMcpResourcesToolCall, ReadMcpResourceToolCall, __protoMessage329, __protoPackage29 };
var __wakaru_init_mcp_resource_tool_pb_initialized = false;
export function init_mcp_resource_tool_pb() {
if (__wakaru_init_mcp_resource_tool_pb_initialized) return;
__wakaru_init_mcp_resource_tool_pb_initialized = true;
"use strict";
init_esm2();
init_mcp_exec_pb();
init_compact();
__protoPackage29 = "agent.v1.";
__protoMessage329 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage29;
    }
};
ListMcpResourcesToolCall = class _ListMcpResourcesToolCall extends __protoMessage329 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpResourcesToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpResourcesToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpResourcesToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpResourcesToolCall, a, b2);
    }
    static $() {
        return [
            "ListMcpResourcesToolCall|1 args #0|2 result #1",
            ListMcpResourcesExecArgs,
            ListMcpResourcesExecResult
        ];
    }
};
ReadMcpResourceToolCall = class _ReadMcpResourceToolCall extends __protoMessage329 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadMcpResourceToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadMcpResourceToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadMcpResourceToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadMcpResourceToolCall, a, b2);
    }
    static $() {
        return [
            "ReadMcpResourceToolCall|1 args #0|2 result #1",
            ReadMcpResourceExecArgs,
            ReadMcpResourceExecResult
        ];
    }
};

}
