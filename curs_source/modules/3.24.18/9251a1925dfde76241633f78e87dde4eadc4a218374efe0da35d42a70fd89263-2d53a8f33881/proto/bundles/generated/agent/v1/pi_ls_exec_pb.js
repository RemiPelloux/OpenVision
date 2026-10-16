import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { PiTruncation, init_pi_common_pb } from "./pi_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage100, __protoMessage399, PiLsExecArgs, PiLsExecResult, PiLsExecSuccess, PiLsExecError;
export { PiLsExecArgs, PiLsExecError, PiLsExecResult, PiLsExecSuccess, __protoMessage399, __protoPackage100 };
var __wakaru_init_pi_ls_exec_pb_initialized = false;
export function init_pi_ls_exec_pb() {
if (__wakaru_init_pi_ls_exec_pb_initialized) return;
__wakaru_init_pi_ls_exec_pb_initialized = true;
"use strict";
init_esm2();
init_pi_common_pb();
init_compact();
__protoPackage100 = "agent.v1.";
__protoMessage399 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage100;
    }
};
PiLsExecArgs = class _PiLsExecArgs extends __protoMessage399 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsExecArgs, a, b2);
    }
    static $() {
        return [
            "PiLsExecArgs|1 path 9?|2 limit 5?"
        ];
    }
};
PiLsExecResult = class _PiLsExecResult extends __protoMessage399 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsExecResult, a, b2);
    }
    static $() {
        return [
            "PiLsExecResult|1 success #0 result|2 error #1 result",
            PiLsExecSuccess,
            PiLsExecError
        ];
    }
};
PiLsExecSuccess = class _PiLsExecSuccess extends __protoMessage399 {
    constructor(data){
        super();
        this.output = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsExecSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsExecSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsExecSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsExecSuccess, a, b2);
    }
    static $() {
        return [
            "PiLsExecSuccess|1 output 9|2 truncation #0?|3 entry_limit_reached 13?",
            PiTruncation
        ];
    }
};
PiLsExecError = class _PiLsExecError extends __protoMessage399 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiLsExecError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiLsExecError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiLsExecError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiLsExecError, a, b2);
    }
    static $() {
        return [
            "PiLsExecError|1 error 9"
        ];
    }
};

}
