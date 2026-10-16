import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Struct } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { McpResult, init_mcp_exec_pb } from "../../agent/v1/mcp_exec_pb.js";
import { McpToolDefinition, init_mcp_pb } from "../../agent/v1/mcp_pb.js";
import { McpServedBy, init_dashboard_pb } from "./dashboard_pb.js";
import { McpOAuthStoredClientInfo, init_mcp_pb2 } from "./mcp_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage202, __protoMessage3193, McpToolCaller, McpPlacement, McpPlacementSource, McpPlacementProbe, McpPlacementRequestSource, McpRowKind, ListMcpToolsRequest, ListMcpToolsResponse, ListMcpToolsResponse_Server, CallMcpToolRequest, McpToolCallProgress, McpElicitationRequest2, NotReachableFromBackend, NotReachableFromBackend_Reason, McpToolNeedsAuth, McpToolNotRoutable, McpToolNotDialed, CallMcpToolOutcome, McpElicitationClosed, CallMcpToolResponse, McpElicitationResponse2, McpElicitationResponse_Action2, RespondToMcpElicitationRequest, RespondToMcpElicitationResponse, RespondToMcpElicitationResponse_Status, MigrateMcpOAuthGrantRequest, McpToolServiceNotImplemented, MigrateMcpOAuthGrantResponse, MigrateMcpOAuthGrantResponse_Migrated, MigrateMcpOAuthGrantResponse_ServerCopyKept, MigrateMcpOAuthGrantResponse_InvalidGrant, MigrateMcpOAuthGrantResponse_ReuseDetected, MigrateMcpOAuthGrantResponse_ProviderError, MigrateMcpOAuthGrantResponse_RejectedGrokRow, MigrateMcpOAuthGrantResponse_PersistFailed, MigrateMcpOAuthGrantResponse_RejectedClientPlaced, SetMcpServerPlacementRequest, SetMcpServerPlacementResponse, SetMcpServerPlacementResponse_Updated, SetMcpServerPlacementResponse_PreconditionFailed, SetMcpServerPlacementResponse_RejectedDeclaredPlacement, SetMcpServerPlacementResponse_RejectedGrokRow;
export { CallMcpToolOutcome, CallMcpToolRequest, CallMcpToolResponse, ListMcpToolsRequest, ListMcpToolsResponse, ListMcpToolsResponse_Server, McpElicitationClosed, McpElicitationRequest2, McpElicitationResponse2, McpElicitationResponse_Action2, McpPlacement, McpPlacementProbe, McpPlacementRequestSource, McpPlacementSource, McpRowKind, McpToolCallProgress, McpToolCaller, McpToolNeedsAuth, McpToolNotDialed, McpToolNotRoutable, McpToolServiceNotImplemented, MigrateMcpOAuthGrantRequest, MigrateMcpOAuthGrantResponse, MigrateMcpOAuthGrantResponse_InvalidGrant, MigrateMcpOAuthGrantResponse_Migrated, MigrateMcpOAuthGrantResponse_PersistFailed, MigrateMcpOAuthGrantResponse_ProviderError, MigrateMcpOAuthGrantResponse_RejectedClientPlaced, MigrateMcpOAuthGrantResponse_RejectedGrokRow, MigrateMcpOAuthGrantResponse_ReuseDetected, MigrateMcpOAuthGrantResponse_ServerCopyKept, NotReachableFromBackend, NotReachableFromBackend_Reason, RespondToMcpElicitationRequest, RespondToMcpElicitationResponse, RespondToMcpElicitationResponse_Status, SetMcpServerPlacementRequest, SetMcpServerPlacementResponse, SetMcpServerPlacementResponse_PreconditionFailed, SetMcpServerPlacementResponse_RejectedDeclaredPlacement, SetMcpServerPlacementResponse_RejectedGrokRow, SetMcpServerPlacementResponse_Updated, __protoMessage3193, __protoPackage202 };
var __wakaru_init_mcp_tool_pb2_initialized = false;
export function init_mcp_tool_pb2() {
if (__wakaru_init_mcp_tool_pb2_initialized) return;
__wakaru_init_mcp_tool_pb2_initialized = true;
"use strict";
init_esm2();
init_mcp_pb();
init_dashboard_pb();
init_mcp_exec_pb();
init_mcp_pb2();
init_compact();
__protoPackage202 = "aiserver.v1.";
__protoMessage3193 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage202;
    }
};
McpToolCaller = enumType2(proto3, __protoPackage202, "McpToolCaller", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IDE"
    ],
    [
        2,
        "GLASS"
    ],
    [
        3,
        "AGENT_HOST_LOCAL_LOOP"
    ]
], 1);
McpPlacement = enumType2(proto3, __protoPackage202, "McpPlacement", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SERVER"
    ],
    [
        2,
        "CLIENT"
    ],
    [
        3,
        "UNDECIDED"
    ]
], 1);
McpPlacementSource = enumType2(proto3, __protoPackage202, "McpPlacementSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "EXPLICIT"
    ],
    [
        2,
        "TEAM_DEFAULT"
    ],
    [
        3,
        "PROBE"
    ],
    [
        4,
        "MANUAL"
    ],
    [
        5,
        "LOGIN"
    ],
    [
        6,
        "CLIENT_PROBE"
    ],
    [
        7,
        "NONE"
    ]
], 1);
McpPlacementProbe = enumType2(proto3, __protoPackage202, "McpPlacementProbe", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "SERVER_CAPABLE"
    ],
    [
        3,
        "UNREACHABLE"
    ],
    [
        4,
        "INCONCLUSIVE"
    ]
], 1);
McpPlacementRequestSource = enumType2(proto3, __protoPackage202, "McpPlacementRequestSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MANUAL"
    ],
    [
        2,
        "CLIENT_PROBE"
    ]
], 1);
McpRowKind = enumType2(proto3, __protoPackage202, "McpRowKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PLUGIN"
    ],
    [
        2,
        "CUSTOM"
    ],
    [
        3,
        "TEAM"
    ]
], 1);
ListMcpToolsRequest = class _ListMcpToolsRequest extends __protoMessage3193 {
    constructor(data){
        super();
        this.serverIdentifiers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpToolsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpToolsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpToolsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpToolsRequest, a, b2);
    }
    static $() {
        return [
            "ListMcpToolsRequest|1 server_identifiers 9*|2 mcp_config_json 9?"
        ];
    }
};
ListMcpToolsResponse = class _ListMcpToolsResponse extends __protoMessage3193 {
    constructor(data){
        super();
        this.servers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpToolsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpToolsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpToolsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpToolsResponse, a, b2);
    }
    static $() {
        return [
            "ListMcpToolsResponse|1 servers #0*",
            ListMcpToolsResponse_Server
        ];
    }
};
ListMcpToolsResponse_Server = class _ListMcpToolsResponse_Server extends __protoMessage3193 {
    constructor(data){
        super();
        this.serverIdentifier = "";
        this.status = "";
        this.tools = [];
        this.accountLabel = "";
        this.rowServerIdentifier = "";
        this.servedBy = McpServedBy.UNSPECIFIED;
        this.placement = McpPlacement.UNSPECIFIED;
        this.url = "";
        this.placementSource = McpPlacementSource.UNSPECIFIED;
        this.placementProbe = McpPlacementProbe.UNSPECIFIED;
        this.placementProbeReason = "";
        this.overriddenDeclaredPlacement = false;
        this.rowKind = McpRowKind.UNSPECIFIED;
        this.displayName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListMcpToolsResponse_Server().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListMcpToolsResponse_Server().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListMcpToolsResponse_Server().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListMcpToolsResponse_Server, a, b2);
    }
    static $() {
        return [
            "ListMcpToolsResponse.Server|1 server_identifier 9|2 status 9|3 tools #0*|4 account_label 9|5 row_server_identifier 9|6 served_by #1|7 placement #2|8 url 9|9 placement_source #3|10 placement_probe #4|11 placement_probe_reason 9|12 overridden_declared_placement 8|13 row_kind #5|14 viewer_can_decide 8?|15 instructions 9?|16 plugin 9?|17 marketplace 9?|18 plugin_db_id 9?|19 marketplace_id 9?|20 display_name 9",
            McpToolDefinition,
            McpServedBy,
            McpPlacement,
            McpPlacementSource,
            McpPlacementProbe,
            McpRowKind
        ];
    }
};
CallMcpToolRequest = class _CallMcpToolRequest extends __protoMessage3193 {
    constructor(data){
        super();
        this.serverIdentifier = "";
        this.toolName = "";
        this.accountKey = "";
        this.toolCallId = "";
        this.conversationId = "";
        this.caller = McpToolCaller.UNSPECIFIED;
        this.deviceTag = "";
        this.clientApproved = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CallMcpToolRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CallMcpToolRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CallMcpToolRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CallMcpToolRequest, a, b2);
    }
    static $() {
        return [
            "CallMcpToolRequest|1 server_identifier 9|2 tool_name 9|3 args #0|4 account_key 9|5 tool_call_id 9|6 conversation_id 9|7 caller #1|8 device_tag 9|9 client_approved 8|10 mcp_config_json 9?",
            Struct,
            McpToolCaller
        ];
    }
};
McpToolCallProgress = class _McpToolCallProgress extends __protoMessage3193 {
    constructor(data){
        super();
        this.progress = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolCallProgress().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolCallProgress().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolCallProgress().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolCallProgress, a, b2);
    }
    static $() {
        return [
            "McpToolCallProgress|1 progress 1|2 total 1?|3 message 9?"
        ];
    }
};
McpElicitationRequest2 = class _McpElicitationRequest extends __protoMessage3193 {
    constructor(data){
        super();
        this.requestId = "";
        this.message = "";
        this.requestedSchemaJson = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpElicitationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpElicitationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpElicitationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpElicitationRequest, a, b2);
    }
    static $() {
        return [
            "McpElicitationRequest|1 request_id 9|2 message 9|3 requested_schema_json 9"
        ];
    }
};
NotReachableFromBackend = class _NotReachableFromBackend extends __protoMessage3193 {
    constructor(data){
        super();
        this.reason = NotReachableFromBackend_Reason.UNSPECIFIED;
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _NotReachableFromBackend().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _NotReachableFromBackend().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _NotReachableFromBackend().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_NotReachableFromBackend, a, b2);
    }
    static $() {
        return [
            "NotReachableFromBackend|1 reason #0|2 detail 9",
            NotReachableFromBackend_Reason
        ];
    }
};
NotReachableFromBackend_Reason = enumType2(proto3, __protoPackage202, "NotReachableFromBackend.Reason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DNS"
    ],
    [
        2,
        "CONNECTION_REFUSED"
    ],
    [
        3,
        "TLS"
    ],
    [
        4,
        "TIMEOUT"
    ],
    [
        5,
        "HTTP_5XX"
    ],
    [
        6,
        "OTHER"
    ]
], 1);
McpToolNeedsAuth = class _McpToolNeedsAuth extends __protoMessage3193 {
    constructor(data){
        super();
        this.servedBy = McpServedBy.UNSPECIFIED;
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolNeedsAuth().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolNeedsAuth().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolNeedsAuth().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolNeedsAuth, a, b2);
    }
    static $() {
        return [
            "McpToolNeedsAuth|1 served_by #0|2 detail 9",
            McpServedBy
        ];
    }
};
McpToolNotRoutable = class _McpToolNotRoutable extends __protoMessage3193 {
    constructor(data){
        super();
        this.servedBy = McpServedBy.UNSPECIFIED;
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolNotRoutable().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolNotRoutable().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolNotRoutable().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolNotRoutable, a, b2);
    }
    static $() {
        return [
            "McpToolNotRoutable|1 served_by #0|2 detail 9",
            McpServedBy
        ];
    }
};
McpToolNotDialed = class _McpToolNotDialed extends __protoMessage3193 {
    constructor(data){
        super();
        this.placement = McpPlacement.UNSPECIFIED;
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolNotDialed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolNotDialed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolNotDialed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolNotDialed, a, b2);
    }
    static $() {
        return [
            "McpToolNotDialed|1 placement #0|2 detail 9",
            McpPlacement
        ];
    }
};
CallMcpToolOutcome = class _CallMcpToolOutcome extends __protoMessage3193 {
    constructor(data){
        super();
        this.outcome = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CallMcpToolOutcome().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CallMcpToolOutcome().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CallMcpToolOutcome().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CallMcpToolOutcome, a, b2);
    }
    static $() {
        return [
            "CallMcpToolOutcome|1 result #0 outcome|2 not_reachable #1 outcome|3 needs_auth #2 outcome|4 not_routable #3 outcome|5 not_dialed #4 outcome",
            McpResult,
            NotReachableFromBackend,
            McpToolNeedsAuth,
            McpToolNotRoutable,
            McpToolNotDialed
        ];
    }
};
McpElicitationClosed = class _McpElicitationClosed extends __protoMessage3193 {
    constructor(data){
        super();
        this.requestId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpElicitationClosed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpElicitationClosed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpElicitationClosed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpElicitationClosed, a, b2);
    }
    static $() {
        return [
            "McpElicitationClosed|1 request_id 9"
        ];
    }
};
CallMcpToolResponse = class _CallMcpToolResponse extends __protoMessage3193 {
    constructor(data){
        super();
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CallMcpToolResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CallMcpToolResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CallMcpToolResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CallMcpToolResponse, a, b2);
    }
    static $() {
        return [
            "CallMcpToolResponse|1 progress #0 event|2 elicitation_request #1 event|3 outcome #2 event|4 elicitation_closed #3 event",
            McpToolCallProgress,
            McpElicitationRequest2,
            CallMcpToolOutcome,
            McpElicitationClosed
        ];
    }
};
McpElicitationResponse2 = class _McpElicitationResponse extends __protoMessage3193 {
    constructor(data){
        super();
        this.action = McpElicitationResponse_Action2.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpElicitationResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpElicitationResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpElicitationResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpElicitationResponse, a, b2);
    }
    static $() {
        return [
            "McpElicitationResponse|1 action #0|2 content #1",
            McpElicitationResponse_Action2,
            Struct
        ];
    }
};
McpElicitationResponse_Action2 = enumType2(proto3, __protoPackage202, "McpElicitationResponse.Action", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPT"
    ],
    [
        2,
        "DECLINE"
    ],
    [
        3,
        "CANCEL"
    ]
], 1);
RespondToMcpElicitationRequest = class _RespondToMcpElicitationRequest extends __protoMessage3193 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.requestId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RespondToMcpElicitationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RespondToMcpElicitationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RespondToMcpElicitationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RespondToMcpElicitationRequest, a, b2);
    }
    static $() {
        return [
            "RespondToMcpElicitationRequest|1 tool_call_id 9|2 request_id 9|3 response #0",
            McpElicitationResponse2
        ];
    }
};
RespondToMcpElicitationResponse = class _RespondToMcpElicitationResponse extends __protoMessage3193 {
    constructor(data){
        super();
        this.status = RespondToMcpElicitationResponse_Status.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RespondToMcpElicitationResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RespondToMcpElicitationResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RespondToMcpElicitationResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RespondToMcpElicitationResponse, a, b2);
    }
    static $() {
        return [
            "RespondToMcpElicitationResponse|1 status #0",
            RespondToMcpElicitationResponse_Status
        ];
    }
};
RespondToMcpElicitationResponse_Status = enumType2(proto3, __protoPackage202, "RespondToMcpElicitationResponse.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ACCEPTED"
    ],
    [
        2,
        "NOT_FOUND"
    ],
    [
        3,
        "ALREADY_RESOLVED"
    ],
    [
        4,
        "NOT_IMPLEMENTED"
    ]
], 1);
MigrateMcpOAuthGrantRequest = class _MigrateMcpOAuthGrantRequest extends __protoMessage3193 {
    constructor(data){
        super();
        this.serverUrl = "";
        this.refreshToken = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantRequest, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantRequest|1 server_url 9|2 refresh_token 9|3 client_information #0",
            McpOAuthStoredClientInfo
        ];
    }
};
McpToolServiceNotImplemented = class _McpToolServiceNotImplemented extends __protoMessage3193 {
    constructor(data){
        super();
        this.method = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _McpToolServiceNotImplemented().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _McpToolServiceNotImplemented().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _McpToolServiceNotImplemented().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_McpToolServiceNotImplemented, a, b2);
    }
    static $() {
        return [
            "McpToolServiceNotImplemented|1 method 9"
        ];
    }
};
MigrateMcpOAuthGrantResponse = class _MigrateMcpOAuthGrantResponse extends __protoMessage3193 {
    constructor(data){
        super();
        this.outcome = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse|1 migrated #0 outcome|2 server_copy_kept #1 outcome|3 invalid_grant #2 outcome|4 reuse_detected #3 outcome|5 provider_error #4 outcome|6 rejected_grok_row #5 outcome|7 not_implemented #6 outcome|8 persist_failed #7 outcome|9 rejected_client_placed #8 outcome",
            MigrateMcpOAuthGrantResponse_Migrated,
            MigrateMcpOAuthGrantResponse_ServerCopyKept,
            MigrateMcpOAuthGrantResponse_InvalidGrant,
            MigrateMcpOAuthGrantResponse_ReuseDetected,
            MigrateMcpOAuthGrantResponse_ProviderError,
            MigrateMcpOAuthGrantResponse_RejectedGrokRow,
            McpToolServiceNotImplemented,
            MigrateMcpOAuthGrantResponse_PersistFailed,
            MigrateMcpOAuthGrantResponse_RejectedClientPlaced
        ];
    }
};
MigrateMcpOAuthGrantResponse_Migrated = class _MigrateMcpOAuthGrantResponse_Migrated extends __protoMessage3193 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_Migrated().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_Migrated().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_Migrated().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_Migrated, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.Migrated"
        ];
    }
};
MigrateMcpOAuthGrantResponse_ServerCopyKept = class _MigrateMcpOAuthGrantResponse_ServerCopyKept extends __protoMessage3193 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_ServerCopyKept().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_ServerCopyKept().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_ServerCopyKept().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_ServerCopyKept, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.ServerCopyKept"
        ];
    }
};
MigrateMcpOAuthGrantResponse_InvalidGrant = class _MigrateMcpOAuthGrantResponse_InvalidGrant extends __protoMessage3193 {
    constructor(data){
        super();
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_InvalidGrant().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_InvalidGrant().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_InvalidGrant().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_InvalidGrant, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.InvalidGrant|1 detail 9"
        ];
    }
};
MigrateMcpOAuthGrantResponse_ReuseDetected = class _MigrateMcpOAuthGrantResponse_ReuseDetected extends __protoMessage3193 {
    constructor(data){
        super();
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_ReuseDetected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_ReuseDetected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_ReuseDetected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_ReuseDetected, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.ReuseDetected|1 detail 9"
        ];
    }
};
MigrateMcpOAuthGrantResponse_ProviderError = class _MigrateMcpOAuthGrantResponse_ProviderError extends __protoMessage3193 {
    constructor(data){
        super();
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_ProviderError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_ProviderError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_ProviderError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_ProviderError, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.ProviderError|1 detail 9"
        ];
    }
};
MigrateMcpOAuthGrantResponse_RejectedGrokRow = class _MigrateMcpOAuthGrantResponse_RejectedGrokRow extends __protoMessage3193 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_RejectedGrokRow().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_RejectedGrokRow().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_RejectedGrokRow().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_RejectedGrokRow, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.RejectedGrokRow"
        ];
    }
};
MigrateMcpOAuthGrantResponse_PersistFailed = class _MigrateMcpOAuthGrantResponse_PersistFailed extends __protoMessage3193 {
    constructor(data){
        super();
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_PersistFailed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_PersistFailed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_PersistFailed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_PersistFailed, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.PersistFailed|1 detail 9"
        ];
    }
};
MigrateMcpOAuthGrantResponse_RejectedClientPlaced = class _MigrateMcpOAuthGrantResponse_RejectedClientPlaced extends __protoMessage3193 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MigrateMcpOAuthGrantResponse_RejectedClientPlaced().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MigrateMcpOAuthGrantResponse_RejectedClientPlaced().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MigrateMcpOAuthGrantResponse_RejectedClientPlaced().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MigrateMcpOAuthGrantResponse_RejectedClientPlaced, a, b2);
    }
    static $() {
        return [
            "MigrateMcpOAuthGrantResponse.RejectedClientPlaced"
        ];
    }
};
SetMcpServerPlacementRequest = class _SetMcpServerPlacementRequest extends __protoMessage3193 {
    constructor(data){
        super();
        this.serverIdentifier = "";
        this.placement = McpPlacement.UNSPECIFIED;
        this.source = McpPlacementRequestSource.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetMcpServerPlacementRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetMcpServerPlacementRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetMcpServerPlacementRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetMcpServerPlacementRequest, a, b2);
    }
    static $() {
        return [
            "SetMcpServerPlacementRequest|1 server_identifier 9|2 placement #0|3 source #1",
            McpPlacement,
            McpPlacementRequestSource
        ];
    }
};
SetMcpServerPlacementResponse = class _SetMcpServerPlacementResponse extends __protoMessage3193 {
    constructor(data){
        super();
        this.outcome = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetMcpServerPlacementResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetMcpServerPlacementResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetMcpServerPlacementResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetMcpServerPlacementResponse, a, b2);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse|1 updated #0 outcome|2 precondition_failed #1 outcome|3 rejected_declared_placement #2 outcome|4 rejected_grok_row #3 outcome|5 not_implemented #4 outcome",
            SetMcpServerPlacementResponse_Updated,
            SetMcpServerPlacementResponse_PreconditionFailed,
            SetMcpServerPlacementResponse_RejectedDeclaredPlacement,
            SetMcpServerPlacementResponse_RejectedGrokRow,
            McpToolServiceNotImplemented
        ];
    }
};
SetMcpServerPlacementResponse_Updated = class _SetMcpServerPlacementResponse_Updated extends __protoMessage3193 {
    constructor(data){
        super();
        this.placement = McpPlacement.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetMcpServerPlacementResponse_Updated().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetMcpServerPlacementResponse_Updated().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetMcpServerPlacementResponse_Updated().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetMcpServerPlacementResponse_Updated, a, b2);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.Updated|1 placement #0",
            McpPlacement
        ];
    }
};
SetMcpServerPlacementResponse_PreconditionFailed = class _SetMcpServerPlacementResponse_PreconditionFailed extends __protoMessage3193 {
    constructor(data){
        super();
        this.detail = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetMcpServerPlacementResponse_PreconditionFailed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetMcpServerPlacementResponse_PreconditionFailed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetMcpServerPlacementResponse_PreconditionFailed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetMcpServerPlacementResponse_PreconditionFailed, a, b2);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.PreconditionFailed|1 detail 9"
        ];
    }
};
SetMcpServerPlacementResponse_RejectedDeclaredPlacement = class _SetMcpServerPlacementResponse_RejectedDeclaredPlacement extends __protoMessage3193 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetMcpServerPlacementResponse_RejectedDeclaredPlacement().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetMcpServerPlacementResponse_RejectedDeclaredPlacement().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetMcpServerPlacementResponse_RejectedDeclaredPlacement().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetMcpServerPlacementResponse_RejectedDeclaredPlacement, a, b2);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.RejectedDeclaredPlacement"
        ];
    }
};
SetMcpServerPlacementResponse_RejectedGrokRow = class _SetMcpServerPlacementResponse_RejectedGrokRow extends __protoMessage3193 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetMcpServerPlacementResponse_RejectedGrokRow().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetMcpServerPlacementResponse_RejectedGrokRow().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetMcpServerPlacementResponse_RejectedGrokRow().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetMcpServerPlacementResponse_RejectedGrokRow, a, b2);
    }
    static $() {
        return [
            "SetMcpServerPlacementResponse.RejectedGrokRow"
        ];
    }
};

}
