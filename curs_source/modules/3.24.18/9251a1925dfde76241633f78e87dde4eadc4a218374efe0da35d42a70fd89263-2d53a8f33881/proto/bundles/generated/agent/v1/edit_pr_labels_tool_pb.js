import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage57, __protoMessage357, EditPrLabelsArgs, EditPrLabelsResult, EditPrLabelsSuccess, EditPrLabelsError, EditPrLabelsToolCall;
export { EditPrLabelsArgs, EditPrLabelsError, EditPrLabelsResult, EditPrLabelsSuccess, EditPrLabelsToolCall, __protoMessage357, __protoPackage57 };
var __wakaru_init_edit_pr_labels_tool_pb_initialized = false;
export function init_edit_pr_labels_tool_pb() {
if (__wakaru_init_edit_pr_labels_tool_pb_initialized) return;
__wakaru_init_edit_pr_labels_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage57 = "agent.v1.";
__protoMessage357 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage57;
    }
};
EditPrLabelsArgs = class _EditPrLabelsArgs extends __protoMessage357 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.prUrl = "";
        this.addLabels = [];
        this.removeLabels = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EditPrLabelsArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EditPrLabelsArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EditPrLabelsArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EditPrLabelsArgs, a, b2);
    }
    static $() {
        return [
            "EditPrLabelsArgs|1 tool_call_id 9|2 pr_url 9|4 add_labels 9*|5 remove_labels 9*"
        ];
    }
};
EditPrLabelsResult = class _EditPrLabelsResult extends __protoMessage357 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EditPrLabelsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EditPrLabelsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EditPrLabelsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EditPrLabelsResult, a, b2);
    }
    static $() {
        return [
            "EditPrLabelsResult|1 success #0 result|2 error #1 result",
            EditPrLabelsSuccess,
            EditPrLabelsError
        ];
    }
};
EditPrLabelsSuccess = class _EditPrLabelsSuccess extends __protoMessage357 {
    constructor(data){
        super();
        this.prUrl = "";
        this.prNumber = 0;
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EditPrLabelsSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EditPrLabelsSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EditPrLabelsSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EditPrLabelsSuccess, a, b2);
    }
    static $() {
        return [
            "EditPrLabelsSuccess|1 pr_url 9|2 pr_number 5|3 message 9"
        ];
    }
};
EditPrLabelsError = class _EditPrLabelsError extends __protoMessage357 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EditPrLabelsError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EditPrLabelsError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EditPrLabelsError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EditPrLabelsError, a, b2);
    }
    static $() {
        return [
            "EditPrLabelsError|1 error 9"
        ];
    }
};
EditPrLabelsToolCall = class _EditPrLabelsToolCall extends __protoMessage357 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EditPrLabelsToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EditPrLabelsToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EditPrLabelsToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EditPrLabelsToolCall, a, b2);
    }
    static $() {
        return [
            "EditPrLabelsToolCall|1 args #0|2 result #1",
            EditPrLabelsArgs,
            EditPrLabelsResult
        ];
    }
};

}
