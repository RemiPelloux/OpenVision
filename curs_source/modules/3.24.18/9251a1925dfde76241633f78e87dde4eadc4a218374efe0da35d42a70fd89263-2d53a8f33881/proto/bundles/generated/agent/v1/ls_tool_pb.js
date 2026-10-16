import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { LsArgs, LsResult, init_ls_exec_pb } from "./ls_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage17, __protoMessage317, LsToolCall;
export { LsToolCall, __protoMessage317, __protoPackage17 };
var __wakaru_init_ls_tool_pb_initialized = false;
export function init_ls_tool_pb() {
if (__wakaru_init_ls_tool_pb_initialized) return;
__wakaru_init_ls_tool_pb_initialized = true;
"use strict";
init_esm2();
init_ls_exec_pb();
init_compact();
__protoPackage17 = "agent.v1.";
__protoMessage317 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage17;
    }
};
LsToolCall = class _LsToolCall extends __protoMessage317 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _LsToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _LsToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _LsToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_LsToolCall, a, b2);
    }
    static $() {
        return [
            "LsToolCall|1 args #0|2 result #1",
            LsArgs,
            LsResult
        ];
    }
};

}
