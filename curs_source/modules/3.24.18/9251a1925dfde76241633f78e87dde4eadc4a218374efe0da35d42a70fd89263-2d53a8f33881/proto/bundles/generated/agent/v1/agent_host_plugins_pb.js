import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage199, __protoMessage3190, AgentHostPluginSource, AgentHostCCPluginSourceType, AgentHostPluginLoadFailureErrorType, AgentHostCCPluginSourceInfo, AgentHostCursorPluginSourceInfo, AgentHostUserLocalPluginSourceInfo, AgentHostExtensionPluginSourceInfo, AgentHostPluginIdentifier, AgentHostPluginDescriptor, AgentHostPluginLoadFailure, AgentHostPluginsSnapshotArgs, AgentHostPluginsSnapshotResult, AgentHostPluginsReloadArgs, AgentHostPluginsReloadResult;
export { AgentHostCCPluginSourceInfo, AgentHostCCPluginSourceType, AgentHostCursorPluginSourceInfo, AgentHostExtensionPluginSourceInfo, AgentHostPluginDescriptor, AgentHostPluginIdentifier, AgentHostPluginLoadFailure, AgentHostPluginLoadFailureErrorType, AgentHostPluginSource, AgentHostPluginsReloadArgs, AgentHostPluginsReloadResult, AgentHostPluginsSnapshotArgs, AgentHostPluginsSnapshotResult, AgentHostUserLocalPluginSourceInfo, __protoMessage3190, __protoPackage199 };
var __wakaru_init_agent_host_plugins_pb_initialized = false;
export function init_agent_host_plugins_pb() {
if (__wakaru_init_agent_host_plugins_pb_initialized) return;
__wakaru_init_agent_host_plugins_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage199 = "agent.v1.";
__protoMessage3190 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage199;
    }
};
AgentHostPluginSource = enumType2(proto3, __protoPackage199, "AgentHostPluginSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLAUDE_PLUGIN"
    ],
    [
        2,
        "CURSOR_FIRST_PARTY"
    ],
    [
        3,
        "CURSOR_THIRD_PARTY"
    ],
    [
        4,
        "USER_LOCAL"
    ],
    [
        5,
        "EXTENSION"
    ]
], 1);
AgentHostCCPluginSourceType = enumType2(proto3, __protoPackage199, "AgentHostCCPluginSourceType", [
    [
        0,
        "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_UNSPECIFIED"
    ],
    [
        1,
        "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_MARKETPLACE"
    ],
    [
        2,
        "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_GITHUB"
    ],
    [
        3,
        "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_URL"
    ],
    [
        4,
        "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_LOCAL"
    ]
]);
AgentHostPluginLoadFailureErrorType = enumType2(proto3, __protoPackage199, "AgentHostPluginLoadFailureErrorType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLONE"
    ],
    [
        2,
        "INSTALL"
    ],
    [
        3,
        "PARSE"
    ],
    [
        4,
        "MANIFEST"
    ],
    [
        5,
        "TIMEOUT"
    ],
    [
        6,
        "UNKNOWN"
    ]
], 1);
AgentHostCCPluginSourceInfo = class _AgentHostCCPluginSourceInfo extends __protoMessage3190 {
    constructor(data){
        super();
        this.name = "";
        this.sourceType = AgentHostCCPluginSourceType.AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_UNSPECIFIED;
        this.raw = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostCCPluginSourceInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostCCPluginSourceInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostCCPluginSourceInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostCCPluginSourceInfo, a, b2);
    }
    static $() {
        return [
            "AgentHostCCPluginSourceInfo|1 name 9|2 source_type #0|3 marketplace 9?|4 github_repo 9?|5 git_url 9?|6 local_path 9?|7 version 9?|8 raw 9",
            AgentHostCCPluginSourceType
        ];
    }
};
AgentHostCursorPluginSourceInfo = class _AgentHostCursorPluginSourceInfo extends __protoMessage3190 {
    constructor(data){
        super();
        this.name = "";
        this.version = "";
        this.configuredVariables = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostCursorPluginSourceInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostCursorPluginSourceInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostCursorPluginSourceInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostCursorPluginSourceInfo, a, b2);
    }
    static $() {
        return [
            "AgentHostCursorPluginSourceInfo|1 name 9|2 version 9|3 plugin_db_id 9?|4 configured_variables 9,9|5 marketplace 9?|6 marketplace_db_id 9?|7 is_team_required 8?"
        ];
    }
};
AgentHostUserLocalPluginSourceInfo = class _AgentHostUserLocalPluginSourceInfo extends __protoMessage3190 {
    constructor(data){
        super();
        this.name = "";
        this.localPath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostUserLocalPluginSourceInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostUserLocalPluginSourceInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostUserLocalPluginSourceInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostUserLocalPluginSourceInfo, a, b2);
    }
    static $() {
        return [
            "AgentHostUserLocalPluginSourceInfo|1 name 9|2 local_path 9"
        ];
    }
};
AgentHostExtensionPluginSourceInfo = class _AgentHostExtensionPluginSourceInfo extends __protoMessage3190 {
    constructor(data){
        super();
        this.name = "";
        this.localPath = "";
        this.extensionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostExtensionPluginSourceInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostExtensionPluginSourceInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostExtensionPluginSourceInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostExtensionPluginSourceInfo, a, b2);
    }
    static $() {
        return [
            "AgentHostExtensionPluginSourceInfo|1 name 9|2 local_path 9|3 extension_id 9"
        ];
    }
};
AgentHostPluginIdentifier = class _AgentHostPluginIdentifier extends __protoMessage3190 {
    constructor(data){
        super();
        this.source = AgentHostPluginSource.UNSPECIFIED;
        this.sourceInfo = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPluginIdentifier().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPluginIdentifier().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPluginIdentifier().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPluginIdentifier, a, b2);
    }
    static $() {
        return [
            "AgentHostPluginIdentifier|1 source #0|2 claude_plugin #1 source_info|3 cursor_marketplace #2 source_info|4 user_local #3 source_info|5 extension #4 source_info",
            AgentHostPluginSource,
            AgentHostCCPluginSourceInfo,
            AgentHostCursorPluginSourceInfo,
            AgentHostUserLocalPluginSourceInfo,
            AgentHostExtensionPluginSourceInfo
        ];
    }
};
AgentHostPluginDescriptor = class _AgentHostPluginDescriptor extends __protoMessage3190 {
    constructor(data){
        super();
        this.installPath = "";
        this.configuredVariables = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPluginDescriptor().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPluginDescriptor().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPluginDescriptor().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPluginDescriptor, a, b2);
    }
    static $() {
        return [
            "AgentHostPluginDescriptor|1 identifier #0|2 install_path 9|3 load_error 9?|4 display_name 9?|5 version 9?|6 description 9?|7 author_name 9?|8 configured_variables 9,9",
            AgentHostPluginIdentifier
        ];
    }
};
AgentHostPluginLoadFailure = class _AgentHostPluginLoadFailure extends __protoMessage3190 {
    constructor(data){
        super();
        this.pluginName = "";
        this.errorMessage = "";
        this.errorType = AgentHostPluginLoadFailureErrorType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPluginLoadFailure().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPluginLoadFailure().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPluginLoadFailure().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPluginLoadFailure, a, b2);
    }
    static $() {
        return [
            "AgentHostPluginLoadFailure|1 plugin_name 9|2 plugin_id 9?|3 plugin_db_id 9?|4 marketplace_name 9?|5 error_message 9|6 error_type #0",
            AgentHostPluginLoadFailureErrorType
        ];
    }
};
AgentHostPluginsSnapshotArgs = class _AgentHostPluginsSnapshotArgs extends __protoMessage3190 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPluginsSnapshotArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPluginsSnapshotArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPluginsSnapshotArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPluginsSnapshotArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostPluginsSnapshotArgs"
        ];
    }
};
AgentHostPluginsSnapshotResult = class _AgentHostPluginsSnapshotResult extends __protoMessage3190 {
    constructor(data){
        super();
        this.plugins = [];
        this.incomplete = false;
        this.failures = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPluginsSnapshotResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPluginsSnapshotResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPluginsSnapshotResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPluginsSnapshotResult, a, b2);
    }
    static $() {
        return [
            "AgentHostPluginsSnapshotResult|1 plugins #0*|2 incomplete 8|3 failures #1*",
            AgentHostPluginDescriptor,
            AgentHostPluginLoadFailure
        ];
    }
};
AgentHostPluginsReloadArgs = class _AgentHostPluginsReloadArgs extends __protoMessage3190 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPluginsReloadArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPluginsReloadArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPluginsReloadArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPluginsReloadArgs, a, b2);
    }
    static $() {
        return [
            "AgentHostPluginsReloadArgs"
        ];
    }
};
AgentHostPluginsReloadResult = class _AgentHostPluginsReloadResult extends __protoMessage3190 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPluginsReloadResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPluginsReloadResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPluginsReloadResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPluginsReloadResult, a, b2);
    }
    static $() {
        return [
            "AgentHostPluginsReloadResult|1 snapshot #0",
            AgentHostPluginsSnapshotResult
        ];
    }
};

}
