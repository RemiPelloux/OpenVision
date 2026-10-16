import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { FetchArgs, FetchResult, init_fetch_exec_pb } from "./fetch_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage33, __protoMessage333, FetchToolCall;
export { FetchToolCall, __protoMessage333, __protoPackage33 };
var __wakaru_init_fetch_tool_pb_initialized = false;
export function init_fetch_tool_pb() {
if (__wakaru_init_fetch_tool_pb_initialized) return;
__wakaru_init_fetch_tool_pb_initialized = true;
"use strict";
init_esm2();
init_fetch_exec_pb();
init_compact();
__protoPackage33 = "agent.v1.";
__protoMessage333 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage33;
    }
};
FetchToolCall = class _FetchToolCall extends __protoMessage333 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FetchToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FetchToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FetchToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FetchToolCall, a, b2);
    }
    static $() {
        return [
            "FetchToolCall|1 args #0|2 result #1",
            FetchArgs,
            FetchResult
        ];
    }
};

}
