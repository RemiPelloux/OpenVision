import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { GrepArgs, GrepResult, init_grep_exec_pb } from "./grep_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage11, __protoMessage311, GrepToolCall;
export { GrepToolCall, __protoMessage311, __protoPackage11 };
var __wakaru_init_grep_tool_pb_initialized = false;
export function init_grep_tool_pb() {
if (__wakaru_init_grep_tool_pb_initialized) return;
__wakaru_init_grep_tool_pb_initialized = true;
"use strict";
init_esm2();
init_grep_exec_pb();
init_compact();
__protoPackage11 = "agent.v1.";
__protoMessage311 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage11;
    }
};
GrepToolCall = class _GrepToolCall extends __protoMessage311 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GrepToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GrepToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GrepToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GrepToolCall, a, b2);
    }
    static $() {
        return [
            "GrepToolCall|1 args #0|2 result #1",
            GrepArgs,
            GrepResult
        ];
    }
};

}
