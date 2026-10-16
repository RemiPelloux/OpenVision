import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { RecordScreenArgs, RecordScreenResult, init_record_screen_exec_pb } from "./record_screen_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage37, __protoMessage337, RecordScreenToolCall;
export { RecordScreenToolCall, __protoMessage337, __protoPackage37 };
var __wakaru_init_record_screen_tool_pb_initialized = false;
export function init_record_screen_tool_pb() {
if (__wakaru_init_record_screen_tool_pb_initialized) return;
__wakaru_init_record_screen_tool_pb_initialized = true;
"use strict";
init_esm2();
init_record_screen_exec_pb();
init_compact();
__protoPackage37 = "agent.v1.";
__protoMessage337 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage37;
    }
};
RecordScreenToolCall = class _RecordScreenToolCall extends __protoMessage337 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RecordScreenToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RecordScreenToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RecordScreenToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RecordScreenToolCall, a, b2);
    }
    static $() {
        return [
            "RecordScreenToolCall|1 args #0|2 result #1",
            RecordScreenArgs,
            RecordScreenResult
        ];
    }
};

}
