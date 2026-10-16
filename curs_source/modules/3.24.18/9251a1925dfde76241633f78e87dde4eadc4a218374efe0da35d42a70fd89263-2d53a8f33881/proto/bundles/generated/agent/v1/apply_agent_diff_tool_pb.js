import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage30, __protoMessage330, ApplyAgentDiffToolCall, ApplyAgentDiffArgs, ApplyAgentDiffResult, ApplyAgentDiffSuccess, AppliedAgentChange, AppliedAgentChange_ChangeType, ApplyAgentDiffError;
export { AppliedAgentChange, AppliedAgentChange_ChangeType, ApplyAgentDiffArgs, ApplyAgentDiffError, ApplyAgentDiffResult, ApplyAgentDiffSuccess, ApplyAgentDiffToolCall, __protoMessage330, __protoPackage30 };
var __wakaru_init_apply_agent_diff_tool_pb_initialized = false;
export function init_apply_agent_diff_tool_pb() {
if (__wakaru_init_apply_agent_diff_tool_pb_initialized) return;
__wakaru_init_apply_agent_diff_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage30 = "agent.v1.";
__protoMessage330 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage30;
    }
};
ApplyAgentDiffToolCall = class _ApplyAgentDiffToolCall extends __protoMessage330 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApplyAgentDiffToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApplyAgentDiffToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApplyAgentDiffToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApplyAgentDiffToolCall, a, b2);
    }
    static $() {
        return [
            "ApplyAgentDiffToolCall|1 args #0|2 result #1",
            ApplyAgentDiffArgs,
            ApplyAgentDiffResult
        ];
    }
};
ApplyAgentDiffArgs = class _ApplyAgentDiffArgs extends __protoMessage330 {
    constructor(data){
        super();
        this.agentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApplyAgentDiffArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApplyAgentDiffArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApplyAgentDiffArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApplyAgentDiffArgs, a, b2);
    }
    static $() {
        return [
            "ApplyAgentDiffArgs|1 agent_id 9"
        ];
    }
};
ApplyAgentDiffResult = class _ApplyAgentDiffResult extends __protoMessage330 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApplyAgentDiffResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApplyAgentDiffResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApplyAgentDiffResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApplyAgentDiffResult, a, b2);
    }
    static $() {
        return [
            "ApplyAgentDiffResult|1 success #0 result|2 error #1 result",
            ApplyAgentDiffSuccess,
            ApplyAgentDiffError
        ];
    }
};
ApplyAgentDiffSuccess = class _ApplyAgentDiffSuccess extends __protoMessage330 {
    constructor(data){
        super();
        this.appliedChanges = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApplyAgentDiffSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApplyAgentDiffSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApplyAgentDiffSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApplyAgentDiffSuccess, a, b2);
    }
    static $() {
        return [
            "ApplyAgentDiffSuccess|1 applied_changes #0*",
            AppliedAgentChange
        ];
    }
};
AppliedAgentChange = class _AppliedAgentChange extends __protoMessage330 {
    constructor(data){
        super();
        this.path = "";
        this.changeType = AppliedAgentChange_ChangeType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AppliedAgentChange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AppliedAgentChange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AppliedAgentChange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AppliedAgentChange, a, b2);
    }
    static $() {
        return [
            "AppliedAgentChange|1 path 9|2 change_type #0|3 before_content 9?|4 after_content 9?|5 error 9?|6 message_for_model 9?",
            AppliedAgentChange_ChangeType
        ];
    }
};
AppliedAgentChange_ChangeType = enumType2(proto3, __protoPackage30, "AppliedAgentChange.ChangeType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATED"
    ],
    [
        2,
        "MODIFIED"
    ],
    [
        3,
        "DELETED"
    ]
], 1);
ApplyAgentDiffError = class _ApplyAgentDiffError extends __protoMessage330 {
    constructor(data){
        super();
        this.error = "";
        this.appliedChanges = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApplyAgentDiffError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApplyAgentDiffError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApplyAgentDiffError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApplyAgentDiffError, a, b2);
    }
    static $() {
        return [
            "ApplyAgentDiffError|1 error 9|2 applied_changes #0*",
            AppliedAgentChange
        ];
    }
};

}
