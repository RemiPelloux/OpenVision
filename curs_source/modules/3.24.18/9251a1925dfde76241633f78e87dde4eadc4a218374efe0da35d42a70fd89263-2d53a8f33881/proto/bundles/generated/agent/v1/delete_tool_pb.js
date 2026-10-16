import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { DeleteArgs, DeleteResult, init_delete_exec_pb } from "./delete_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage8, __protoMessage38, DeleteToolCall;
export { DeleteToolCall, __protoMessage38, __protoPackage8 };
var __wakaru_init_delete_tool_pb_initialized = false;
export function init_delete_tool_pb() {
if (__wakaru_init_delete_tool_pb_initialized) return;
__wakaru_init_delete_tool_pb_initialized = true;
"use strict";
init_esm2();
init_delete_exec_pb();
init_compact();
__protoPackage8 = "agent.v1.";
__protoMessage38 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage8;
    }
};
DeleteToolCall = class _DeleteToolCall extends __protoMessage38 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteToolCall, a, b2);
    }
    static $() {
        return [
            "DeleteToolCall|1 args #0|2 result #1",
            DeleteArgs,
            DeleteResult
        ];
    }
};

}
