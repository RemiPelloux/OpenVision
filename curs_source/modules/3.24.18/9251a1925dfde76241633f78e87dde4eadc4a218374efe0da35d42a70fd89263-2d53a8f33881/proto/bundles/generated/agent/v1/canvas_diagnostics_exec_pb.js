import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { Diagnostic, init_diagnostics_exec_pb } from "./diagnostics_exec_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage90, __protoMessage389, CanvasDiagnosticsArgs, CanvasDiagnosticsResult, CanvasDiagnosticsSuccess, CanvasDiagnosticsError;
export { CanvasDiagnosticsArgs, CanvasDiagnosticsError, CanvasDiagnosticsResult, CanvasDiagnosticsSuccess, __protoMessage389, __protoPackage90 };
var __wakaru_init_canvas_diagnostics_exec_pb_initialized = false;
export function init_canvas_diagnostics_exec_pb() {
if (__wakaru_init_canvas_diagnostics_exec_pb_initialized) return;
__wakaru_init_canvas_diagnostics_exec_pb_initialized = true;
"use strict";
init_esm2();
init_diagnostics_exec_pb();
init_compact();
__protoPackage90 = "agent.v1.";
__protoMessage389 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage90;
    }
};
CanvasDiagnosticsArgs = class _CanvasDiagnosticsArgs extends __protoMessage389 {
    constructor(data){
        super();
        this.path = "";
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CanvasDiagnosticsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CanvasDiagnosticsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CanvasDiagnosticsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CanvasDiagnosticsArgs, a, b2);
    }
    static $() {
        return [
            "CanvasDiagnosticsArgs|1 path 9|2 tool_call_id 9"
        ];
    }
};
CanvasDiagnosticsResult = class _CanvasDiagnosticsResult extends __protoMessage389 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CanvasDiagnosticsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CanvasDiagnosticsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CanvasDiagnosticsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CanvasDiagnosticsResult, a, b2);
    }
    static $() {
        return [
            "CanvasDiagnosticsResult|1 success #0 result|2 error #1 result|3 canvas_id 9?|4 title 9?|5 save_state 9?|6 save_detail 9?",
            CanvasDiagnosticsSuccess,
            CanvasDiagnosticsError
        ];
    }
};
CanvasDiagnosticsSuccess = class _CanvasDiagnosticsSuccess extends __protoMessage389 {
    constructor(data){
        super();
        this.path = "";
        this.diagnostics = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CanvasDiagnosticsSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CanvasDiagnosticsSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CanvasDiagnosticsSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CanvasDiagnosticsSuccess, a, b2);
    }
    static $() {
        return [
            "CanvasDiagnosticsSuccess|1 path 9|2 diagnostics #0*",
            Diagnostic
        ];
    }
};
CanvasDiagnosticsError = class _CanvasDiagnosticsError extends __protoMessage389 {
    constructor(data){
        super();
        this.path = "";
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CanvasDiagnosticsError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CanvasDiagnosticsError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CanvasDiagnosticsError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CanvasDiagnosticsError, a, b2);
    }
    static $() {
        return [
            "CanvasDiagnosticsError|1 path 9|2 error 9"
        ];
    }
};

}
