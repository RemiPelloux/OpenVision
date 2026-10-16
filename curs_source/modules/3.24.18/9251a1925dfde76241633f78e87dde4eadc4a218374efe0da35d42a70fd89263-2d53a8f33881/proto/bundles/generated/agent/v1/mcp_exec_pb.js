import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Struct, Value } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { McpInstructions, McpToolDefinition, init_mcp_pb } from "./mcp_pb.js";
import { OutputLocation, SmartModeApproval, init_utils_pb } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage21, __protoMessage321, McpRefreshPolicy, McpArgs, McpSymbolicPathArgument, McpResult, McpApproved, McpToolNotFound, McpServerNotFound, McpTextContent, McpImageContent, McpToolResultContentItem, SystemReminder, McpSuccess, McpError, McpRecovery, McpRecovery_Outcome, McpRejected, McpPermissionDenied, McpStateExecArgs, McpStateExecResult, McpStateServer, McpStateSuccess, McpStateError, McpStateRejected, ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ListMcpResourcesExecResult_McpResource, ListMcpResourcesSuccess, ListMcpResourcesError, ListMcpResourcesRejected, ReadMcpResourceExecArgs, ReadMcpResourceExecResult, ReadMcpResourceSuccess, ReadMcpResourceError, ReadMcpResourceRejected, ReadMcpResourceNotFound;
export { ListMcpResourcesError, ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ListMcpResourcesExecResult_McpResource, ListMcpResourcesRejected, ListMcpResourcesSuccess, McpApproved, McpArgs, McpError, McpImageContent, McpPermissionDenied, McpRecovery, McpRecovery_Outcome, McpRefreshPolicy, McpRejected, McpResult, McpServerNotFound, McpStateError, McpStateExecArgs, McpStateExecResult, McpStateRejected, McpStateServer, McpStateSuccess, McpSuccess, McpSymbolicPathArgument, McpTextContent, McpToolNotFound, McpToolResultContentItem, ReadMcpResourceError, ReadMcpResourceExecArgs, ReadMcpResourceExecResult, ReadMcpResourceNotFound, ReadMcpResourceRejected, ReadMcpResourceSuccess, SystemReminder, __protoMessage321, __protoPackage21 };
var __wakaru_init_mcp_exec_pb_initialized = false;
export function init_mcp_exec_pb() {
if (__wakaru_init_mcp_exec_pb_initialized) return;
__wakaru_init_mcp_exec_pb_initialized = true;
"use strict";
init_esm2();
init_utils_pb();
init_mcp_pb();
init_compact();
__protoPackage21 = "agent.v1.";
__protoMessage321 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage21;
    }
};
McpRefreshPolicy = enumType2(proto3, __protoPackage21, "McpRefreshPolicy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "FORCE_IF_MISSING"
    ],
    [
        2,
        "FORCE"
    ]
], 1);
McpArgs = class _McpArgs extends __protoMessage321 {
    constructor(data){
        super();
        this.name = "";
        this.args = {};
        this.toolCallId = "";
        this.providerIdentifier = "";
        this.toolName = "";
        this.smartModeApprovalOnly = false;
        this.skipApproval = false;
        this.serverIdentifier = "";
        this.symbolicPathArguments = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpArgs, a, b2);
    }
    static $() {
        return [
            "McpArgs|1 name 9|2 args 9,#0|3 tool_call_id 9|4 provider_identifier 9|5 tool_name 9|6 smart_mode_approval #1?|7 smart_mode_approval_only 8|8 skip_approval 8|9 server_identifier 9|10 symbolic_path_arguments #2*",
            Value,
            SmartModeApproval,
            McpSymbolicPathArgument
        ];
    }
};
McpSymbolicPathArgument = class _McpSymbolicPathArgument extends __protoMessage321 {
    constructor(data){
        super();
        this.path = "";
        this.sha256 = "";
        this.sizeBytes = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpSymbolicPathArgument().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpSymbolicPathArgument().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpSymbolicPathArgument().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpSymbolicPathArgument, a, b2);
    }
    static $() {
        return [
            "McpSymbolicPathArgument|1 path 9|2 sha256 9|3 size_bytes 3"
        ];
    }
};
McpResult = class _McpResult extends __protoMessage321 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpResult, a, b2);
    }
    static $() {
        return [
            "McpResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result|5 tool_not_found #4 result|6 server_not_found #5 result|7 approved #6 result",
            McpSuccess,
            McpError,
            McpRejected,
            McpPermissionDenied,
            McpToolNotFound,
            McpServerNotFound,
            McpApproved
        ];
    }
};
McpApproved = class _McpApproved extends __protoMessage321 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpApproved().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpApproved().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpApproved().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpApproved, a, b2);
    }
    static $() {
        return [
            "McpApproved"
        ];
    }
};
McpToolNotFound = class _McpToolNotFound extends __protoMessage321 {
    constructor(data){
        super();
        this.name = "";
        this.availableTools = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolNotFound().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolNotFound().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolNotFound().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolNotFound, a, b2);
    }
    static $() {
        return [
            "McpToolNotFound|1 name 9|2 available_tools 9*|3 recovery #0?",
            McpRecovery
        ];
    }
};
McpServerNotFound = class _McpServerNotFound extends __protoMessage321 {
    constructor(data){
        super();
        this.name = "";
        this.availableServers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpServerNotFound().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpServerNotFound().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpServerNotFound().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpServerNotFound, a, b2);
    }
    static $() {
        return [
            "McpServerNotFound|1 name 9|2 available_servers 9*"
        ];
    }
};
McpTextContent = class _McpTextContent extends __protoMessage321 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpTextContent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpTextContent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpTextContent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpTextContent, a, b2);
    }
    static $() {
        return [
            "McpTextContent|1 text 9|2 output_location #0?",
            OutputLocation
        ];
    }
};
McpImageContent = class _McpImageContent extends __protoMessage321 {
    constructor(data){
        super();
        this.data = new Uint8Array(0);
        this.mimeType = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpImageContent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpImageContent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpImageContent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpImageContent, a, b2);
    }
    static $() {
        return [
            "McpImageContent|1 data 12|2 mime_type 9"
        ];
    }
};
McpToolResultContentItem = class _McpToolResultContentItem extends __protoMessage321 {
    constructor(data){
        super();
        this.content = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolResultContentItem().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolResultContentItem().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolResultContentItem().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolResultContentItem, a, b2);
    }
    static $() {
        return [
            "McpToolResultContentItem|1 text #0 content|2 image #1 content",
            McpTextContent,
            McpImageContent
        ];
    }
};
SystemReminder = class _SystemReminder extends __protoMessage321 {
    constructor(data){
        super();
        this.body = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SystemReminder().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SystemReminder().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SystemReminder().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SystemReminder, a, b2);
    }
    static $() {
        return [
            "SystemReminder|1 body 9"
        ];
    }
};
McpSuccess = class _McpSuccess extends __protoMessage321 {
    constructor(data){
        super();
        this.content = [];
        this.isError = false;
        this.systemReminders = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpSuccess, a, b2);
    }
    static $() {
        return [
            "McpSuccess|1 content #0*|2 is_error 8|3 structured_content #1|4 system_reminders #2*",
            McpToolResultContentItem,
            Struct,
            SystemReminder
        ];
    }
};
McpError = class _McpError extends __protoMessage321 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpError, a, b2);
    }
    static $() {
        return [
            "McpError|1 error 9|2 needs_auth 8?|3 recovery #0?|4 http_status 5?",
            McpRecovery
        ];
    }
};
McpRecovery = class _McpRecovery extends __protoMessage321 {
    constructor(data){
        super();
        this.outcome = McpRecovery_Outcome.UNSPECIFIED;
        this.availableTools = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpRecovery().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpRecovery().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpRecovery().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpRecovery, a, b2);
    }
    static $() {
        return [
            "McpRecovery|1 outcome #0|2 fresh_input_schema_json 9?|3 available_tools 9*",
            McpRecovery_Outcome
        ];
    }
};
McpRecovery_Outcome = enumType2(proto3, __protoPackage21, "McpRecovery.Outcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CHANGED"
    ],
    [
        2,
        "REMOVED"
    ],
    [
        3,
        "UNCHANGED"
    ],
    [
        4,
        "REFRESH_FAILED"
    ]
], 1);
McpRejected = class _McpRejected extends __protoMessage321 {
    constructor(data){
        super();
        this.reason = "";
        this.isReadonly = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpRejected, a, b2);
    }
    static $() {
        return [
            "McpRejected|1 reason 9|2 is_readonly 8"
        ];
    }
};
McpPermissionDenied = class _McpPermissionDenied extends __protoMessage321 {
    constructor(data){
        super();
        this.error = "";
        this.isReadonly = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpPermissionDenied().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpPermissionDenied().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpPermissionDenied().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpPermissionDenied, a, b2);
    }
    static $() {
        return [
            "McpPermissionDenied|1 error 9|2 is_readonly 8"
        ];
    }
};
McpStateExecArgs = class _McpStateExecArgs extends __protoMessage321 {
    constructor(data){
        super();
        this.serverIdentifiers = [];
        this.kickOnly = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpStateExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpStateExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpStateExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpStateExecArgs, a, b2);
    }
    static $() {
        return [
            "McpStateExecArgs|1 server_identifiers 9*|2 kick_only 8|3 refresh_policy #0?",
            McpRefreshPolicy
        ];
    }
};
McpStateExecResult = class _McpStateExecResult extends __protoMessage321 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpStateExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpStateExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpStateExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpStateExecResult, a, b2);
    }
    static $() {
        return [
            "McpStateExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            McpStateSuccess,
            McpStateError,
            McpStateRejected
        ];
    }
};
McpStateServer = class _McpStateServer extends __protoMessage321 {
    constructor(data){
        super();
        this.serverName = "";
        this.serverIdentifier = "";
        this.tools = [];
        this.instructions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpStateServer().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpStateServer().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpStateServer().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpStateServer, a, b2);
    }
    static $() {
        return [
            "McpStateServer|1 server_name 9|2 server_identifier 9|3 plugin 9?|4 marketplace 9?|5 tools #0*|6 instructions #1*|7 status 9?|8 error_message 9?",
            McpToolDefinition,
            McpInstructions
        ];
    }
};
McpStateSuccess = class _McpStateSuccess extends __protoMessage321 {
    constructor(data){
        super();
        this.servers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpStateSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpStateSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpStateSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpStateSuccess, a, b2);
    }
    static $() {
        return [
            "McpStateSuccess|1 servers #0*",
            McpStateServer
        ];
    }
};
McpStateError = class _McpStateError extends __protoMessage321 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpStateError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpStateError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpStateError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpStateError, a, b2);
    }
    static $() {
        return [
            "McpStateError|1 error 9"
        ];
    }
};
McpStateRejected = class _McpStateRejected extends __protoMessage321 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpStateRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpStateRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpStateRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpStateRejected, a, b2);
    }
    static $() {
        return [
            "McpStateRejected|1 reason 9"
        ];
    }
};
ListMcpResourcesExecArgs = class _ListMcpResourcesExecArgs extends __protoMessage321 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpResourcesExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpResourcesExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpResourcesExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpResourcesExecArgs, a, b2);
    }
    static $() {
        return [
            "ListMcpResourcesExecArgs|1 server 9?"
        ];
    }
};
ListMcpResourcesExecResult = class _ListMcpResourcesExecResult extends __protoMessage321 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpResourcesExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpResourcesExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpResourcesExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpResourcesExecResult, a, b2);
    }
    static $() {
        return [
            "ListMcpResourcesExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            ListMcpResourcesSuccess,
            ListMcpResourcesError,
            ListMcpResourcesRejected
        ];
    }
};
ListMcpResourcesExecResult_McpResource = class _ListMcpResourcesExecResult_McpResource extends __protoMessage321 {
    constructor(data){
        super();
        this.uri = "";
        this.server = "";
        this.annotations = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpResourcesExecResult_McpResource().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpResourcesExecResult_McpResource().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpResourcesExecResult_McpResource().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpResourcesExecResult_McpResource, a, b2);
    }
    static $() {
        return [
            "ListMcpResourcesExecResult.McpResource|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 server 9|6 annotations 9,9"
        ];
    }
};
ListMcpResourcesSuccess = class _ListMcpResourcesSuccess extends __protoMessage321 {
    constructor(data){
        super();
        this.resources = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpResourcesSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpResourcesSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpResourcesSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpResourcesSuccess, a, b2);
    }
    static $() {
        return [
            "ListMcpResourcesSuccess|1 resources #0*",
            ListMcpResourcesExecResult_McpResource
        ];
    }
};
ListMcpResourcesError = class _ListMcpResourcesError extends __protoMessage321 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpResourcesError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpResourcesError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpResourcesError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpResourcesError, a, b2);
    }
    static $() {
        return [
            "ListMcpResourcesError|1 error 9"
        ];
    }
};
ListMcpResourcesRejected = class _ListMcpResourcesRejected extends __protoMessage321 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpResourcesRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpResourcesRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpResourcesRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpResourcesRejected, a, b2);
    }
    static $() {
        return [
            "ListMcpResourcesRejected|1 reason 9"
        ];
    }
};
ReadMcpResourceExecArgs = class _ReadMcpResourceExecArgs extends __protoMessage321 {
    constructor(data){
        super();
        this.server = "";
        this.uri = "";
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadMcpResourceExecArgs().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadMcpResourceExecArgs().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadMcpResourceExecArgs().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadMcpResourceExecArgs, a, b2);
    }
    static $() {
        return [
            "ReadMcpResourceExecArgs|1 server 9|2 uri 9|3 download_path 9?|4 tool_call_id 9|5 smart_mode_approval #0?",
            SmartModeApproval
        ];
    }
};
ReadMcpResourceExecResult = class _ReadMcpResourceExecResult extends __protoMessage321 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadMcpResourceExecResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadMcpResourceExecResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadMcpResourceExecResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadMcpResourceExecResult, a, b2);
    }
    static $() {
        return [
            "ReadMcpResourceExecResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 not_found #3 result",
            ReadMcpResourceSuccess,
            ReadMcpResourceError,
            ReadMcpResourceRejected,
            ReadMcpResourceNotFound
        ];
    }
};
ReadMcpResourceSuccess = class _ReadMcpResourceSuccess extends __protoMessage321 {
    constructor(data){
        super();
        this.uri = "";
        this.content = {
            case: void 0
        };
        this.annotations = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadMcpResourceSuccess().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadMcpResourceSuccess().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadMcpResourceSuccess().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadMcpResourceSuccess, a, b2);
    }
    static $() {
        return [
            "ReadMcpResourceSuccess|1 uri 9|2 name 9?|3 description 9?|4 mime_type 9?|5 text 9 content|6 blob 12 content|7 annotations 9,9|8 download_path 9?|9 output_location #0?|10 meta_json 9?",
            OutputLocation
        ];
    }
};
ReadMcpResourceError = class _ReadMcpResourceError extends __protoMessage321 {
    constructor(data){
        super();
        this.uri = "";
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadMcpResourceError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadMcpResourceError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadMcpResourceError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadMcpResourceError, a, b2);
    }
    static $() {
        return [
            "ReadMcpResourceError|1 uri 9|2 error 9"
        ];
    }
};
ReadMcpResourceRejected = class _ReadMcpResourceRejected extends __protoMessage321 {
    constructor(data){
        super();
        this.uri = "";
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadMcpResourceRejected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadMcpResourceRejected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadMcpResourceRejected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadMcpResourceRejected, a, b2);
    }
    static $() {
        return [
            "ReadMcpResourceRejected|1 uri 9|2 reason 9"
        ];
    }
};
ReadMcpResourceNotFound = class _ReadMcpResourceNotFound extends __protoMessage321 {
    constructor(data){
        super();
        this.uri = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadMcpResourceNotFound().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadMcpResourceNotFound().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadMcpResourceNotFound().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadMcpResourceNotFound, a, b2);
    }
    static $() {
        return [
            "ReadMcpResourceNotFound|1 uri 9"
        ];
    }
};

}
