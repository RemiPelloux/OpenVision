import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage56, __protoMessage356, ReplaceEnvMode, RepoCheckoutRefOverride, ReplaceEnvConfig, ReplaceEnvArgs, ReplaceEnvSuccess, ReplaceEnvFailure, ReplaceEnvResult, ReplaceEnvToolCall, ReplaceEnvToolCallDelta;
export { ReplaceEnvArgs, ReplaceEnvConfig, ReplaceEnvFailure, ReplaceEnvMode, ReplaceEnvResult, ReplaceEnvSuccess, ReplaceEnvToolCall, ReplaceEnvToolCallDelta, RepoCheckoutRefOverride, __protoMessage356, __protoPackage56 };
var __wakaru_init_replace_env_tool_pb_initialized = false;
export function init_replace_env_tool_pb() {
if (__wakaru_init_replace_env_tool_pb_initialized) return;
__wakaru_init_replace_env_tool_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage56 = "agent.v1.";
__protoMessage356 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage56;
    }
};
ReplaceEnvMode = enumType2(proto3, __protoPackage56, "ReplaceEnvMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CUSTOM"
    ],
    [
        2,
        "CLEAN_SLATE"
    ],
    [
        3,
        "DEFAULT"
    ]
], 1);
RepoCheckoutRefOverride = class _RepoCheckoutRefOverride extends __protoMessage356 {
    constructor(data){
        super();
        this.repoUrl = "";
        this.ref = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RepoCheckoutRefOverride().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RepoCheckoutRefOverride().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RepoCheckoutRefOverride().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RepoCheckoutRefOverride, a, b2);
    }
    static $() {
        return [
            "RepoCheckoutRefOverride|1 repo_url 9|2 ref 9"
        ];
    }
};
ReplaceEnvConfig = class _ReplaceEnvConfig extends __protoMessage356 {
    constructor(data){
        super();
        this.installScript = "";
        this.dockerfileContents = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReplaceEnvConfig().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReplaceEnvConfig().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReplaceEnvConfig().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReplaceEnvConfig, a, b2);
    }
    static $() {
        return [
            "ReplaceEnvConfig|1 install_script 9|2 dockerfile_contents 9"
        ];
    }
};
ReplaceEnvArgs = class _ReplaceEnvArgs extends __protoMessage356 {
    constructor(data){
        super();
        this.mode = ReplaceEnvMode.UNSPECIFIED;
        this.checkoutRefOverrides = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReplaceEnvArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReplaceEnvArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReplaceEnvArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReplaceEnvArgs, a, b2);
    }
    static $() {
        return [
            "ReplaceEnvArgs|1 config #0|2 mode #1|3 checkout_ref_overrides #2*",
            ReplaceEnvConfig,
            ReplaceEnvMode,
            RepoCheckoutRefOverride
        ];
    }
};
ReplaceEnvSuccess = class _ReplaceEnvSuccess extends __protoMessage356 {
    constructor(data){
        super();
        this.setupLogs = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReplaceEnvSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReplaceEnvSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReplaceEnvSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReplaceEnvSuccess, a, b2);
    }
    static $() {
        return [
            "ReplaceEnvSuccess|1 setup_logs 9"
        ];
    }
};
ReplaceEnvFailure = class _ReplaceEnvFailure extends __protoMessage356 {
    constructor(data){
        super();
        this.errorMessage = "";
        this.setupLogs = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReplaceEnvFailure().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReplaceEnvFailure().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReplaceEnvFailure().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReplaceEnvFailure, a, b2);
    }
    static $() {
        return [
            "ReplaceEnvFailure|1 error_message 9|2 setup_logs 9"
        ];
    }
};
ReplaceEnvResult = class _ReplaceEnvResult extends __protoMessage356 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReplaceEnvResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReplaceEnvResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReplaceEnvResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReplaceEnvResult, a, b2);
    }
    static $() {
        return [
            "ReplaceEnvResult|1 success #0 result|2 failure #1 result",
            ReplaceEnvSuccess,
            ReplaceEnvFailure
        ];
    }
};
ReplaceEnvToolCall = class _ReplaceEnvToolCall extends __protoMessage356 {
    constructor(data){
        super();
        this.associatedPodKey = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReplaceEnvToolCall().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReplaceEnvToolCall().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReplaceEnvToolCall().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReplaceEnvToolCall, a, b2);
    }
    static $() {
        return [
            "ReplaceEnvToolCall|1 args #0|2 result #1|3 associated_pod_key 9",
            ReplaceEnvArgs,
            ReplaceEnvResult
        ];
    }
};
ReplaceEnvToolCallDelta = class _ReplaceEnvToolCallDelta extends __protoMessage356 {
    constructor(data){
        super();
        this.associatedPodKey = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReplaceEnvToolCallDelta().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReplaceEnvToolCallDelta().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReplaceEnvToolCallDelta().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReplaceEnvToolCallDelta, a, b2);
    }
    static $() {
        return [
            "ReplaceEnvToolCallDelta|1 associated_pod_key 9"
        ];
    }
};

}
