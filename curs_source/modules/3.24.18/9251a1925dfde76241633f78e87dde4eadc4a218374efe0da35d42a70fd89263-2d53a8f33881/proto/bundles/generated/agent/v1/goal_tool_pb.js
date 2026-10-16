import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage73, __protoMessage373, GoalStatus, CreateGoalArgs, CreateGoalSuccess, GoalError, CreateGoalResult, CreateGoalToolCall, UpdateGoalArgs, UpdateGoalSuccess, UpdateGoalResult, UpdateGoalToolCall;
export { CreateGoalArgs, CreateGoalResult, CreateGoalSuccess, CreateGoalToolCall, GoalError, GoalStatus, UpdateGoalArgs, UpdateGoalResult, UpdateGoalSuccess, UpdateGoalToolCall, __protoMessage373, __protoPackage73 };
var __wakaru_init_goal_tool_pb_initialized = false;
export function init_goal_tool_pb() {
if (__wakaru_init_goal_tool_pb_initialized) return;
__wakaru_init_goal_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage73 = "agent.v1.";
__protoMessage373 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage73;
    }
};
GoalStatus = enumType2(proto3, __protoPackage73, "GoalStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACTIVE"
    ],
    [
        2,
        "PAUSED"
    ],
    [
        3,
        "COMPLETE"
    ],
    [
        4,
        "CLEARED"
    ]
], 1);
CreateGoalArgs = class _CreateGoalArgs extends __protoMessage373 {
    constructor(data){
        super();
        this.objective = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateGoalArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateGoalArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateGoalArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateGoalArgs, a, b2);
    }
    static $() {
        return [
            "CreateGoalArgs|1 objective 9"
        ];
    }
};
CreateGoalSuccess = class _CreateGoalSuccess extends __protoMessage373 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateGoalSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateGoalSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateGoalSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateGoalSuccess, a, b2);
    }
    static $() {
        return [
            "CreateGoalSuccess"
        ];
    }
};
GoalError = class _GoalError extends __protoMessage373 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GoalError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GoalError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GoalError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GoalError, a, b2);
    }
    static $() {
        return [
            "GoalError|1 error 9"
        ];
    }
};
CreateGoalResult = class _CreateGoalResult extends __protoMessage373 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateGoalResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateGoalResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateGoalResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateGoalResult, a, b2);
    }
    static $() {
        return [
            "CreateGoalResult|1 success #0 result|2 error #1 result",
            CreateGoalSuccess,
            GoalError
        ];
    }
};
CreateGoalToolCall = class _CreateGoalToolCall extends __protoMessage373 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateGoalToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateGoalToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateGoalToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateGoalToolCall, a, b2);
    }
    static $() {
        return [
            "CreateGoalToolCall|1 args #0|2 result #1",
            CreateGoalArgs,
            CreateGoalResult
        ];
    }
};
UpdateGoalArgs = class _UpdateGoalArgs extends __protoMessage373 {
    constructor(data){
        super();
        this.status = GoalStatus.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateGoalArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateGoalArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateGoalArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateGoalArgs, a, b2);
    }
    static $() {
        return [
            "UpdateGoalArgs|1 status #0",
            GoalStatus
        ];
    }
};
UpdateGoalSuccess = class _UpdateGoalSuccess extends __protoMessage373 {
    constructor(data){
        super();
        this.status = GoalStatus.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateGoalSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateGoalSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateGoalSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateGoalSuccess, a, b2);
    }
    static $() {
        return [
            "UpdateGoalSuccess|1 status #0",
            GoalStatus
        ];
    }
};
UpdateGoalResult = class _UpdateGoalResult extends __protoMessage373 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateGoalResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateGoalResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateGoalResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateGoalResult, a, b2);
    }
    static $() {
        return [
            "UpdateGoalResult|1 success #0 result|2 error #1 result",
            UpdateGoalSuccess,
            GoalError
        ];
    }
};
UpdateGoalToolCall = class _UpdateGoalToolCall extends __protoMessage373 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateGoalToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateGoalToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateGoalToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateGoalToolCall, a, b2);
    }
    static $() {
        return [
            "UpdateGoalToolCall|1 args #0|2 result #1",
            UpdateGoalArgs,
            UpdateGoalResult
        ];
    }
};

}
