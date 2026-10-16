import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { PiTruncation, init_pi_common_pb } from "./pi_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage99, __protoMessage398, PiFindExecArgs, PiFindExecResult, PiFindExecSuccess, PiFindExecError;
export { PiFindExecArgs, PiFindExecError, PiFindExecResult, PiFindExecSuccess, __protoMessage398, __protoPackage99 };
var __wakaru_init_pi_find_exec_pb_initialized = false;
export function init_pi_find_exec_pb() {
if (__wakaru_init_pi_find_exec_pb_initialized) return;
__wakaru_init_pi_find_exec_pb_initialized = true;
"use strict";
init_esm2();
init_pi_common_pb();
init_compact();
__protoPackage99 = "agent.v1.";
__protoMessage398 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage99;
    }
};
PiFindExecArgs = class _PiFindExecArgs extends __protoMessage398 {
    constructor(data){
        super();
        this.pattern = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiFindExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiFindExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiFindExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiFindExecArgs, a, b2);
    }
    static $() {
        return [
            "PiFindExecArgs|1 pattern 9|2 path 9?|3 limit 5?"
        ];
    }
};
PiFindExecResult = class _PiFindExecResult extends __protoMessage398 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiFindExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiFindExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiFindExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiFindExecResult, a, b2);
    }
    static $() {
        return [
            "PiFindExecResult|1 success #0 result|2 error #1 result",
            PiFindExecSuccess,
            PiFindExecError
        ];
    }
};
PiFindExecSuccess = class _PiFindExecSuccess extends __protoMessage398 {
    constructor(data){
        super();
        this.output = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiFindExecSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiFindExecSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiFindExecSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiFindExecSuccess, a, b2);
    }
    static $() {
        return [
            "PiFindExecSuccess|1 output 9|2 truncation #0?|3 result_limit_reached 13?",
            PiTruncation
        ];
    }
};
PiFindExecError = class _PiFindExecError extends __protoMessage398 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiFindExecError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiFindExecError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiFindExecError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiFindExecError, a, b2);
    }
    static $() {
        return [
            "PiFindExecError|1 error 9"
        ];
    }
};

}
