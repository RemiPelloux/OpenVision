import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage114, __protoMessage3111, GetLintsForChangeResponse, GetLintsForChangeResponse_Lint, GetLintsForChangeResponse_Lint_QuickFix, GetLintsForChangeResponse_Lint_QuickFix_Edit;
export { GetLintsForChangeResponse, GetLintsForChangeResponse_Lint, GetLintsForChangeResponse_Lint_QuickFix, GetLintsForChangeResponse_Lint_QuickFix_Edit, __protoMessage3111, __protoPackage114 };
var __wakaru_init_shadow_workspace_pb_initialized = false;
export function init_shadow_workspace_pb() {
if (__wakaru_init_shadow_workspace_pb_initialized) return;
__wakaru_init_shadow_workspace_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage114 = "aiserver.v1.";
__protoMessage3111 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage114;
    }
};
GetLintsForChangeResponse = class _GetLintsForChangeResponse extends __protoMessage3111 {
    constructor(data){
        super();
        this.lints = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetLintsForChangeResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetLintsForChangeResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetLintsForChangeResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetLintsForChangeResponse, a, b2);
    }
    static $() {
        return [
            "GetLintsForChangeResponse|1 lints #0*",
            GetLintsForChangeResponse_Lint
        ];
    }
};
GetLintsForChangeResponse_Lint = class _GetLintsForChangeResponse_Lint extends __protoMessage3111 {
    constructor(data){
        super();
        this.message = "";
        this.severity = "";
        this.relativeWorkspacePath = "";
        this.startLineNumberOneIndexed = 0;
        this.startColumnOneIndexed = 0;
        this.endLineNumberInclusiveOneIndexed = 0;
        this.endColumnOneIndexed = 0;
        this.quickFixes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetLintsForChangeResponse_Lint().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetLintsForChangeResponse_Lint().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetLintsForChangeResponse_Lint().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetLintsForChangeResponse_Lint, a, b2);
    }
    static $() {
        return [
            "GetLintsForChangeResponse.Lint|1 message 9|2 severity 9|3 relative_workspace_path 9|4 start_line_number_one_indexed 5|5 start_column_one_indexed 5|6 end_line_number_inclusive_one_indexed 5|7 end_column_one_indexed 5|9 quick_fixes #0*",
            GetLintsForChangeResponse_Lint_QuickFix
        ];
    }
};
GetLintsForChangeResponse_Lint_QuickFix = class _GetLintsForChangeResponse_Lint_QuickFix extends __protoMessage3111 {
    constructor(data){
        super();
        this.message = "";
        this.kind = "";
        this.isPreferred = false;
        this.edits = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetLintsForChangeResponse_Lint_QuickFix().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetLintsForChangeResponse_Lint_QuickFix().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetLintsForChangeResponse_Lint_QuickFix().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetLintsForChangeResponse_Lint_QuickFix, a, b2);
    }
    static $() {
        return [
            "GetLintsForChangeResponse.Lint.QuickFix|1 message 9|2 kind 9|3 is_preferred 8|4 edits #0*",
            GetLintsForChangeResponse_Lint_QuickFix_Edit
        ];
    }
};
GetLintsForChangeResponse_Lint_QuickFix_Edit = class _GetLintsForChangeResponse_Lint_QuickFix_Edit extends __protoMessage3111 {
    constructor(data){
        super();
        this.relativeWorkspacePath = "";
        this.text = "";
        this.startLineNumberOneIndexed = 0;
        this.startColumnOneIndexed = 0;
        this.endLineNumberInclusiveOneIndexed = 0;
        this.endColumnOneIndexed = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetLintsForChangeResponse_Lint_QuickFix_Edit().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetLintsForChangeResponse_Lint_QuickFix_Edit().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetLintsForChangeResponse_Lint_QuickFix_Edit().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetLintsForChangeResponse_Lint_QuickFix_Edit, a, b2);
    }
    static $() {
        return [
            "GetLintsForChangeResponse.Lint.QuickFix.Edit|1 relative_workspace_path 9|2 text 9|3 start_line_number_one_indexed 5|4 start_column_one_indexed 5|5 end_line_number_inclusive_one_indexed 5|6 end_column_one_indexed 5"
        ];
    }
};

}
