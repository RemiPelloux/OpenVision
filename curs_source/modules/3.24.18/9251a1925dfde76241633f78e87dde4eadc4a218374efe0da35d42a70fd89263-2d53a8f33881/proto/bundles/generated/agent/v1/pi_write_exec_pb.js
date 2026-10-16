import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage97, __protoMessage396, PiWriteExecArgs, PiWriteExecResult, PiWriteExecSuccess, PiWriteExecError, PiWriteExecRejected;
export { PiWriteExecArgs, PiWriteExecError, PiWriteExecRejected, PiWriteExecResult, PiWriteExecSuccess, __protoMessage396, __protoPackage97 };
var __wakaru_init_pi_write_exec_pb_initialized = false;
export function init_pi_write_exec_pb() {
if (__wakaru_init_pi_write_exec_pb_initialized) return;
__wakaru_init_pi_write_exec_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage97 = "agent.v1.";
__protoMessage396 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage97;
    }
};
PiWriteExecArgs = class _PiWriteExecArgs extends __protoMessage396 {
    constructor(data){
        super();
        this.path = "";
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiWriteExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiWriteExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiWriteExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiWriteExecArgs, a, b2);
    }
    static $() {
        return [
            "PiWriteExecArgs|1 path 9|2 content 9"
        ];
    }
};
PiWriteExecResult = class _PiWriteExecResult extends __protoMessage396 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiWriteExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiWriteExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiWriteExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiWriteExecResult, a, b2);
    }
    static $() {
        return [
            "PiWriteExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            PiWriteExecSuccess,
            PiWriteExecError,
            PiWriteExecRejected
        ];
    }
};
PiWriteExecSuccess = class _PiWriteExecSuccess extends __protoMessage396 {
    constructor(data){
        super();
        this.output = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiWriteExecSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiWriteExecSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiWriteExecSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiWriteExecSuccess, a, b2);
    }
    static $() {
        return [
            "PiWriteExecSuccess|1 output 9"
        ];
    }
};
PiWriteExecError = class _PiWriteExecError extends __protoMessage396 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiWriteExecError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiWriteExecError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiWriteExecError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiWriteExecError, a, b2);
    }
    static $() {
        return [
            "PiWriteExecError|1 error 9"
        ];
    }
};
PiWriteExecRejected = class _PiWriteExecRejected extends __protoMessage396 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiWriteExecRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiWriteExecRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiWriteExecRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiWriteExecRejected, a, b2);
    }
    static $() {
        return [
            "PiWriteExecRejected|1 reason 9"
        ];
    }
};

}
