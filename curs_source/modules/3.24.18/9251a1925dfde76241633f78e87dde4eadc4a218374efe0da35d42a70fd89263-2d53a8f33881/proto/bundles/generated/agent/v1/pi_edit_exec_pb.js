import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { PiEditReplacement, init_pi_edit_tool_pb } from "./pi_edit_tool_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage96, __protoMessage395, PiEditExecArgs, PiEditExecResult, PiEditExecSuccess, PiEditExecError, PiEditExecRejected;
export { PiEditExecArgs, PiEditExecError, PiEditExecRejected, PiEditExecResult, PiEditExecSuccess, __protoMessage395, __protoPackage96 };
var __wakaru_init_pi_edit_exec_pb_initialized = false;
export function init_pi_edit_exec_pb() {
if (__wakaru_init_pi_edit_exec_pb_initialized) return;
__wakaru_init_pi_edit_exec_pb_initialized = true;
"use strict";
init_esm2();
init_pi_edit_tool_pb();
init_compact();
__protoPackage96 = "agent.v1.";
__protoMessage395 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage96;
    }
};
PiEditExecArgs = class _PiEditExecArgs extends __protoMessage395 {
    constructor(data){
        super();
        this.path = "";
        this.edits = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiEditExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiEditExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiEditExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiEditExecArgs, a, b2);
    }
    static $() {
        return [
            "PiEditExecArgs|1 path 9|2 edits #0*",
            PiEditReplacement
        ];
    }
};
PiEditExecResult = class _PiEditExecResult extends __protoMessage395 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiEditExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiEditExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiEditExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiEditExecResult, a, b2);
    }
    static $() {
        return [
            "PiEditExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            PiEditExecSuccess,
            PiEditExecError,
            PiEditExecRejected
        ];
    }
};
PiEditExecSuccess = class _PiEditExecSuccess extends __protoMessage395 {
    constructor(data){
        super();
        this.output = "";
        this.diff = "";
        this.patch = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiEditExecSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiEditExecSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiEditExecSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiEditExecSuccess, a, b2);
    }
    static $() {
        return [
            "PiEditExecSuccess|1 output 9|2 diff 9|3 patch 9|4 first_changed_line 13?"
        ];
    }
};
PiEditExecError = class _PiEditExecError extends __protoMessage395 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiEditExecError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiEditExecError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiEditExecError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiEditExecError, a, b2);
    }
    static $() {
        return [
            "PiEditExecError|1 error 9"
        ];
    }
};
PiEditExecRejected = class _PiEditExecRejected extends __protoMessage395 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiEditExecRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiEditExecRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiEditExecRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiEditExecRejected, a, b2);
    }
    static $() {
        return [
            "PiEditExecRejected|1 reason 9"
        ];
    }
};

}
