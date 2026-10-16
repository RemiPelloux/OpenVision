import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { DiagnosticSeverity, init_diagnostics_exec_pb } from "./diagnostics_exec_pb.js";
import { Position, init_utils_pb } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage19, __protoMessage319, ReadLintsToolCall, ReadLintsToolArgs, ReadLintsToolResult, ReadLintsToolSuccess, FileDiagnostics, DiagnosticItem, DiagnosticRange, ReadLintsToolError;
export { DiagnosticItem, DiagnosticRange, FileDiagnostics, ReadLintsToolArgs, ReadLintsToolCall, ReadLintsToolError, ReadLintsToolResult, ReadLintsToolSuccess, __protoMessage319, __protoPackage19 };
var __wakaru_init_read_lints_tool_pb_initialized = false;
export function init_read_lints_tool_pb() {
if (__wakaru_init_read_lints_tool_pb_initialized) return;
__wakaru_init_read_lints_tool_pb_initialized = true;
"use strict";
init_esm2();
init_diagnostics_exec_pb();
init_utils_pb();
init_compact();
__protoPackage19 = "agent.v1.";
__protoMessage319 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage19;
    }
};
ReadLintsToolCall = class _ReadLintsToolCall extends __protoMessage319 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadLintsToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadLintsToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadLintsToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadLintsToolCall, a, b2);
    }
    static $() {
        return [
            "ReadLintsToolCall|1 args #0|2 result #1",
            ReadLintsToolArgs,
            ReadLintsToolResult
        ];
    }
};
ReadLintsToolArgs = class _ReadLintsToolArgs extends __protoMessage319 {
    constructor(data){
        super();
        this.paths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadLintsToolArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadLintsToolArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadLintsToolArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadLintsToolArgs, a, b2);
    }
    static $() {
        return [
            "ReadLintsToolArgs|1 paths 9*"
        ];
    }
};
ReadLintsToolResult = class _ReadLintsToolResult extends __protoMessage319 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadLintsToolResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadLintsToolResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadLintsToolResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadLintsToolResult, a, b2);
    }
    static $() {
        return [
            "ReadLintsToolResult|1 success #0 result|2 error #1 result",
            ReadLintsToolSuccess,
            ReadLintsToolError
        ];
    }
};
ReadLintsToolSuccess = class _ReadLintsToolSuccess extends __protoMessage319 {
    constructor(data){
        super();
        this.fileDiagnostics = [];
        this.totalFiles = 0;
        this.totalDiagnostics = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadLintsToolSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadLintsToolSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadLintsToolSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadLintsToolSuccess, a, b2);
    }
    static $() {
        return [
            "ReadLintsToolSuccess|1 file_diagnostics #0*|2 total_files 5|3 total_diagnostics 5",
            FileDiagnostics
        ];
    }
};
FileDiagnostics = class _FileDiagnostics extends __protoMessage319 {
    constructor(data){
        super();
        this.path = "";
        this.diagnostics = [];
        this.diagnosticsCount = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _FileDiagnostics().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _FileDiagnostics().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _FileDiagnostics().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_FileDiagnostics, a, b2);
    }
    static $() {
        return [
            "FileDiagnostics|1 path 9|2 diagnostics #0*|3 diagnostics_count 5",
            DiagnosticItem
        ];
    }
};
DiagnosticItem = class _DiagnosticItem extends __protoMessage319 {
    constructor(data){
        super();
        this.severity = DiagnosticSeverity.UNSPECIFIED;
        this.message = "";
        this.source = "";
        this.code = "";
        this.isStale = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DiagnosticItem().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DiagnosticItem().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DiagnosticItem().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DiagnosticItem, a, b2);
    }
    static $() {
        return [
            "DiagnosticItem|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8",
            DiagnosticSeverity,
            DiagnosticRange
        ];
    }
};
DiagnosticRange = class _DiagnosticRange extends __protoMessage319 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DiagnosticRange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DiagnosticRange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DiagnosticRange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DiagnosticRange, a, b2);
    }
    static $() {
        return [
            "DiagnosticRange|1 start #0|2 end #0",
            Position
        ];
    }
};
ReadLintsToolError = class _ReadLintsToolError extends __protoMessage319 {
    constructor(data){
        super();
        this.errorMessage = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadLintsToolError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadLintsToolError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadLintsToolError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadLintsToolError, a, b2);
    }
    static $() {
        return [
            "ReadLintsToolError|1 error_message 9"
        ];
    }
};

}
