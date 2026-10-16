import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { AgentHostAgentStoreApplySubagentMountsArgs, AgentHostAgentStoreApplySubagentMountsResult, AgentHostAgentStoreClearSubagentMountsArgs, AgentHostAgentStoreClearSubagentMountsResult, AgentHostAgentStoreConflictNoticeAckArgs, AgentHostAgentStoreConflictNoticeNoteDeferredArgs, AgentHostAgentStoreConflictNoticePeekArgs, AgentHostAgentStoreConflictNoticeReleaseArgs, AgentHostAgentStoreConflictNoticeResult, AgentHostAgentStoreConflictNoticeSyncAndPeekArgs, AgentHostAgentStoreExtraEnvArgs, AgentHostAgentStoreExtraEnvResult, AgentHostAgentStoreFlushSubagentArgs, AgentHostAgentStoreFlushSubagentResult, AgentHostAgentStoreScopePathsArgs, AgentHostAgentStoreScopePathsResult, AgentHostAgentStoreSkillRootsArgs, AgentHostAgentStoreSkillRootsResult, init_agent_host_agent_store_pb } from "./agent_host_agent_store_pb.js";
import { AgentHostPluginsReloadArgs, AgentHostPluginsReloadResult, AgentHostPluginsSnapshotArgs, AgentHostPluginsSnapshotResult, init_agent_host_plugins_pb } from "./agent_host_plugins_pb.js";
import { CanvasDiagnosticsArgs, CanvasDiagnosticsResult, init_canvas_diagnostics_exec_pb } from "./canvas_diagnostics_exec_pb.js";
import { ConversationSearchArgs, ConversationSearchResult, init_conversation_search_exec_pb } from "./conversation_search_exec_pb.js";
import { ExecuteHookRequest, ExecuteHookResponse, init_exec_pb } from "./exec_pb.js";
import { McpAllowlistPrecheckArgs, McpAllowlistPrecheckResult, init_mcp_allowlist_precheck_exec_pb } from "./mcp_allowlist_precheck_exec_pb.js";
import { ListMcpResourcesExecArgs, ListMcpResourcesExecResult, McpArgs, McpResult, McpStateExecArgs, McpStateExecResult, ReadMcpResourceExecArgs, ReadMcpResourceExecResult, init_mcp_exec_pb } from "./mcp_exec_pb.js";
import { RequestContext, RequestContextArgs, init_request_context_exec_pb } from "./request_context_exec_pb.js";
import { RequestedModel_ModelParameterValue, init_requested_model_pb } from "./requested_model_pb.js";
import { SandboxPolicy, init_sandbox_pb } from "./sandbox_pb.js";
import { SubagentArgs, init_subagent_exec_pb } from "./subagent_exec_pb.js";
import { SubagentBackgroundReason, init_subagents_pb } from "./subagents_pb.js";
import { GetDiffRequest, GetDiffResponse, init_utils_pb2 } from "../../aiserver/v1/utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage200, __protoMessage3191, AgentExecApprovalMode, AgentReadBoundary, AgentHostDurableSubagentInvocationKind, OpenAgentHostSurfaceChannelRequest, AgentHostSurfaceChannelEvent, AgentHostSurfaceChannelHeartbeat, AgentHostSurfaceAuthRefreshRequest, AgentHostSurfaceCallbackInvocation, RespondAgentHostSurfaceCallbackRequest, RespondAgentHostSurfaceCallbackResponse, PushAgentHostSessionPermissionsRequest, PushAgentHostSessionPermissionsResponse, AgentHostSurfaceCallbackError, AgentHostSurfacePermissionsPullRequest, AgentHostSurfacePermissionsSnapshot, AgentExecPermissions, AgentHostSurfaceConversationSearchRequest, AgentHostSurfaceConversationSearchResult, AgentHostSurfaceFileChangeNotify, AgentHostSurfaceHookRequest, AgentHostSurfaceHookResult, AgentHostSurfaceGitRequest, AgentHostSurfaceGitResult, AgentHostSurfaceCanvasRequest, AgentHostSurfaceCanvasResult, AgentHostSurfacePluginsRequest, AgentHostSurfacePluginsResult, AgentHostSurfaceAgentStoreRequest, AgentHostSurfaceAgentStoreResult, AgentHostSurfaceMcpWriterRequest, AgentHostSurfaceMcpWriterResult, AgentHostSurfaceCloudSubagentCreateOrResume, AgentHostSurfaceCloudSubagentRun, AgentHostSurfaceCloudSubagentRequest, AgentHostSurfaceCloudSubagentCreateOrResumeResult, AgentHostSurfaceCloudSubagentCompleted, AgentHostSurfaceCloudSubagentBackground, AgentHostSurfaceCloudSubagentAborted, AgentHostSurfaceCloudSubagentFailed, AgentHostSurfaceCloudSubagentRunResult, AgentHostSurfaceCloudSubagentResult, AgentHostSurfaceSavedModelParametersRequest, AgentHostSurfaceSavedModelParametersResult, AgentHostSurfaceRequiredGlobalCommandsRequest, AgentHostSurfaceRequiredGlobalCommandsResult, AgentHostSurfaceFindSubagentRequest, AgentHostSurfaceFindSubagentResult, AgentHostDurableSubagentInvocationRecord, AgentHostSurfaceGlobalCommand, AgentHostSurfaceRequestContextRequest, AgentHostSurfaceRequestContextResult;
export { AgentExecApprovalMode, AgentExecPermissions, AgentHostDurableSubagentInvocationKind, AgentHostDurableSubagentInvocationRecord, AgentHostSurfaceAgentStoreRequest, AgentHostSurfaceAgentStoreResult, AgentHostSurfaceAuthRefreshRequest, AgentHostSurfaceCallbackError, AgentHostSurfaceCallbackInvocation, AgentHostSurfaceCanvasRequest, AgentHostSurfaceCanvasResult, AgentHostSurfaceChannelEvent, AgentHostSurfaceChannelHeartbeat, AgentHostSurfaceCloudSubagentAborted, AgentHostSurfaceCloudSubagentBackground, AgentHostSurfaceCloudSubagentCompleted, AgentHostSurfaceCloudSubagentCreateOrResume, AgentHostSurfaceCloudSubagentCreateOrResumeResult, AgentHostSurfaceCloudSubagentFailed, AgentHostSurfaceCloudSubagentRequest, AgentHostSurfaceCloudSubagentResult, AgentHostSurfaceCloudSubagentRun, AgentHostSurfaceCloudSubagentRunResult, AgentHostSurfaceConversationSearchRequest, AgentHostSurfaceConversationSearchResult, AgentHostSurfaceFileChangeNotify, AgentHostSurfaceFindSubagentRequest, AgentHostSurfaceFindSubagentResult, AgentHostSurfaceGitRequest, AgentHostSurfaceGitResult, AgentHostSurfaceGlobalCommand, AgentHostSurfaceHookRequest, AgentHostSurfaceHookResult, AgentHostSurfaceMcpWriterRequest, AgentHostSurfaceMcpWriterResult, AgentHostSurfacePermissionsPullRequest, AgentHostSurfacePermissionsSnapshot, AgentHostSurfacePluginsRequest, AgentHostSurfacePluginsResult, AgentHostSurfaceRequestContextRequest, AgentHostSurfaceRequestContextResult, AgentHostSurfaceRequiredGlobalCommandsRequest, AgentHostSurfaceRequiredGlobalCommandsResult, AgentHostSurfaceSavedModelParametersRequest, AgentHostSurfaceSavedModelParametersResult, AgentReadBoundary, OpenAgentHostSurfaceChannelRequest, PushAgentHostSessionPermissionsRequest, PushAgentHostSessionPermissionsResponse, RespondAgentHostSurfaceCallbackRequest, RespondAgentHostSurfaceCallbackResponse, __protoMessage3191, __protoPackage200 };
var __wakaru_init_agent_host_surface_pb_initialized = false;
export function init_agent_host_surface_pb() {
if (__wakaru_init_agent_host_surface_pb_initialized) return;
__wakaru_init_agent_host_surface_pb_initialized = true;
"use strict";
init_esm2();
init_sandbox_pb();
init_conversation_search_exec_pb();
init_exec_pb();
init_utils_pb2();
init_canvas_diagnostics_exec_pb();
init_agent_host_plugins_pb();
init_agent_host_agent_store_pb();
init_mcp_exec_pb();
init_mcp_allowlist_precheck_exec_pb();
init_subagent_exec_pb();
init_subagents_pb();
init_requested_model_pb();
init_request_context_exec_pb();
init_compact();
__protoPackage200 = "agent.v1.";
__protoMessage3191 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage200;
    }
};
AgentExecApprovalMode = enumType2(proto3, __protoPackage200, "AgentExecApprovalMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNRESTRICTED"
    ],
    [
        2,
        "ALLOWLIST"
    ],
    [
        3,
        "ASK_EVERY_TIME"
    ]
], 1);
AgentReadBoundary = enumType2(proto3, __protoPackage200, "AgentReadBoundary", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SYSTEM"
    ],
    [
        2,
        "WORKSPACE"
    ]
], 1);
AgentHostDurableSubagentInvocationKind = enumType2(proto3, __protoPackage200, "AgentHostDurableSubagentInvocationKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STARTED"
    ],
    [
        2,
        "CHECKPOINTED"
    ],
    [
        3,
        "COMPLETED"
    ]
], 1);
OpenAgentHostSurfaceChannelRequest = class _OpenAgentHostSurfaceChannelRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.clientInstanceId = "";
        this.workspacePaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _OpenAgentHostSurfaceChannelRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _OpenAgentHostSurfaceChannelRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _OpenAgentHostSurfaceChannelRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_OpenAgentHostSurfaceChannelRequest, a, b2);
    }
    static $() {
        return [
            "OpenAgentHostSurfaceChannelRequest|1 client_instance_id 9|2 workspace_paths 9*"
        ];
    }
};
AgentHostSurfaceChannelEvent = class _AgentHostSurfaceChannelEvent extends __protoMessage3191 {
    constructor(data){
        super();
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceChannelEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceChannelEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceChannelEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceChannelEvent, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceChannelEvent|1 invocation #0 event|2 heartbeat #1 event|3 auth_refresh #2 event",
            AgentHostSurfaceCallbackInvocation,
            AgentHostSurfaceChannelHeartbeat,
            AgentHostSurfaceAuthRefreshRequest
        ];
    }
};
AgentHostSurfaceChannelHeartbeat = class _AgentHostSurfaceChannelHeartbeat extends __protoMessage3191 {
    constructor(data){
        super();
        this.epochMs = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceChannelHeartbeat().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceChannelHeartbeat().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceChannelHeartbeat().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceChannelHeartbeat, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceChannelHeartbeat|1 epoch_ms 4"
        ];
    }
};
AgentHostSurfaceAuthRefreshRequest = class _AgentHostSurfaceAuthRefreshRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceAuthRefreshRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceAuthRefreshRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceAuthRefreshRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceAuthRefreshRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceAuthRefreshRequest|1 reason 9"
        ];
    }
};
AgentHostSurfaceCallbackInvocation = class _AgentHostSurfaceCallbackInvocation extends __protoMessage3191 {
    constructor(data){
        super();
        this.callbackId = "";
        this.sessionId = "";
        this.targetClientInstanceId = "";
        this.kind = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCallbackInvocation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCallbackInvocation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCallbackInvocation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCallbackInvocation, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCallbackInvocation|1 callback_id 9|2 session_id 9|3 target_client_instance_id 9|4 root_session_id 9?|12 permissions_pull #0 kind|14 conversation_search #1 kind|15 file_change_notify #2 kind|16 hook #3 kind|17 git #4 kind|18 canvas #5 kind|19 agent_host_plugins #6 kind|20 agent_host_agent_store #7 kind|21 mcp_writer #8 kind|22 cloud_subagent #9 kind|24 saved_model_parameters #10 kind|25 required_global_commands #11 kind|26 find_subagent #12 kind|27 request_context #13 kind",
            AgentHostSurfacePermissionsPullRequest,
            AgentHostSurfaceConversationSearchRequest,
            AgentHostSurfaceFileChangeNotify,
            AgentHostSurfaceHookRequest,
            AgentHostSurfaceGitRequest,
            AgentHostSurfaceCanvasRequest,
            AgentHostSurfacePluginsRequest,
            AgentHostSurfaceAgentStoreRequest,
            AgentHostSurfaceMcpWriterRequest,
            AgentHostSurfaceCloudSubagentRequest,
            AgentHostSurfaceSavedModelParametersRequest,
            AgentHostSurfaceRequiredGlobalCommandsRequest,
            AgentHostSurfaceFindSubagentRequest,
            AgentHostSurfaceRequestContextRequest
        ];
    }
};
RespondAgentHostSurfaceCallbackRequest = class _RespondAgentHostSurfaceCallbackRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.callbackId = "";
        this.clientInstanceId = "";
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RespondAgentHostSurfaceCallbackRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RespondAgentHostSurfaceCallbackRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RespondAgentHostSurfaceCallbackRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RespondAgentHostSurfaceCallbackRequest, a, b2);
    }
    static $() {
        return [
            "RespondAgentHostSurfaceCallbackRequest|1 callback_id 9|2 client_instance_id 9|12 permissions #0 result|13 conversation_search #1 result|14 hook #2 result|15 git #3 result|16 canvas #4 result|17 agent_host_plugins #5 result|18 agent_host_agent_store #6 result|19 mcp_writer #7 result|20 cloud_subagent #8 result|22 saved_model_parameters #9 result|23 required_global_commands #10 result|24 find_subagent #11 result|25 request_context #12 result|99 error #13 result",
            AgentHostSurfacePermissionsSnapshot,
            AgentHostSurfaceConversationSearchResult,
            AgentHostSurfaceHookResult,
            AgentHostSurfaceGitResult,
            AgentHostSurfaceCanvasResult,
            AgentHostSurfacePluginsResult,
            AgentHostSurfaceAgentStoreResult,
            AgentHostSurfaceMcpWriterResult,
            AgentHostSurfaceCloudSubagentResult,
            AgentHostSurfaceSavedModelParametersResult,
            AgentHostSurfaceRequiredGlobalCommandsResult,
            AgentHostSurfaceFindSubagentResult,
            AgentHostSurfaceRequestContextResult,
            AgentHostSurfaceCallbackError
        ];
    }
};
RespondAgentHostSurfaceCallbackResponse = class _RespondAgentHostSurfaceCallbackResponse extends __protoMessage3191 {
    constructor(data){
        super();
        this.accepted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RespondAgentHostSurfaceCallbackResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RespondAgentHostSurfaceCallbackResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RespondAgentHostSurfaceCallbackResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RespondAgentHostSurfaceCallbackResponse, a, b2);
    }
    static $() {
        return [
            "RespondAgentHostSurfaceCallbackResponse|1 accepted 8"
        ];
    }
};
PushAgentHostSessionPermissionsRequest = class _PushAgentHostSessionPermissionsRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.sessionId = "";
        this.clientInstanceId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PushAgentHostSessionPermissionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PushAgentHostSessionPermissionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PushAgentHostSessionPermissionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PushAgentHostSessionPermissionsRequest, a, b2);
    }
    static $() {
        return [
            "PushAgentHostSessionPermissionsRequest|1 session_id 9|2 client_instance_id 9|3 permissions #0",
            AgentExecPermissions
        ];
    }
};
PushAgentHostSessionPermissionsResponse = class _PushAgentHostSessionPermissionsResponse extends __protoMessage3191 {
    constructor(data){
        super();
        this.accepted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PushAgentHostSessionPermissionsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PushAgentHostSessionPermissionsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PushAgentHostSessionPermissionsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PushAgentHostSessionPermissionsResponse, a, b2);
    }
    static $() {
        return [
            "PushAgentHostSessionPermissionsResponse|1 accepted 8"
        ];
    }
};
AgentHostSurfaceCallbackError = class _AgentHostSurfaceCallbackError extends __protoMessage3191 {
    constructor(data){
        super();
        this.message = "";
        this.code = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCallbackError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCallbackError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCallbackError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCallbackError, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCallbackError|1 message 9|2 code 9"
        ];
    }
};
AgentHostSurfacePermissionsPullRequest = class _AgentHostSurfacePermissionsPullRequest extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfacePermissionsPullRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfacePermissionsPullRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfacePermissionsPullRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfacePermissionsPullRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfacePermissionsPullRequest"
        ];
    }
};
AgentHostSurfacePermissionsSnapshot = class _AgentHostSurfacePermissionsSnapshot extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfacePermissionsSnapshot().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfacePermissionsSnapshot().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfacePermissionsSnapshot().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfacePermissionsSnapshot, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfacePermissionsSnapshot|1 permissions #0",
            AgentExecPermissions
        ];
    }
};
AgentExecPermissions = class _AgentExecPermissions extends __protoMessage3191 {
    constructor(data){
        super();
        this.allow = [];
        this.deny = [];
        this.approvalMode = AgentExecApprovalMode.UNSPECIFIED;
        this.smartAllowlistDenylist = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentExecPermissions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentExecPermissions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentExecPermissions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentExecPermissions, a, b2);
    }
    static $() {
        return [
            "AgentExecPermissions|1 allow 9*|2 deny 9*|3 approval_mode #0|4 read_boundary #1?|5 user_sandbox_data_folder_name 9?|6 user_configured_policy #2|7 dashboard_terminal_allowlist_overridden_by_permissions_file 8?|8 smart_allowlist_enabled 8?|9 smart_allowlist_denylist 9*|10 prompt_workspace_writes 8?",
            AgentExecApprovalMode,
            AgentReadBoundary,
            SandboxPolicy
        ];
    }
};
AgentHostSurfaceConversationSearchRequest = class _AgentHostSurfaceConversationSearchRequest extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceConversationSearchRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceConversationSearchRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceConversationSearchRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceConversationSearchRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceConversationSearchRequest|1 args #0",
            ConversationSearchArgs
        ];
    }
};
AgentHostSurfaceConversationSearchResult = class _AgentHostSurfaceConversationSearchResult extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceConversationSearchResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceConversationSearchResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceConversationSearchResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceConversationSearchResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceConversationSearchResult|1 result #0",
            ConversationSearchResult
        ];
    }
};
AgentHostSurfaceFileChangeNotify = class _AgentHostSurfaceFileChangeNotify extends __protoMessage3191 {
    constructor(data){
        super();
        this.path = "";
        this.toolCallId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceFileChangeNotify().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceFileChangeNotify().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceFileChangeNotify().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceFileChangeNotify, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceFileChangeNotify|1 path 9|2 before 9?|3 after 9?|4 tool_call_id 9"
        ];
    }
};
AgentHostSurfaceHookRequest = class _AgentHostSurfaceHookRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.step = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceHookRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceHookRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceHookRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceHookRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceHookRequest|1 step 9|2 request #0",
            ExecuteHookRequest
        ];
    }
};
AgentHostSurfaceHookResult = class _AgentHostSurfaceHookResult extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceHookResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceHookResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceHookResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceHookResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceHookResult|1 response #0",
            ExecuteHookResponse
        ];
    }
};
AgentHostSurfaceGitRequest = class _AgentHostSurfaceGitRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.request = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceGitRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceGitRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceGitRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceGitRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceGitRequest|1 git_diff #0 request",
            GetDiffRequest
        ];
    }
};
AgentHostSurfaceGitResult = class _AgentHostSurfaceGitResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceGitResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceGitResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceGitResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceGitResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceGitResult|1 git_diff #0 result",
            GetDiffResponse
        ];
    }
};
AgentHostSurfaceCanvasRequest = class _AgentHostSurfaceCanvasRequest extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCanvasRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCanvasRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCanvasRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCanvasRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCanvasRequest|1 args #0",
            CanvasDiagnosticsArgs
        ];
    }
};
AgentHostSurfaceCanvasResult = class _AgentHostSurfaceCanvasResult extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCanvasResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCanvasResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCanvasResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCanvasResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCanvasResult|1 result #0",
            CanvasDiagnosticsResult
        ];
    }
};
AgentHostSurfacePluginsRequest = class _AgentHostSurfacePluginsRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.operation = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfacePluginsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfacePluginsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfacePluginsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfacePluginsRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfacePluginsRequest|1 snapshot #0 operation|2 reload #1 operation",
            AgentHostPluginsSnapshotArgs,
            AgentHostPluginsReloadArgs
        ];
    }
};
AgentHostSurfacePluginsResult = class _AgentHostSurfacePluginsResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfacePluginsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfacePluginsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfacePluginsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfacePluginsResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfacePluginsResult|1 snapshot #0 result|2 reload #1 result",
            AgentHostPluginsSnapshotResult,
            AgentHostPluginsReloadResult
        ];
    }
};
AgentHostSurfaceAgentStoreRequest = class _AgentHostSurfaceAgentStoreRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.operation = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceAgentStoreRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceAgentStoreRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceAgentStoreRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceAgentStoreRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceAgentStoreRequest|1 extra_env #0 operation|2 skill_roots #1 operation|3 conflict_notice_sync_and_peek #2 operation|4 conflict_notice_peek #3 operation|5 conflict_notice_ack #4 operation|6 conflict_notice_release #5 operation|7 conflict_notice_note_deferred #6 operation|8 apply_subagent_mounts #7 operation|9 clear_subagent_mounts #8 operation|10 flush_subagent #9 operation|11 scope_paths #10 operation",
            AgentHostAgentStoreExtraEnvArgs,
            AgentHostAgentStoreSkillRootsArgs,
            AgentHostAgentStoreConflictNoticeSyncAndPeekArgs,
            AgentHostAgentStoreConflictNoticePeekArgs,
            AgentHostAgentStoreConflictNoticeAckArgs,
            AgentHostAgentStoreConflictNoticeReleaseArgs,
            AgentHostAgentStoreConflictNoticeNoteDeferredArgs,
            AgentHostAgentStoreApplySubagentMountsArgs,
            AgentHostAgentStoreClearSubagentMountsArgs,
            AgentHostAgentStoreFlushSubagentArgs,
            AgentHostAgentStoreScopePathsArgs
        ];
    }
};
AgentHostSurfaceAgentStoreResult = class _AgentHostSurfaceAgentStoreResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceAgentStoreResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceAgentStoreResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceAgentStoreResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceAgentStoreResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceAgentStoreResult|1 extra_env #0 result|2 skill_roots #1 result|3 conflict_notice #2 result|4 apply_subagent_mounts #3 result|5 clear_subagent_mounts #4 result|6 flush_subagent #5 result|7 scope_paths #6 result",
            AgentHostAgentStoreExtraEnvResult,
            AgentHostAgentStoreSkillRootsResult,
            AgentHostAgentStoreConflictNoticeResult,
            AgentHostAgentStoreApplySubagentMountsResult,
            AgentHostAgentStoreClearSubagentMountsResult,
            AgentHostAgentStoreFlushSubagentResult,
            AgentHostAgentStoreScopePathsResult
        ];
    }
};
AgentHostSurfaceMcpWriterRequest = class _AgentHostSurfaceMcpWriterRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.operation = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceMcpWriterRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceMcpWriterRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceMcpWriterRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceMcpWriterRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceMcpWriterRequest|1 mcp #0 operation|2 list_mcp_resources #1 operation|3 read_mcp_resource #2 operation|4 mcp_allowlist_precheck #3 operation|5 mcp_state #4 operation",
            McpArgs,
            ListMcpResourcesExecArgs,
            ReadMcpResourceExecArgs,
            McpAllowlistPrecheckArgs,
            McpStateExecArgs
        ];
    }
};
AgentHostSurfaceMcpWriterResult = class _AgentHostSurfaceMcpWriterResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceMcpWriterResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceMcpWriterResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceMcpWriterResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceMcpWriterResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceMcpWriterResult|1 mcp #0 result|2 list_mcp_resources #1 result|3 read_mcp_resource #2 result|4 mcp_allowlist_precheck #3 result|5 mcp_state #4 result",
            McpResult,
            ListMcpResourcesExecResult,
            ReadMcpResourceExecResult,
            McpAllowlistPrecheckResult,
            McpStateExecResult
        ];
    }
};
AgentHostSurfaceCloudSubagentCreateOrResume = class _AgentHostSurfaceCloudSubagentCreateOrResume extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentCreateOrResume().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentCreateOrResume().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentCreateOrResume().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentCreateOrResume, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentCreateOrResume|1 args #0",
            SubagentArgs
        ];
    }
};
AgentHostSurfaceCloudSubagentRun = class _AgentHostSurfaceCloudSubagentRun extends __protoMessage3191 {
    constructor(data){
        super();
        this.agentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentRun().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentRun().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentRun().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentRun, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentRun|1 agent_id 9|2 args #0",
            SubagentArgs
        ];
    }
};
AgentHostSurfaceCloudSubagentRequest = class _AgentHostSurfaceCloudSubagentRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.operation = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentRequest|1 create_or_resume #0 operation|2 run #1 operation",
            AgentHostSurfaceCloudSubagentCreateOrResume,
            AgentHostSurfaceCloudSubagentRun
        ];
    }
};
AgentHostSurfaceCloudSubagentCreateOrResumeResult = class _AgentHostSurfaceCloudSubagentCreateOrResumeResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.agentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentCreateOrResumeResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentCreateOrResumeResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentCreateOrResumeResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentCreateOrResumeResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentCreateOrResumeResult|1 agent_id 9"
        ];
    }
};
AgentHostSurfaceCloudSubagentCompleted = class _AgentHostSurfaceCloudSubagentCompleted extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentCompleted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentCompleted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentCompleted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentCompleted, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentCompleted|1 final_message 9?|2 tool_call_count 5?"
        ];
    }
};
AgentHostSurfaceCloudSubagentBackground = class _AgentHostSurfaceCloudSubagentBackground extends __protoMessage3191 {
    constructor(data){
        super();
        this.backgroundReason = SubagentBackgroundReason.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentBackground().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentBackground().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentBackground().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentBackground, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentBackground|1 background_reason #0|2 transcript_path 9?|3 final_message 9?|4 tool_call_count 5?",
            SubagentBackgroundReason
        ];
    }
};
AgentHostSurfaceCloudSubagentAborted = class _AgentHostSurfaceCloudSubagentAborted extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentAborted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentAborted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentAborted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentAborted, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentAborted|1 error 9?"
        ];
    }
};
AgentHostSurfaceCloudSubagentFailed = class _AgentHostSurfaceCloudSubagentFailed extends __protoMessage3191 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentFailed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentFailed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentFailed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentFailed, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentFailed|1 error 9"
        ];
    }
};
AgentHostSurfaceCloudSubagentRunResult = class _AgentHostSurfaceCloudSubagentRunResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.outcome = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentRunResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentRunResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentRunResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentRunResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentRunResult|1 completed #0 outcome|2 background #1 outcome|3 aborted #2 outcome|4 failed #3 outcome",
            AgentHostSurfaceCloudSubagentCompleted,
            AgentHostSurfaceCloudSubagentBackground,
            AgentHostSurfaceCloudSubagentAborted,
            AgentHostSurfaceCloudSubagentFailed
        ];
    }
};
AgentHostSurfaceCloudSubagentResult = class _AgentHostSurfaceCloudSubagentResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceCloudSubagentResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceCloudSubagentResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceCloudSubagentResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceCloudSubagentResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceCloudSubagentResult|1 create_or_resume #0 result|2 run #1 result",
            AgentHostSurfaceCloudSubagentCreateOrResumeResult,
            AgentHostSurfaceCloudSubagentRunResult
        ];
    }
};
AgentHostSurfaceSavedModelParametersRequest = class _AgentHostSurfaceSavedModelParametersRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.modelId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceSavedModelParametersRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceSavedModelParametersRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceSavedModelParametersRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceSavedModelParametersRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceSavedModelParametersRequest|1 model_id 9|2 max_mode 8?|3 root_session_id 9?"
        ];
    }
};
AgentHostSurfaceSavedModelParametersResult = class _AgentHostSurfaceSavedModelParametersResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.parameters = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceSavedModelParametersResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceSavedModelParametersResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceSavedModelParametersResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceSavedModelParametersResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceSavedModelParametersResult|1 parameters #0*",
            RequestedModel_ModelParameterValue
        ];
    }
};
AgentHostSurfaceRequiredGlobalCommandsRequest = class _AgentHostSurfaceRequiredGlobalCommandsRequest extends __protoMessage3191 {
    constructor(data){
        super();
        this.subagentType = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceRequiredGlobalCommandsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceRequiredGlobalCommandsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceRequiredGlobalCommandsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceRequiredGlobalCommandsRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceRequiredGlobalCommandsRequest|1 subagent_type 9|2 root_session_id 9?"
        ];
    }
};
AgentHostSurfaceRequiredGlobalCommandsResult = class _AgentHostSurfaceRequiredGlobalCommandsResult extends __protoMessage3191 {
    constructor(data){
        super();
        this.commands = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceRequiredGlobalCommandsResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceRequiredGlobalCommandsResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceRequiredGlobalCommandsResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceRequiredGlobalCommandsResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceRequiredGlobalCommandsResult|1 commands #0*",
            AgentHostSurfaceGlobalCommand
        ];
    }
};
AgentHostSurfaceFindSubagentRequest = class _AgentHostSurfaceFindSubagentRequest extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceFindSubagentRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceFindSubagentRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceFindSubagentRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceFindSubagentRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceFindSubagentRequest"
        ];
    }
};
AgentHostSurfaceFindSubagentResult = class _AgentHostSurfaceFindSubagentResult extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceFindSubagentResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceFindSubagentResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceFindSubagentResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceFindSubagentResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceFindSubagentResult"
        ];
    }
};
AgentHostDurableSubagentInvocationRecord = class _AgentHostDurableSubagentInvocationRecord extends __protoMessage3191 {
    constructor(data){
        super();
        this.parentSessionId = "";
        this.rootSessionId = "";
        this.parentToolCallId = "";
        this.childSessionId = "";
        this.kind = AgentHostDurableSubagentInvocationKind.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostDurableSubagentInvocationRecord().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostDurableSubagentInvocationRecord().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostDurableSubagentInvocationRecord().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostDurableSubagentInvocationRecord, a, b2);
    }
    static $() {
        return [
            "AgentHostDurableSubagentInvocationRecord|1 parent_session_id 9|2 root_session_id 9|3 parent_tool_call_id 9|4 child_session_id 9|5 kind #0|6 outcome #1",
            AgentHostDurableSubagentInvocationKind,
            AgentHostSurfaceCloudSubagentRunResult
        ];
    }
};
AgentHostSurfaceGlobalCommand = class _AgentHostSurfaceGlobalCommand extends __protoMessage3191 {
    constructor(data){
        super();
        this.name = "";
        this.content = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceGlobalCommand().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceGlobalCommand().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceGlobalCommand().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceGlobalCommand, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceGlobalCommand|1 name 9|2 content 9"
        ];
    }
};
AgentHostSurfaceRequestContextRequest = class _AgentHostSurfaceRequestContextRequest extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceRequestContextRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceRequestContextRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceRequestContextRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceRequestContextRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceRequestContextRequest|1 args #0",
            RequestContextArgs
        ];
    }
};
AgentHostSurfaceRequestContextResult = class _AgentHostSurfaceRequestContextResult extends __protoMessage3191 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSurfaceRequestContextResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSurfaceRequestContextResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSurfaceRequestContextResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSurfaceRequestContextResult, a, b2);
    }
    static $() {
        return [
            "AgentHostSurfaceRequestContextResult|1 request_context #0",
            RequestContext
        ];
    }
};

}
