import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { PiTruncation, init_pi_common_pb } from "./pi_common_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage98, __protoMessage397, PiGrepExecArgs, PiGrepExecResult, PiGrepExecSuccess, PiGrepExecError;
export { PiGrepExecArgs, PiGrepExecError, PiGrepExecResult, PiGrepExecSuccess, __protoMessage397, __protoPackage98 };
var __wakaru_init_pi_grep_exec_pb_initialized = false;
export function init_pi_grep_exec_pb() {
if (__wakaru_init_pi_grep_exec_pb_initialized) return;
__wakaru_init_pi_grep_exec_pb_initialized = true;
"use strict";
init_esm2();
init_pi_common_pb();
init_compact();
__protoPackage98 = "agent.v1.";
__protoMessage397 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage98;
    }
};
PiGrepExecArgs = class _PiGrepExecArgs extends __protoMessage397 {
    constructor(data){
        super();
        this.pattern = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepExecArgs, a, b2);
    }
    static $() {
        return [
            "PiGrepExecArgs|1 pattern 9|2 path 9?|3 glob 9?|4 ignore_case 8?|5 literal 8?|6 context 5?|7 limit 5?"
        ];
    }
};
PiGrepExecResult = class _PiGrepExecResult extends __protoMessage397 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepExecResult, a, b2);
    }
    static $() {
        return [
            "PiGrepExecResult|1 success #0 result|2 error #1 result",
            PiGrepExecSuccess,
            PiGrepExecError
        ];
    }
};
PiGrepExecSuccess = class _PiGrepExecSuccess extends __protoMessage397 {
    constructor(data){
        super();
        this.output = "";
        this.linesTruncated = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepExecSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepExecSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepExecSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepExecSuccess, a, b2);
    }
    static $() {
        return [
            "PiGrepExecSuccess|1 output 9|2 truncation #0?|3 match_limit_reached 13?|4 lines_truncated 8",
            PiTruncation
        ];
    }
};
PiGrepExecError = class _PiGrepExecError extends __protoMessage397 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PiGrepExecError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PiGrepExecError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PiGrepExecError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PiGrepExecError, a, b2);
    }
    static $() {
        return [
            "PiGrepExecError|1 error 9"
        ];
    }
};

}
