import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage42, __protoMessage342, SetupVmEnvironmentArgs, SetupVmEnvironmentResult, SetupVmEnvironmentSuccess, SetupVmEnvironmentToolCall;
export { SetupVmEnvironmentArgs, SetupVmEnvironmentResult, SetupVmEnvironmentSuccess, SetupVmEnvironmentToolCall, __protoMessage342, __protoPackage42 };
var __wakaru_init_setup_vm_environment_tool_pb_initialized = false;
export function init_setup_vm_environment_tool_pb() {
if (__wakaru_init_setup_vm_environment_tool_pb_initialized) return;
__wakaru_init_setup_vm_environment_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage42 = "agent.v1.";
__protoMessage342 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage42;
    }
};
SetupVmEnvironmentArgs = class _SetupVmEnvironmentArgs extends __protoMessage342 {
    constructor(data){
        super();
        this.installCommand = "";
        this.startCommand = "";
        this.dockerfileContents = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetupVmEnvironmentArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetupVmEnvironmentArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetupVmEnvironmentArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetupVmEnvironmentArgs, a, b2);
    }
    static $() {
        return [
            "SetupVmEnvironmentArgs|2 install_command 9|3 start_command 9|4 dockerfile_contents 9"
        ];
    }
};
SetupVmEnvironmentResult = class _SetupVmEnvironmentResult extends __protoMessage342 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetupVmEnvironmentResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetupVmEnvironmentResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetupVmEnvironmentResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetupVmEnvironmentResult, a, b2);
    }
    static $() {
        return [
            "SetupVmEnvironmentResult|1 success #0 result",
            SetupVmEnvironmentSuccess
        ];
    }
};
SetupVmEnvironmentSuccess = class _SetupVmEnvironmentSuccess extends __protoMessage342 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetupVmEnvironmentSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetupVmEnvironmentSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetupVmEnvironmentSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetupVmEnvironmentSuccess, a, b2);
    }
    static $() {
        return [
            "SetupVmEnvironmentSuccess"
        ];
    }
};
SetupVmEnvironmentToolCall = class _SetupVmEnvironmentToolCall extends __protoMessage342 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetupVmEnvironmentToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetupVmEnvironmentToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetupVmEnvironmentToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetupVmEnvironmentToolCall, a, b2);
    }
    static $() {
        return [
            "SetupVmEnvironmentToolCall|1 args #0|2 result #1",
            SetupVmEnvironmentArgs,
            SetupVmEnvironmentResult
        ];
    }
};

}
