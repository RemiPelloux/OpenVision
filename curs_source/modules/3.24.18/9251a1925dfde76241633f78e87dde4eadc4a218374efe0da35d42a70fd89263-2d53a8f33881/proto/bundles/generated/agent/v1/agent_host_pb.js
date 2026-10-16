import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { Struct, Value } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { Timestamp } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { BackgroundTaskCompletion, ConversationAction, ConversationStateStructure, InteractionQuery, InteractionResponse, InteractionUpdate, ModelDetails2, SubagentModelOverride, init_agent_pb } from "./agent_pb.js";
import { AgentSkillMetadata, init_agent_skills_pb } from "./agent_skills_pb.js";
import { CursorRule, init_cursor_rules_pb } from "./cursor_rules_pb.js";
import { DebugModeConfig, HooksConfigInfo, MountedAgentStore, PermissionsAutoRunInstructions, RecentlyAddedPlugin, init_request_context_exec_pb } from "./request_context_exec_pb.js";
import { RequestedModel, init_requested_model_pb } from "./requested_model_pb.js";
import { SelectedImage, init_selected_context_pb } from "./selected_context_pb.js";
import { SystemPromptSpec, init_system_prompt_pb } from "./system_prompt_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../aiserver/v1/privacy_mode_pb.js";
import { ErrorDetails, init_utils_pb2 } from "../../aiserver/v1/utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage201, __protoMessage3192, SubagentInteractionPolicy, AgentHostSessionStatus, AgentHostSkillSource, AgentHostSendDelivery, AgentHostApprovalBlockReason, AgentHostApprovalHookSource, AgentHostApprovalOperationType, AgentHostInteractionResponseStatus, AgentHostBackgroundWorkKind, AgentHostBackgroundWorkState, AgentHostShellLifecycleState, AgentHostTurnOutcome, AgentHostTurnInterruptInitiator, AgentHostTurnStopReason, CreateAgentHostSessionRequest, AgentHostSessionOptions, AgentHostLocalSubagentLimits, AgentHostOwningProject, CreateAgentHostSessionResponse, ForkAgentHostSessionRequest, ForkAgentHostSessionResponse, ListAgentHostSessionsRequest, ListAgentHostSessionsResponse, WatchAgentHostSessionsRequest, HasAgentHostSessionRequest, HasAgentHostSessionResponse, SessionParent, AgentHostSession, WatchAgentHostSessionsEvent, AgentHostSessionsSnapshot, AgentHostSessionAdded, AgentHostSessionUpdated, AgentHostSessionDeleted, ListAgentHostWorkspacesRequest, ListAgentHostWorkspacesResponse, AgentHostWorkspace, ListAgentHostSkillsRequest, ListAgentHostSkillsResponse, AgentHostSkill, AgentHostSkillScanError, SendAgentHostMessageRequest, SendAgentHostActionRequest, RequestContextDecoration, StringListOverlay, MountedAgentStoreListOverlay, GitRepoBranchAncestry, SendAgentHostMessageResponse, SendAgentHostActionResponse, DeleteAgentHostSessionRequest, DeleteAgentHostSessionResponse, InterruptAgentHostTurnRequest, InterruptAgentHostTurnResponse, CancelQueuedAgentHostTurnRequest, CancelQueuedAgentHostTurnResponse, ReorderQueuedAgentHostTurnsRequest, ReorderQueuedAgentHostTurnsResponse, EditQueuedAgentHostTurnRequest, QueuedAgentHostUserMessageEdit, QueuedAgentHostImages, QueuedAgentHostShellCommandEdit, EditQueuedAgentHostTurnResponse, AgentHostApprovalWriteDetails, AgentHostApprovalReadDetails, AgentHostApprovalShellDetails, AgentHostApprovalDeleteDetails, AgentHostApprovalMcpDetails, AgentHostApprovalOperation, AgentHostApprovalRequest, AgentHostApprovalResult, McpElicitationRequest, McpElicitationResponse, McpElicitationResponse_Action, AgentHostMcpElicitationRequest, RespondToAgentHostInteractionRequest, RespondToAgentHostInteractionResponse, AgentHostPendingInteraction, WatchAgentHostSessionInteractionsRequest, WatchAgentHostSessionInteractionsEvent, AgentHostSessionInteractionsSnapshot, AgentHostSessionInteractionsState, AgentHostBackgroundWork, WatchAgentHostSessionBackgroundWorkRequest, WatchAgentHostSessionBackgroundWorkEvent, WatchAgentHostSessionTurnLifecycleRequest, WatchAgentHostSessionTurnLifecycleEvent, AgentHostTurnLifecycleWatchReady, AgentHostSessionBackgroundWorkSnapshot, AgentHostSessionBackgroundWorkState, AbortAgentHostBackgroundWorkRequest, AbortAgentHostBackgroundWorkResponse, AbortAllAgentHostBackgroundWorkRequest, AbortAllAgentHostBackgroundWorkResponse, WatchAgentHostSessionShellOutputRequest, WatchAgentHostSessionShellOutputEvent, AgentHostShellOutputSnapshot, AgentHostShellOutputChunk, AgentHostShellLifecycle, WriteAgentHostSessionShellInputRequest, WriteAgentHostSessionShellInputResponse, AttachAgentHostSessionRequest, GetAgentHostSessionBlobsRequest, AgentHostSessionBlob, GetAgentHostSessionBlobsResponse, ReadAgentHostFileRequest, ReadAgentHostFileResponse, AgentHostFileChunk, AgentHostFileNotModified, AgentHostFileTooLarge, GetAgentHostDaemonInfoRequest, GetAgentHostDaemonInfoResponse, ShutdownAgentHostDaemonRequest, ShutdownAgentHostDaemonResponse, UpdateAgentHostDaemonAuthRequest, UpdateAgentHostDaemonAuthResponse, SetAgentHostSessionTitleRequest, SetAgentHostSessionTitleResponse, AgentHostSessionEvent, AgentHostBackgroundTaskCompleted, AgentHostTurnLifecycle, AgentHostTurnLifecycleFinished, AgentHostNetworkPhaseStarted, AgentHostTurnRuntimeSelected, AgentHostResponseMetadata, AgentHostReconnectTrigger, AgentHostConnectionStateChanged, AgentHostConnected, AgentHostReconnecting, AgentHostFirstMessage, AgentHostFirstMessageNetwork, AgentHostFirstNonHeartbeatResponse, AgentHostTtftBreakdown, AgentHostSubagentStarted, AgentHostTurnStarted, AgentHostTurnInteractionsSuperseded, AgentHostTurnAwaitingInput, AgentHostInteractionCancelled, AgentHostInteractionFailed, AgentHostInteractionResolved, AgentHostTurnSettled, AgentHostTurnError, AgentHostTurnOptions;
export { AbortAgentHostBackgroundWorkRequest, AbortAgentHostBackgroundWorkResponse, AbortAllAgentHostBackgroundWorkRequest, AbortAllAgentHostBackgroundWorkResponse, AgentHostApprovalBlockReason, AgentHostApprovalDeleteDetails, AgentHostApprovalHookSource, AgentHostApprovalMcpDetails, AgentHostApprovalOperation, AgentHostApprovalOperationType, AgentHostApprovalReadDetails, AgentHostApprovalRequest, AgentHostApprovalResult, AgentHostApprovalShellDetails, AgentHostApprovalWriteDetails, AgentHostBackgroundTaskCompleted, AgentHostBackgroundWork, AgentHostBackgroundWorkKind, AgentHostBackgroundWorkState, AgentHostConnected, AgentHostConnectionStateChanged, AgentHostFileChunk, AgentHostFileNotModified, AgentHostFileTooLarge, AgentHostFirstMessage, AgentHostFirstMessageNetwork, AgentHostFirstNonHeartbeatResponse, AgentHostInteractionCancelled, AgentHostInteractionFailed, AgentHostInteractionResolved, AgentHostInteractionResponseStatus, AgentHostLocalSubagentLimits, AgentHostMcpElicitationRequest, AgentHostNetworkPhaseStarted, AgentHostOwningProject, AgentHostPendingInteraction, AgentHostReconnectTrigger, AgentHostReconnecting, AgentHostResponseMetadata, AgentHostSendDelivery, AgentHostSession, AgentHostSessionAdded, AgentHostSessionBackgroundWorkSnapshot, AgentHostSessionBackgroundWorkState, AgentHostSessionBlob, AgentHostSessionDeleted, AgentHostSessionEvent, AgentHostSessionInteractionsSnapshot, AgentHostSessionInteractionsState, AgentHostSessionOptions, AgentHostSessionStatus, AgentHostSessionUpdated, AgentHostSessionsSnapshot, AgentHostShellLifecycle, AgentHostShellLifecycleState, AgentHostShellOutputChunk, AgentHostShellOutputSnapshot, AgentHostSkill, AgentHostSkillScanError, AgentHostSkillSource, AgentHostSubagentStarted, AgentHostTtftBreakdown, AgentHostTurnAwaitingInput, AgentHostTurnError, AgentHostTurnInteractionsSuperseded, AgentHostTurnInterruptInitiator, AgentHostTurnLifecycle, AgentHostTurnLifecycleFinished, AgentHostTurnLifecycleWatchReady, AgentHostTurnOptions, AgentHostTurnOutcome, AgentHostTurnRuntimeSelected, AgentHostTurnSettled, AgentHostTurnStarted, AgentHostTurnStopReason, AgentHostWorkspace, AttachAgentHostSessionRequest, CancelQueuedAgentHostTurnRequest, CancelQueuedAgentHostTurnResponse, CreateAgentHostSessionRequest, CreateAgentHostSessionResponse, DeleteAgentHostSessionRequest, DeleteAgentHostSessionResponse, EditQueuedAgentHostTurnRequest, EditQueuedAgentHostTurnResponse, ForkAgentHostSessionRequest, ForkAgentHostSessionResponse, GetAgentHostDaemonInfoRequest, GetAgentHostDaemonInfoResponse, GetAgentHostSessionBlobsRequest, GetAgentHostSessionBlobsResponse, GitRepoBranchAncestry, HasAgentHostSessionRequest, HasAgentHostSessionResponse, InterruptAgentHostTurnRequest, InterruptAgentHostTurnResponse, ListAgentHostSessionsRequest, ListAgentHostSessionsResponse, ListAgentHostSkillsRequest, ListAgentHostSkillsResponse, ListAgentHostWorkspacesRequest, ListAgentHostWorkspacesResponse, McpElicitationRequest, McpElicitationResponse, McpElicitationResponse_Action, MountedAgentStoreListOverlay, QueuedAgentHostImages, QueuedAgentHostShellCommandEdit, QueuedAgentHostUserMessageEdit, ReadAgentHostFileRequest, ReadAgentHostFileResponse, ReorderQueuedAgentHostTurnsRequest, ReorderQueuedAgentHostTurnsResponse, RequestContextDecoration, RespondToAgentHostInteractionRequest, RespondToAgentHostInteractionResponse, SendAgentHostActionRequest, SendAgentHostActionResponse, SendAgentHostMessageRequest, SendAgentHostMessageResponse, SessionParent, SetAgentHostSessionTitleRequest, SetAgentHostSessionTitleResponse, ShutdownAgentHostDaemonRequest, ShutdownAgentHostDaemonResponse, StringListOverlay, SubagentInteractionPolicy, UpdateAgentHostDaemonAuthRequest, UpdateAgentHostDaemonAuthResponse, WatchAgentHostSessionBackgroundWorkEvent, WatchAgentHostSessionBackgroundWorkRequest, WatchAgentHostSessionInteractionsEvent, WatchAgentHostSessionInteractionsRequest, WatchAgentHostSessionShellOutputEvent, WatchAgentHostSessionShellOutputRequest, WatchAgentHostSessionTurnLifecycleEvent, WatchAgentHostSessionTurnLifecycleRequest, WatchAgentHostSessionsEvent, WatchAgentHostSessionsRequest, WriteAgentHostSessionShellInputRequest, WriteAgentHostSessionShellInputResponse, __protoMessage3192, __protoPackage201 };
var __wakaru_init_agent_host_pb_initialized = false;
export function init_agent_host_pb() {
if (__wakaru_init_agent_host_pb_initialized) return;
__wakaru_init_agent_host_pb_initialized = true;
"use strict";
init_esm2();
init_agent_pb();
init_agent_skills_pb();
init_requested_model_pb();
init_cursor_rules_pb();
init_request_context_exec_pb();
init_selected_context_pb();
init_privacy_mode_pb();
init_utils_pb2();
init_system_prompt_pb();
init_compact();
__protoPackage201 = "agent.v1.";
__protoMessage3192 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage201;
    }
};
SubagentInteractionPolicy = enumType2(proto3, __protoPackage201, "SubagentInteractionPolicy", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "AUTO_REJECT"
    ],
    [
        2,
        "BUBBLE_TO_PARENT"
    ],
    [
        3,
        "SURFACE_TO_USER"
    ]
], 1);
AgentHostSessionStatus = enumType2(proto3, __protoPackage201, "AgentHostSessionStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "IDLE"
    ],
    [
        2,
        "RUNNING"
    ],
    [
        3,
        "AWAITING_INPUT"
    ]
], 1);
AgentHostSkillSource = enumType2(proto3, __protoPackage201, "AgentHostSkillSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "WORKSPACE"
    ],
    [
        3,
        "NESTED_WORKSPACE"
    ],
    [
        4,
        "TEAM"
    ],
    [
        5,
        "BUILT_IN"
    ],
    [
        6,
        "PLUGIN"
    ]
], 1);
AgentHostSendDelivery = enumType2(proto3, __protoPackage201, "AgentHostSendDelivery", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "QUEUE"
    ],
    [
        2,
        "NOW"
    ],
    [
        3,
        "STEERED"
    ],
    [
        4,
        "INTERRUPTED"
    ]
], 1);
AgentHostApprovalBlockReason = enumType2(proto3, __protoPackage201, "AgentHostApprovalBlockReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OUT_OF_WORKSPACE"
    ],
    [
        2,
        "PROTECTED_CONFIG"
    ],
    [
        3,
        "WORKSPACE_WRITE"
    ]
], 1);
AgentHostApprovalHookSource = enumType2(proto3, __protoPackage201, "AgentHostApprovalHookSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER"
    ],
    [
        2,
        "PROJECT"
    ],
    [
        3,
        "ENTERPRISE"
    ],
    [
        4,
        "TEAM"
    ]
], 1);
AgentHostApprovalOperationType = enumType2(proto3, __protoPackage201, "AgentHostApprovalOperationType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "WRITE"
    ],
    [
        2,
        "READ"
    ],
    [
        3,
        "SHELL"
    ],
    [
        4,
        "DELETE"
    ],
    [
        5,
        "MCP"
    ]
], 1);
AgentHostInteractionResponseStatus = enumType2(proto3, __protoPackage201, "AgentHostInteractionResponseStatus", [
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
        "ALREADY_RESOLVED"
    ],
    [
        3,
        "NOT_FOUND"
    ]
], 1);
AgentHostBackgroundWorkKind = enumType2(proto3, __protoPackage201, "AgentHostBackgroundWorkKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SHELL"
    ],
    [
        2,
        "SUBAGENT"
    ]
], 1);
AgentHostBackgroundWorkState = enumType2(proto3, __protoPackage201, "AgentHostBackgroundWorkState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RUNNING"
    ],
    [
        2,
        "QUEUED"
    ]
], 1);
AgentHostShellLifecycleState = enumType2(proto3, __protoPackage201, "AgentHostShellLifecycleState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "STARTING"
    ],
    [
        2,
        "RUNNING"
    ],
    [
        3,
        "EXITED"
    ],
    [
        4,
        "ABORTED"
    ]
], 1);
AgentHostTurnOutcome = enumType2(proto3, __protoPackage201, "AgentHostTurnOutcome", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMPLETED"
    ],
    [
        2,
        "INTERRUPTED"
    ],
    [
        3,
        "FAILED"
    ]
], 1);
AgentHostTurnInterruptInitiator = enumType2(proto3, __protoPackage201, "AgentHostTurnInterruptInitiator", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "USER_STOP"
    ],
    [
        2,
        "FOLLOW_UP"
    ],
    [
        3,
        "CLIENT_ERROR"
    ],
    [
        4,
        "HOST"
    ]
], 1);
AgentHostTurnStopReason = enumType2(proto3, __protoPackage201, "AgentHostTurnStopReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MAX_STEPS_REACHED"
    ]
], 1);
CreateAgentHostSessionRequest = class _CreateAgentHostSessionRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.clientInstanceId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateAgentHostSessionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateAgentHostSessionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateAgentHostSessionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateAgentHostSessionRequest, a, b2);
    }
    static $() {
        return [
            "CreateAgentHostSessionRequest|1 session_id 9|2 initial_history #0?|3 session_options #1?|4 client_instance_id 9",
            ConversationStateStructure,
            AgentHostSessionOptions
        ];
    }
};
AgentHostSessionOptions = class _AgentHostSessionOptions extends __protoMessage3192 {
    constructor(data){
        super();
        this.workspacePaths = [];
        this.hostedMcpLocalGrantIdentifiers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionOptions, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionOptions|1 workspace_paths 9*|2 worktree_main_path 9?|3 is_glass_root 8?|4 interaction_policy #0?|5 owning_project #1?|6 local_subagent_limits #2?|7 hosted_mcp_routing_enabled 8?|8 hosted_mcp_local_grant_identifiers 9*",
            SubagentInteractionPolicy,
            AgentHostOwningProject,
            AgentHostLocalSubagentLimits
        ];
    }
};
AgentHostLocalSubagentLimits = class _AgentHostLocalSubagentLimits extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostLocalSubagentLimits().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostLocalSubagentLimits().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostLocalSubagentLimits().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostLocalSubagentLimits, a, b2);
    }
    static $() {
        return [
            "AgentHostLocalSubagentLimits|1 max_running 13?"
        ];
    }
};
AgentHostOwningProject = class _AgentHostOwningProject extends __protoMessage3192 {
    constructor(data){
        super();
        this.projectAgentId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostOwningProject().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostOwningProject().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostOwningProject().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostOwningProject, a, b2);
    }
    static $() {
        return [
            "AgentHostOwningProject|1 project_agent_id 9|2 project_name 9?"
        ];
    }
};
CreateAgentHostSessionResponse = class _CreateAgentHostSessionResponse extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CreateAgentHostSessionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CreateAgentHostSessionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CreateAgentHostSessionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CreateAgentHostSessionResponse, a, b2);
    }
    static $() {
        return [
            "CreateAgentHostSessionResponse"
        ];
    }
};
ForkAgentHostSessionRequest = class _ForkAgentHostSessionRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ForkAgentHostSessionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ForkAgentHostSessionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ForkAgentHostSessionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ForkAgentHostSessionRequest, a, b2);
    }
    static $() {
        return [
            "ForkAgentHostSessionRequest|1 session_id 9|2 through_turn_id 9?"
        ];
    }
};
ForkAgentHostSessionResponse = class _ForkAgentHostSessionResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ForkAgentHostSessionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ForkAgentHostSessionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ForkAgentHostSessionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ForkAgentHostSessionResponse, a, b2);
    }
    static $() {
        return [
            "ForkAgentHostSessionResponse|1 session_id 9"
        ];
    }
};
ListAgentHostSessionsRequest = class _ListAgentHostSessionsRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.workspacePathsFilter = [];
        this.matchAnyWorkspaceRoot = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentHostSessionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentHostSessionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentHostSessionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentHostSessionsRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentHostSessionsRequest|1 include_children 8?|2 parent_session_id 9?|3 limit 13?|4 workspace_paths_filter 9*|5 match_any_workspace_root 8|6 owner_client_instance_id 9?|7 include_owner_unrooted_sessions 8?"
        ];
    }
};
ListAgentHostSessionsResponse = class _ListAgentHostSessionsResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentHostSessionsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentHostSessionsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentHostSessionsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentHostSessionsResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentHostSessionsResponse|1 sessions #0*",
            AgentHostSession
        ];
    }
};
WatchAgentHostSessionsRequest = class _WatchAgentHostSessionsRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.workspacePathsFilter = [];
        this.matchAnyWorkspaceRoot = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionsRequest, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionsRequest|1 workspace_paths_filter 9*|2 match_any_workspace_root 8|3 owner_client_instance_id 9?|4 include_owner_unrooted_sessions 8?"
        ];
    }
};
HasAgentHostSessionRequest = class _HasAgentHostSessionRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _HasAgentHostSessionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _HasAgentHostSessionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _HasAgentHostSessionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_HasAgentHostSessionRequest, a, b2);
    }
    static $() {
        return [
            "HasAgentHostSessionRequest|1 session_id 9"
        ];
    }
};
HasAgentHostSessionResponse = class _HasAgentHostSessionResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.exists = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _HasAgentHostSessionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _HasAgentHostSessionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _HasAgentHostSessionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_HasAgentHostSessionResponse, a, b2);
    }
    static $() {
        return [
            "HasAgentHostSessionResponse|1 exists 8"
        ];
    }
};
SessionParent = class _SessionParent extends __protoMessage3192 {
    constructor(data){
        super();
        this.parentSessionId = "";
        this.parentToolCallId = "";
        this.rootSessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SessionParent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SessionParent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SessionParent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SessionParent, a, b2);
    }
    static $() {
        return [
            "SessionParent|1 parent_session_id 9|2 parent_tool_call_id 9|3 root_session_id 9"
        ];
    }
};
AgentHostSession = class _AgentHostSession extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.status = AgentHostSessionStatus.UNSPECIFIED;
        this.lastEventId = protoInt64.zero;
        this.queuedTurnIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSession().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSession().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSession().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSession, a, b2);
    }
    static $() {
        return [
            "AgentHostSession|1 session_id 9|2 status #0|3 last_event_id 4|4 forked_from_session_id 9?|5 parent #1?|6 title 9?|7 updated_at #2?|8 model_id 9?|11 running_turn_id 9?|12 queued_turn_ids 9*|13 workspace #3?",
            AgentHostSessionStatus,
            SessionParent,
            Timestamp,
            AgentHostWorkspace
        ];
    }
};
WatchAgentHostSessionsEvent = class _WatchAgentHostSessionsEvent extends __protoMessage3192 {
    constructor(data){
        super();
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionsEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionsEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionsEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionsEvent, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionsEvent|1 snapshot #0 event|2 added #1 event|3 updated #2 event|4 deleted #3 event|5 keepalive 8?",
            AgentHostSessionsSnapshot,
            AgentHostSessionAdded,
            AgentHostSessionUpdated,
            AgentHostSessionDeleted
        ];
    }
};
AgentHostSessionsSnapshot = class _AgentHostSessionsSnapshot extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionsSnapshot().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionsSnapshot().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionsSnapshot().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionsSnapshot, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionsSnapshot|1 sessions #0*",
            AgentHostSession
        ];
    }
};
AgentHostSessionAdded = class _AgentHostSessionAdded extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionAdded().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionAdded().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionAdded().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionAdded, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionAdded|1 session #0",
            AgentHostSession
        ];
    }
};
AgentHostSessionUpdated = class _AgentHostSessionUpdated extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionUpdated().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionUpdated().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionUpdated().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionUpdated, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionUpdated|1 session #0",
            AgentHostSession
        ];
    }
};
AgentHostSessionDeleted = class _AgentHostSessionDeleted extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionDeleted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionDeleted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionDeleted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionDeleted, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionDeleted|1 session_id 9"
        ];
    }
};
ListAgentHostWorkspacesRequest = class _ListAgentHostWorkspacesRequest extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentHostWorkspacesRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentHostWorkspacesRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentHostWorkspacesRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentHostWorkspacesRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentHostWorkspacesRequest"
        ];
    }
};
ListAgentHostWorkspacesResponse = class _ListAgentHostWorkspacesResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.workspaces = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentHostWorkspacesResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentHostWorkspacesResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentHostWorkspacesResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentHostWorkspacesResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentHostWorkspacesResponse|1 workspaces #0*",
            AgentHostWorkspace
        ];
    }
};
AgentHostWorkspace = class _AgentHostWorkspace extends __protoMessage3192 {
    constructor(data){
        super();
        this.workspacePaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostWorkspace().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostWorkspace().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostWorkspace().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostWorkspace, a, b2);
    }
    static $() {
        return [
            "AgentHostWorkspace|1 workspace_paths 9*|2 worktree_main_path 9?|3 display_path 9?"
        ];
    }
};
ListAgentHostSkillsRequest = class _ListAgentHostSkillsRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.workspacePaths = [];
        this.refresh = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentHostSkillsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentHostSkillsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentHostSkillsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentHostSkillsRequest, a, b2);
    }
    static $() {
        return [
            "ListAgentHostSkillsRequest|1 session_id 9|2 workspace_paths 9*|3 refresh 8"
        ];
    }
};
ListAgentHostSkillsResponse = class _ListAgentHostSkillsResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.skills = [];
        this.scanErrors = [];
        this.workspacePaths = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListAgentHostSkillsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListAgentHostSkillsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListAgentHostSkillsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListAgentHostSkillsResponse, a, b2);
    }
    static $() {
        return [
            "ListAgentHostSkillsResponse|1 skills #0*|2 scan_errors #1*|3 workspace_paths 9*",
            AgentHostSkill,
            AgentHostSkillScanError
        ];
    }
};
AgentHostSkill = class _AgentHostSkill extends __protoMessage3192 {
    constructor(data){
        super();
        this.qualifiedName = "";
        this.isDefault = false;
        this.source = AgentHostSkillSource.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSkill().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSkill().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSkill().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSkill, a, b2);
    }
    static $() {
        return [
            "AgentHostSkill|1 skill #0|2 qualified_name 9|3 is_default 8|4 source #1",
            AgentSkillMetadata,
            AgentHostSkillSource
        ];
    }
};
AgentHostSkillScanError = class _AgentHostSkillScanError extends __protoMessage3192 {
    constructor(data){
        super();
        this.path = "";
        this.message = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSkillScanError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSkillScanError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSkillScanError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSkillScanError, a, b2);
    }
    static $() {
        return [
            "AgentHostSkillScanError|1 path 9|2 message 9"
        ];
    }
};
SendAgentHostMessageRequest = class _SendAgentHostMessageRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendAgentHostMessageRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendAgentHostMessageRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendAgentHostMessageRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendAgentHostMessageRequest, a, b2);
    }
    static $() {
        return [
            "SendAgentHostMessageRequest|1 session_id 9|2 text 9|3 model_id 9?|4 model_details #0?|5 turn_options #1?|6 requested_model #2?|7 message_id 9?",
            ModelDetails2,
            AgentHostTurnOptions,
            RequestedModel
        ];
    }
};
SendAgentHostActionRequest = class _SendAgentHostActionRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendAgentHostActionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendAgentHostActionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendAgentHostActionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendAgentHostActionRequest, a, b2);
    }
    static $() {
        return [
            "SendAgentHostActionRequest|1 session_id 9|2 action #0|3 model_id 9?|4 model_details #1?|5 turn_options #2?|6 requested_model #3?|7 base_history #4?|8 request_context_decoration #5?|9 delivery #6?|10 replace_queued_turn_id 9?",
            ConversationAction,
            ModelDetails2,
            AgentHostTurnOptions,
            RequestedModel,
            ConversationStateStructure,
            RequestContextDecoration,
            AgentHostSendDelivery
        ];
    }
};
RequestContextDecoration = class _RequestContextDecoration extends __protoMessage3192 {
    constructor(data){
        super();
        this.disabledTeamRules = [];
        this.appendedRules = [];
        this.filteredBrowserMcpProviderIds = [];
        this.prefetchFileUris = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RequestContextDecoration().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RequestContextDecoration().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RequestContextDecoration().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RequestContextDecoration, a, b2);
    }
    static $() {
        return [
            "RequestContextDecoration|1 smart_mode_classifier_auto_mode_enabled 8?|2 disabled_team_rules 9*|3 admin_command_denylist #0?|4 commit_attribution_message 9?|5 pr_attribution_message 9?|6 mounted_agent_stores #1?|7 web_search_enabled 8?|8 web_fetch_enabled 8?|9 read_lints_enabled 8?|10 search_conversations_enabled 8?|11 appended_rules #2*|12 filtered_browser_mcp_provider_ids 9*|13 git_repo_branch_ancestry #3?|14 admin_permissions_auto_run #4?|15 user_permissions_auto_run #4?|16 project_permissions_auto_run #4?|17 hooks_config #5?|18 hooks_additional_context 9?|19 debug_mode_config #6?|20 recently_added_plugin #7?|21 prefetch_file_uris 9*|22 sandbox_enabled 8?",
            StringListOverlay,
            MountedAgentStoreListOverlay,
            CursorRule,
            GitRepoBranchAncestry,
            PermissionsAutoRunInstructions,
            HooksConfigInfo,
            DebugModeConfig,
            RecentlyAddedPlugin
        ];
    }
};
StringListOverlay = class _StringListOverlay extends __protoMessage3192 {
    constructor(data){
        super();
        this.values = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StringListOverlay().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StringListOverlay().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StringListOverlay().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StringListOverlay, a, b2);
    }
    static $() {
        return [
            "StringListOverlay|1 values 9*"
        ];
    }
};
MountedAgentStoreListOverlay = class _MountedAgentStoreListOverlay extends __protoMessage3192 {
    constructor(data){
        super();
        this.values = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MountedAgentStoreListOverlay().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MountedAgentStoreListOverlay().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MountedAgentStoreListOverlay().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MountedAgentStoreListOverlay, a, b2);
    }
    static $() {
        return [
            "MountedAgentStoreListOverlay|1 values #0*",
            MountedAgentStore
        ];
    }
};
GitRepoBranchAncestry = class _GitRepoBranchAncestry extends __protoMessage3192 {
    constructor(data){
        super();
        this.repoPath = "";
        this.currentBranch = "";
        this.isAncestor = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GitRepoBranchAncestry().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GitRepoBranchAncestry().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GitRepoBranchAncestry().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GitRepoBranchAncestry, a, b2);
    }
    static $() {
        return [
            "GitRepoBranchAncestry|1 repo_path 9|2 current_branch 9|3 is_ancestor 8"
        ];
    }
};
SendAgentHostMessageResponse = class _SendAgentHostMessageResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendAgentHostMessageResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendAgentHostMessageResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendAgentHostMessageResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendAgentHostMessageResponse, a, b2);
    }
    static $() {
        return [
            "SendAgentHostMessageResponse|1 turn_id 9|2 delivered_as #0?",
            AgentHostSendDelivery
        ];
    }
};
SendAgentHostActionResponse = class _SendAgentHostActionResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SendAgentHostActionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SendAgentHostActionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SendAgentHostActionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SendAgentHostActionResponse, a, b2);
    }
    static $() {
        return [
            "SendAgentHostActionResponse|1 turn_id 9|2 delivered_as #0?",
            AgentHostSendDelivery
        ];
    }
};
DeleteAgentHostSessionRequest = class _DeleteAgentHostSessionRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteAgentHostSessionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteAgentHostSessionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteAgentHostSessionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteAgentHostSessionRequest, a, b2);
    }
    static $() {
        return [
            "DeleteAgentHostSessionRequest|1 session_id 9"
        ];
    }
};
DeleteAgentHostSessionResponse = class _DeleteAgentHostSessionResponse extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _DeleteAgentHostSessionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _DeleteAgentHostSessionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _DeleteAgentHostSessionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_DeleteAgentHostSessionResponse, a, b2);
    }
    static $() {
        return [
            "DeleteAgentHostSessionResponse"
        ];
    }
};
InterruptAgentHostTurnRequest = class _InterruptAgentHostTurnRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.turnId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InterruptAgentHostTurnRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InterruptAgentHostTurnRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InterruptAgentHostTurnRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InterruptAgentHostTurnRequest, a, b2);
    }
    static $() {
        return [
            "InterruptAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 reason 9?|4 session_tree 8?|5 initiated_by #0?",
            AgentHostTurnInterruptInitiator
        ];
    }
};
InterruptAgentHostTurnResponse = class _InterruptAgentHostTurnResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.interrupted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InterruptAgentHostTurnResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InterruptAgentHostTurnResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InterruptAgentHostTurnResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InterruptAgentHostTurnResponse, a, b2);
    }
    static $() {
        return [
            "InterruptAgentHostTurnResponse|1 interrupted 8"
        ];
    }
};
CancelQueuedAgentHostTurnRequest = class _CancelQueuedAgentHostTurnRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.turnId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CancelQueuedAgentHostTurnRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CancelQueuedAgentHostTurnRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CancelQueuedAgentHostTurnRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CancelQueuedAgentHostTurnRequest, a, b2);
    }
    static $() {
        return [
            "CancelQueuedAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 reason 9?|4 initiated_by #0?",
            AgentHostTurnInterruptInitiator
        ];
    }
};
CancelQueuedAgentHostTurnResponse = class _CancelQueuedAgentHostTurnResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.cancelled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CancelQueuedAgentHostTurnResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CancelQueuedAgentHostTurnResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CancelQueuedAgentHostTurnResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CancelQueuedAgentHostTurnResponse, a, b2);
    }
    static $() {
        return [
            "CancelQueuedAgentHostTurnResponse|1 cancelled 8"
        ];
    }
};
ReorderQueuedAgentHostTurnsRequest = class _ReorderQueuedAgentHostTurnsRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.turnIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReorderQueuedAgentHostTurnsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReorderQueuedAgentHostTurnsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReorderQueuedAgentHostTurnsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReorderQueuedAgentHostTurnsRequest, a, b2);
    }
    static $() {
        return [
            "ReorderQueuedAgentHostTurnsRequest|1 session_id 9|2 turn_ids 9*"
        ];
    }
};
ReorderQueuedAgentHostTurnsResponse = class _ReorderQueuedAgentHostTurnsResponse extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReorderQueuedAgentHostTurnsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReorderQueuedAgentHostTurnsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReorderQueuedAgentHostTurnsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReorderQueuedAgentHostTurnsResponse, a, b2);
    }
    static $() {
        return [
            "ReorderQueuedAgentHostTurnsResponse"
        ];
    }
};
EditQueuedAgentHostTurnRequest = class _EditQueuedAgentHostTurnRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.turnId = "";
        this.edit = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EditQueuedAgentHostTurnRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EditQueuedAgentHostTurnRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EditQueuedAgentHostTurnRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EditQueuedAgentHostTurnRequest, a, b2);
    }
    static $() {
        return [
            "EditQueuedAgentHostTurnRequest|1 session_id 9|2 turn_id 9|3 user_message #0 edit|4 shell_command #1 edit",
            QueuedAgentHostUserMessageEdit,
            QueuedAgentHostShellCommandEdit
        ];
    }
};
QueuedAgentHostUserMessageEdit = class _QueuedAgentHostUserMessageEdit extends __protoMessage3192 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _QueuedAgentHostUserMessageEdit().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _QueuedAgentHostUserMessageEdit().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _QueuedAgentHostUserMessageEdit().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_QueuedAgentHostUserMessageEdit, a, b2);
    }
    static $() {
        return [
            "QueuedAgentHostUserMessageEdit|1 text 9|2 images #0?",
            QueuedAgentHostImages
        ];
    }
};
QueuedAgentHostImages = class _QueuedAgentHostImages extends __protoMessage3192 {
    constructor(data){
        super();
        this.images = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _QueuedAgentHostImages().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _QueuedAgentHostImages().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _QueuedAgentHostImages().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_QueuedAgentHostImages, a, b2);
    }
    static $() {
        return [
            "QueuedAgentHostImages|1 images #0*",
            SelectedImage
        ];
    }
};
QueuedAgentHostShellCommandEdit = class _QueuedAgentHostShellCommandEdit extends __protoMessage3192 {
    constructor(data){
        super();
        this.command = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _QueuedAgentHostShellCommandEdit().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _QueuedAgentHostShellCommandEdit().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _QueuedAgentHostShellCommandEdit().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_QueuedAgentHostShellCommandEdit, a, b2);
    }
    static $() {
        return [
            "QueuedAgentHostShellCommandEdit|1 command 9"
        ];
    }
};
EditQueuedAgentHostTurnResponse = class _EditQueuedAgentHostTurnResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.edited = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EditQueuedAgentHostTurnResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EditQueuedAgentHostTurnResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EditQueuedAgentHostTurnResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EditQueuedAgentHostTurnResponse, a, b2);
    }
    static $() {
        return [
            "EditQueuedAgentHostTurnResponse|1 edited 8"
        ];
    }
};
AgentHostApprovalWriteDetails = class _AgentHostApprovalWriteDetails extends __protoMessage3192 {
    constructor(data){
        super();
        this.path = "";
        this.reason = "";
        this.isNewFile = false;
        this.diffString = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalWriteDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalWriteDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalWriteDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalWriteDetails, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalWriteDetails|1 path 9|2 reason 9|3 is_new_file 8|4 diff_string 9|5 before 9?|6 after 9?|7 block_reason #0?",
            AgentHostApprovalBlockReason
        ];
    }
};
AgentHostApprovalReadDetails = class _AgentHostApprovalReadDetails extends __protoMessage3192 {
    constructor(data){
        super();
        this.path = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalReadDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalReadDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalReadDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalReadDetails, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalReadDetails|1 path 9|2 reason 9?"
        ];
    }
};
AgentHostApprovalShellDetails = class _AgentHostApprovalShellDetails extends __protoMessage3192 {
    constructor(data){
        super();
        this.command = "";
        this.workingDirectory = "";
        this.timeout = 0;
        this.notAllowedCommands = [];
        this.suggestedAllowlistEntries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalShellDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalShellDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalShellDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalShellDetails, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalShellDetails|1 command 9|2 working_directory 9|3 timeout 13|4 reason 9?|5 hook_source #0?|6 is_sandbox_available 8?|7 is_sandbox_enabled 8?|8 can_allowlist 8?|9 not_allowed_commands 9*|10 suggested_allowlist_entries 9*|11 smart_mode_approval_reason 9?|12 smart_mode_approval_request_id 9?",
            AgentHostApprovalHookSource
        ];
    }
};
AgentHostApprovalDeleteDetails = class _AgentHostApprovalDeleteDetails extends __protoMessage3192 {
    constructor(data){
        super();
        this.path = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalDeleteDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalDeleteDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalDeleteDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalDeleteDetails, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalDeleteDetails|1 path 9"
        ];
    }
};
AgentHostApprovalMcpDetails = class _AgentHostApprovalMcpDetails extends __protoMessage3192 {
    constructor(data){
        super();
        this.name = "";
        this.toolName = "";
        this.providerIdentifier = "";
        this.args = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalMcpDetails().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalMcpDetails().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalMcpDetails().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalMcpDetails, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalMcpDetails|1 name 9|2 tool_name 9|3 provider_identifier 9|4 args 9,#0|5 source 9?|6 reason 9?|7 hook_source #1?|8 can_allowlist 8?|9 smart_mode_approval_reason 9?|10 smart_mode_approval_request_id 9?",
            Value,
            AgentHostApprovalHookSource
        ];
    }
};
AgentHostApprovalOperation = class _AgentHostApprovalOperation extends __protoMessage3192 {
    constructor(data){
        super();
        this.type = AgentHostApprovalOperationType.UNSPECIFIED;
        this.details = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalOperation().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalOperation().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalOperation().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalOperation, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalOperation|1 type #0|2 write #1 details|3 read #2 details|4 shell #3 details|5 delete #4 details|6 mcp #5 details",
            AgentHostApprovalOperationType,
            AgentHostApprovalWriteDetails,
            AgentHostApprovalReadDetails,
            AgentHostApprovalShellDetails,
            AgentHostApprovalDeleteDetails,
            AgentHostApprovalMcpDetails
        ];
    }
};
AgentHostApprovalRequest = class _AgentHostApprovalRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.toolCallId = "";
        this.offeredAllowlistEntries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalRequest|1 tool_call_id 9|2 operation #0|3 offered_allowlist_entries 9*",
            AgentHostApprovalOperation
        ];
    }
};
AgentHostApprovalResult = class _AgentHostApprovalResult extends __protoMessage3192 {
    constructor(data){
        super();
        this.approved = false;
        this.allowlistEntries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostApprovalResult().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostApprovalResult().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostApprovalResult().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostApprovalResult, a, b2);
    }
    static $() {
        return [
            "AgentHostApprovalResult|1 approved 8|2 reason 9?|3 allowlist_entries 9*"
        ];
    }
};
McpElicitationRequest = class _McpElicitationRequest extends __protoMessage3192 {
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
McpElicitationResponse = class _McpElicitationResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.action = McpElicitationResponse_Action.UNSPECIFIED;
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
            McpElicitationResponse_Action,
            Struct
        ];
    }
};
McpElicitationResponse_Action = enumType2(proto3, __protoPackage201, "McpElicitationResponse.Action", [
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
AgentHostMcpElicitationRequest = class _AgentHostMcpElicitationRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.serverName = "";
        this.toolName = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostMcpElicitationRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostMcpElicitationRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostMcpElicitationRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostMcpElicitationRequest, a, b2);
    }
    static $() {
        return [
            "AgentHostMcpElicitationRequest|1 server_name 9|2 tool_name 9|3 tool_call_id 9?|4 elicitation #0",
            McpElicitationRequest
        ];
    }
};
RespondToAgentHostInteractionRequest = class _RespondToAgentHostInteractionRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.interactionId = "";
        this.answer = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RespondToAgentHostInteractionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RespondToAgentHostInteractionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RespondToAgentHostInteractionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RespondToAgentHostInteractionRequest, a, b2);
    }
    static $() {
        return [
            "RespondToAgentHostInteractionRequest|1 session_id 9|2 interaction_id 9|3 interaction_response #0 answer|4 exec_approval #1 answer|5 mcp_elicitation #2 answer",
            InteractionResponse,
            AgentHostApprovalResult,
            McpElicitationResponse
        ];
    }
};
RespondToAgentHostInteractionResponse = class _RespondToAgentHostInteractionResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.status = AgentHostInteractionResponseStatus.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RespondToAgentHostInteractionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RespondToAgentHostInteractionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RespondToAgentHostInteractionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RespondToAgentHostInteractionResponse, a, b2);
    }
    static $() {
        return [
            "RespondToAgentHostInteractionResponse|1 status #0",
            AgentHostInteractionResponseStatus
        ];
    }
};
AgentHostPendingInteraction = class _AgentHostPendingInteraction extends __protoMessage3192 {
    constructor(data){
        super();
        this.interactionId = "";
        this.turnId = "";
        this.question = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostPendingInteraction().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostPendingInteraction().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostPendingInteraction().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostPendingInteraction, a, b2);
    }
    static $() {
        return [
            "AgentHostPendingInteraction|1 interaction_id 9|2 turn_id 9|3 interaction_query #0 question|4 exec_approval #1 question|5 mcp_elicitation #2 question",
            InteractionQuery,
            AgentHostApprovalRequest,
            AgentHostMcpElicitationRequest
        ];
    }
};
WatchAgentHostSessionInteractionsRequest = class _WatchAgentHostSessionInteractionsRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionInteractionsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionInteractionsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionInteractionsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionInteractionsRequest, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionInteractionsRequest|1 session_id 9"
        ];
    }
};
WatchAgentHostSessionInteractionsEvent = class _WatchAgentHostSessionInteractionsEvent extends __protoMessage3192 {
    constructor(data){
        super();
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionInteractionsEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionInteractionsEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionInteractionsEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionInteractionsEvent, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionInteractionsEvent|1 snapshot #0 event|2 state #1 event",
            AgentHostSessionInteractionsSnapshot,
            AgentHostSessionInteractionsState
        ];
    }
};
AgentHostSessionInteractionsSnapshot = class _AgentHostSessionInteractionsSnapshot extends __protoMessage3192 {
    constructor(data){
        super();
        this.interactions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionInteractionsSnapshot().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionInteractionsSnapshot().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionInteractionsSnapshot().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionInteractionsSnapshot, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionInteractionsSnapshot|1 interactions #0*",
            AgentHostPendingInteraction
        ];
    }
};
AgentHostSessionInteractionsState = class _AgentHostSessionInteractionsState extends __protoMessage3192 {
    constructor(data){
        super();
        this.interactions = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionInteractionsState().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionInteractionsState().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionInteractionsState().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionInteractionsState, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionInteractionsState|1 interactions #0*",
            AgentHostPendingInteraction
        ];
    }
};
AgentHostBackgroundWork = class _AgentHostBackgroundWork extends __protoMessage3192 {
    constructor(data){
        super();
        this.id = "";
        this.kind = AgentHostBackgroundWorkKind.UNSPECIFIED;
        this.state = AgentHostBackgroundWorkState.UNSPECIFIED;
        this.hasAbort = false;
        this.metadata = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostBackgroundWork().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostBackgroundWork().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostBackgroundWork().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostBackgroundWork, a, b2);
    }
    static $() {
        return [
            "AgentHostBackgroundWork|1 id 9|2 kind #0|3 state #1|4 owner_id 9?|5 has_abort 8|6 metadata 9,9",
            AgentHostBackgroundWorkKind,
            AgentHostBackgroundWorkState
        ];
    }
};
WatchAgentHostSessionBackgroundWorkRequest = class _WatchAgentHostSessionBackgroundWorkRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionBackgroundWorkRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionBackgroundWorkRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionBackgroundWorkRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionBackgroundWorkRequest, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionBackgroundWorkRequest|1 session_id 9|2 kind #0?|3 state #1?|4 owner_id 9?",
            AgentHostBackgroundWorkKind,
            AgentHostBackgroundWorkState
        ];
    }
};
WatchAgentHostSessionBackgroundWorkEvent = class _WatchAgentHostSessionBackgroundWorkEvent extends __protoMessage3192 {
    constructor(data){
        super();
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionBackgroundWorkEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionBackgroundWorkEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionBackgroundWorkEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionBackgroundWorkEvent, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionBackgroundWorkEvent|1 snapshot #0 event|2 state #1 event",
            AgentHostSessionBackgroundWorkSnapshot,
            AgentHostSessionBackgroundWorkState
        ];
    }
};
WatchAgentHostSessionTurnLifecycleRequest = class _WatchAgentHostSessionTurnLifecycleRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionTurnLifecycleRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionTurnLifecycleRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionTurnLifecycleRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionTurnLifecycleRequest, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionTurnLifecycleRequest|1 session_id 9"
        ];
    }
};
WatchAgentHostSessionTurnLifecycleEvent = class _WatchAgentHostSessionTurnLifecycleEvent extends __protoMessage3192 {
    constructor(data){
        super();
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionTurnLifecycleEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionTurnLifecycleEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionTurnLifecycleEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionTurnLifecycleEvent, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionTurnLifecycleEvent|1 ready #0 event|2 lifecycle #1 event",
            AgentHostTurnLifecycleWatchReady,
            AgentHostTurnLifecycle
        ];
    }
};
AgentHostTurnLifecycleWatchReady = class _AgentHostTurnLifecycleWatchReady extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnLifecycleWatchReady().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnLifecycleWatchReady().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnLifecycleWatchReady().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnLifecycleWatchReady, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnLifecycleWatchReady"
        ];
    }
};
AgentHostSessionBackgroundWorkSnapshot = class _AgentHostSessionBackgroundWorkSnapshot extends __protoMessage3192 {
    constructor(data){
        super();
        this.work = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionBackgroundWorkSnapshot().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionBackgroundWorkSnapshot().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionBackgroundWorkSnapshot().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionBackgroundWorkSnapshot, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionBackgroundWorkSnapshot|1 work #0*",
            AgentHostBackgroundWork
        ];
    }
};
AgentHostSessionBackgroundWorkState = class _AgentHostSessionBackgroundWorkState extends __protoMessage3192 {
    constructor(data){
        super();
        this.work = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionBackgroundWorkState().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionBackgroundWorkState().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionBackgroundWorkState().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionBackgroundWorkState, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionBackgroundWorkState|1 work #0*",
            AgentHostBackgroundWork
        ];
    }
};
AbortAgentHostBackgroundWorkRequest = class _AbortAgentHostBackgroundWorkRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.workId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AbortAgentHostBackgroundWorkRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AbortAgentHostBackgroundWorkRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AbortAgentHostBackgroundWorkRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AbortAgentHostBackgroundWorkRequest, a, b2);
    }
    static $() {
        return [
            "AbortAgentHostBackgroundWorkRequest|1 session_id 9|2 work_id 9"
        ];
    }
};
AbortAgentHostBackgroundWorkResponse = class _AbortAgentHostBackgroundWorkResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.aborted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AbortAgentHostBackgroundWorkResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AbortAgentHostBackgroundWorkResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AbortAgentHostBackgroundWorkResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AbortAgentHostBackgroundWorkResponse, a, b2);
    }
    static $() {
        return [
            "AbortAgentHostBackgroundWorkResponse|1 aborted 8"
        ];
    }
};
AbortAllAgentHostBackgroundWorkRequest = class _AbortAllAgentHostBackgroundWorkRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AbortAllAgentHostBackgroundWorkRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AbortAllAgentHostBackgroundWorkRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AbortAllAgentHostBackgroundWorkRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AbortAllAgentHostBackgroundWorkRequest, a, b2);
    }
    static $() {
        return [
            "AbortAllAgentHostBackgroundWorkRequest|1 session_id 9|2 kind #0?|3 state #1?|4 owner_id 9?",
            AgentHostBackgroundWorkKind,
            AgentHostBackgroundWorkState
        ];
    }
};
AbortAllAgentHostBackgroundWorkResponse = class _AbortAllAgentHostBackgroundWorkResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.abortedCount = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AbortAllAgentHostBackgroundWorkResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AbortAllAgentHostBackgroundWorkResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AbortAllAgentHostBackgroundWorkResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AbortAllAgentHostBackgroundWorkResponse, a, b2);
    }
    static $() {
        return [
            "AbortAllAgentHostBackgroundWorkResponse|1 aborted_count 13"
        ];
    }
};
WatchAgentHostSessionShellOutputRequest = class _WatchAgentHostSessionShellOutputRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.shellId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionShellOutputRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionShellOutputRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionShellOutputRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionShellOutputRequest, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionShellOutputRequest|1 session_id 9|2 shell_id 9|3 include_snapshot 8?|4 from_output_offset 4?"
        ];
    }
};
WatchAgentHostSessionShellOutputEvent = class _WatchAgentHostSessionShellOutputEvent extends __protoMessage3192 {
    constructor(data){
        super();
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WatchAgentHostSessionShellOutputEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WatchAgentHostSessionShellOutputEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WatchAgentHostSessionShellOutputEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WatchAgentHostSessionShellOutputEvent, a, b2);
    }
    static $() {
        return [
            "WatchAgentHostSessionShellOutputEvent|1 snapshot #0 event|2 output #1 event|3 lifecycle #2 event",
            AgentHostShellOutputSnapshot,
            AgentHostShellOutputChunk,
            AgentHostShellLifecycle
        ];
    }
};
AgentHostShellOutputSnapshot = class _AgentHostShellOutputSnapshot extends __protoMessage3192 {
    constructor(data){
        super();
        this.shellId = "";
        this.command = "";
        this.cwd = "";
        this.state = AgentHostShellLifecycleState.UNSPECIFIED;
        this.bufferedOutput = new Uint8Array(0);
        this.nextOutputOffset = protoInt64.zero;
        this.adopted = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostShellOutputSnapshot().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostShellOutputSnapshot().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostShellOutputSnapshot().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostShellOutputSnapshot, a, b2);
    }
    static $() {
        return [
            "AgentHostShellOutputSnapshot|1 shell_id 9|2 command 9|3 cwd 9|4 state #0|5 buffered_output 12|6 next_output_offset 4|7 tool_call_id 9?|8 title 9?|9 adopted 8",
            AgentHostShellLifecycleState
        ];
    }
};
AgentHostShellOutputChunk = class _AgentHostShellOutputChunk extends __protoMessage3192 {
    constructor(data){
        super();
        this.shellId = "";
        this.outputOffset = protoInt64.zero;
        this.stream = {
            case: void 0
        };
        this.isBackpressured = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostShellOutputChunk().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostShellOutputChunk().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostShellOutputChunk().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostShellOutputChunk, a, b2);
    }
    static $() {
        return [
            "AgentHostShellOutputChunk|1 shell_id 9|2 output_offset 4|3 stdout 12 stream|4 stderr 12 stream|5 is_backpressured 8"
        ];
    }
};
AgentHostShellLifecycle = class _AgentHostShellLifecycle extends __protoMessage3192 {
    constructor(data){
        super();
        this.shellId = "";
        this.state = AgentHostShellLifecycleState.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostShellLifecycle().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostShellLifecycle().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostShellLifecycle().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostShellLifecycle, a, b2);
    }
    static $() {
        return [
            "AgentHostShellLifecycle|1 shell_id 9|2 state #0|3 exit_code 5?|4 abort_reason 9?",
            AgentHostShellLifecycleState
        ];
    }
};
WriteAgentHostSessionShellInputRequest = class _WriteAgentHostSessionShellInputRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.shellId = "";
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WriteAgentHostSessionShellInputRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WriteAgentHostSessionShellInputRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WriteAgentHostSessionShellInputRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WriteAgentHostSessionShellInputRequest, a, b2);
    }
    static $() {
        return [
            "WriteAgentHostSessionShellInputRequest|1 session_id 9|2 shell_id 9|3 data 12"
        ];
    }
};
WriteAgentHostSessionShellInputResponse = class _WriteAgentHostSessionShellInputResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.bytesAccepted = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _WriteAgentHostSessionShellInputResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _WriteAgentHostSessionShellInputResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _WriteAgentHostSessionShellInputResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_WriteAgentHostSessionShellInputResponse, a, b2);
    }
    static $() {
        return [
            "WriteAgentHostSessionShellInputResponse|1 bytes_accepted 4"
        ];
    }
};
AttachAgentHostSessionRequest = class _AttachAgentHostSessionRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.clientInstanceId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AttachAgentHostSessionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AttachAgentHostSessionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AttachAgentHostSessionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AttachAgentHostSessionRequest, a, b2);
    }
    static $() {
        return [
            "AttachAgentHostSessionRequest|1 session_id 9|2 last_event_id 4?|3 background_task_completions_only 8?|4 client_instance_id 9"
        ];
    }
};
GetAgentHostSessionBlobsRequest = class _GetAgentHostSessionBlobsRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        this.blobIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAgentHostSessionBlobsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAgentHostSessionBlobsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAgentHostSessionBlobsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAgentHostSessionBlobsRequest, a, b2);
    }
    static $() {
        return [
            "GetAgentHostSessionBlobsRequest|1 session_id 9|2 blob_ids 12*|3 max_response_bytes 4?"
        ];
    }
};
AgentHostSessionBlob = class _AgentHostSessionBlob extends __protoMessage3192 {
    constructor(data){
        super();
        this.blobId = new Uint8Array(0);
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionBlob().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionBlob().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionBlob().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionBlob, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionBlob|1 blob_id 12|2 data 12"
        ];
    }
};
GetAgentHostSessionBlobsResponse = class _GetAgentHostSessionBlobsResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.blobs = [];
        this.missingBlobIds = [];
        this.oversizeBlobIds = [];
        this.remainingBlobIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAgentHostSessionBlobsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAgentHostSessionBlobsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAgentHostSessionBlobsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAgentHostSessionBlobsResponse, a, b2);
    }
    static $() {
        return [
            "GetAgentHostSessionBlobsResponse|1 blobs #0*|2 missing_blob_ids 12*|4 oversize_blob_ids 12*|3 remaining_blob_ids 12*",
            AgentHostSessionBlob
        ];
    }
};
ReadAgentHostFileRequest = class _ReadAgentHostFileRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.path = "";
        this.readOffset = protoInt64.zero;
        this.readLimit = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadAgentHostFileRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadAgentHostFileRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadAgentHostFileRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadAgentHostFileRequest, a, b2);
    }
    static $() {
        return [
            "ReadAgentHostFileRequest|1 path 9|2 read_offset 4|3 read_limit 4|4 cached_mtime_ms 3?"
        ];
    }
};
ReadAgentHostFileResponse = class _ReadAgentHostFileResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.totalBytes = protoInt64.zero;
        this.mtimeMs = protoInt64.zero;
        this.result = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ReadAgentHostFileResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ReadAgentHostFileResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ReadAgentHostFileResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ReadAgentHostFileResponse, a, b2);
    }
    static $() {
        return [
            "ReadAgentHostFileResponse|1 total_bytes 4|2 mtime_ms 3|3 chunk #0 result|4 not_modified #1 result|5 too_large #2 result",
            AgentHostFileChunk,
            AgentHostFileNotModified,
            AgentHostFileTooLarge
        ];
    }
};
AgentHostFileChunk = class _AgentHostFileChunk extends __protoMessage3192 {
    constructor(data){
        super();
        this.offset = protoInt64.zero;
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostFileChunk().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostFileChunk().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostFileChunk().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostFileChunk, a, b2);
    }
    static $() {
        return [
            "AgentHostFileChunk|1 offset 4|2 data 12"
        ];
    }
};
AgentHostFileNotModified = class _AgentHostFileNotModified extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostFileNotModified().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostFileNotModified().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostFileNotModified().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostFileNotModified, a, b2);
    }
    static $() {
        return [
            "AgentHostFileNotModified"
        ];
    }
};
AgentHostFileTooLarge = class _AgentHostFileTooLarge extends __protoMessage3192 {
    constructor(data){
        super();
        this.maxBytes = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostFileTooLarge().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostFileTooLarge().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostFileTooLarge().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostFileTooLarge, a, b2);
    }
    static $() {
        return [
            "AgentHostFileTooLarge|1 max_bytes 4"
        ];
    }
};
GetAgentHostDaemonInfoRequest = class _GetAgentHostDaemonInfoRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.expectedApiSchemaRevision = "";
        this.desiredLocalLoopEnabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAgentHostDaemonInfoRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAgentHostDaemonInfoRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAgentHostDaemonInfoRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAgentHostDaemonInfoRequest, a, b2);
    }
    static $() {
        return [
            "GetAgentHostDaemonInfoRequest|1 expected_api_schema_revision 9|2 desired_local_loop_enabled 8|3 allow_newer_schema 8?"
        ];
    }
};
GetAgentHostDaemonInfoResponse = class _GetAgentHostDaemonInfoResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.daemonVersion = "";
        this.apiSchemaRevision = "";
        this.localLoopEnabled = false;
        this.listenAddress = "";
        this.processPid = 0;
        this.runningSessionCount = 0;
        this.buildIdentity = "";
        this.capabilities = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetAgentHostDaemonInfoResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetAgentHostDaemonInfoResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetAgentHostDaemonInfoResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetAgentHostDaemonInfoResponse, a, b2);
    }
    static $() {
        return [
            "GetAgentHostDaemonInfoResponse|1 daemon_version 9|2 api_schema_revision 9|3 local_loop_enabled 8|4 listen_address 9|5 process_pid 13|6 running_session_count 13|7 build_identity 9|8 capabilities 9*"
        ];
    }
};
ShutdownAgentHostDaemonRequest = class _ShutdownAgentHostDaemonRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.reason = "";
        this.onlyIfIdle = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShutdownAgentHostDaemonRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShutdownAgentHostDaemonRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShutdownAgentHostDaemonRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShutdownAgentHostDaemonRequest, a, b2);
    }
    static $() {
        return [
            "ShutdownAgentHostDaemonRequest|1 reason 9|2 only_if_idle 8"
        ];
    }
};
ShutdownAgentHostDaemonResponse = class _ShutdownAgentHostDaemonResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.shutdownScheduled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ShutdownAgentHostDaemonResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ShutdownAgentHostDaemonResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ShutdownAgentHostDaemonResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ShutdownAgentHostDaemonResponse, a, b2);
    }
    static $() {
        return [
            "ShutdownAgentHostDaemonResponse|1 shutdown_scheduled 8"
        ];
    }
};
UpdateAgentHostDaemonAuthRequest = class _UpdateAgentHostDaemonAuthRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.accessToken = "";
        this.issuedAtMs = protoInt64.zero;
        this.clientInstanceId = "";
        this.signedOut = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateAgentHostDaemonAuthRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateAgentHostDaemonAuthRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateAgentHostDaemonAuthRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateAgentHostDaemonAuthRequest, a, b2);
    }
    static $() {
        return [
            "UpdateAgentHostDaemonAuthRequest|1 access_token 9|2 issued_at_ms 4|3 expires_at_ms 4?|4 client_instance_id 9|5 signed_out 8"
        ];
    }
};
UpdateAgentHostDaemonAuthResponse = class _UpdateAgentHostDaemonAuthResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.accepted = false;
        this.privacyMode = PrivacyMode.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateAgentHostDaemonAuthResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateAgentHostDaemonAuthResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateAgentHostDaemonAuthResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateAgentHostDaemonAuthResponse, a, b2);
    }
    static $() {
        return [
            "UpdateAgentHostDaemonAuthResponse|1 accepted 8|2 rejection_reason 9?|3 privacy_mode #0",
            PrivacyMode
        ];
    }
};
SetAgentHostSessionTitleRequest = class _SetAgentHostSessionTitleRequest extends __protoMessage3192 {
    constructor(data){
        super();
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetAgentHostSessionTitleRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetAgentHostSessionTitleRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetAgentHostSessionTitleRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetAgentHostSessionTitleRequest, a, b2);
    }
    static $() {
        return [
            "SetAgentHostSessionTitleRequest|1 session_id 9|2 title 9?"
        ];
    }
};
SetAgentHostSessionTitleResponse = class _SetAgentHostSessionTitleResponse extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SetAgentHostSessionTitleResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SetAgentHostSessionTitleResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SetAgentHostSessionTitleResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SetAgentHostSessionTitleResponse, a, b2);
    }
    static $() {
        return [
            "SetAgentHostSessionTitleResponse"
        ];
    }
};
AgentHostSessionEvent = class _AgentHostSessionEvent extends __protoMessage3192 {
    constructor(data){
        super();
        this.eventId = protoInt64.zero;
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSessionEvent().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSessionEvent().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSessionEvent().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSessionEvent, a, b2);
    }
    static $() {
        return [
            "AgentHostSessionEvent|1 event_id 4|14 keepalive 8?|2 interaction_update #0 event|3 conversation_state #1 event|4 turn_started #2 event|8 turn_awaiting_input #3 event|9 turn_settled #4 event|10 interaction_resolved #5 event|11 subagent_started #6 event|12 background_task_completed #7 event|13 turn_interactions_superseded #8 event",
            InteractionUpdate,
            ConversationStateStructure,
            AgentHostTurnStarted,
            AgentHostTurnAwaitingInput,
            AgentHostTurnSettled,
            AgentHostInteractionResolved,
            AgentHostSubagentStarted,
            AgentHostBackgroundTaskCompleted,
            AgentHostTurnInteractionsSuperseded
        ];
    }
};
AgentHostBackgroundTaskCompleted = class _AgentHostBackgroundTaskCompleted extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostBackgroundTaskCompleted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostBackgroundTaskCompleted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostBackgroundTaskCompleted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostBackgroundTaskCompleted, a, b2);
    }
    static $() {
        return [
            "AgentHostBackgroundTaskCompleted|1 completion #0",
            BackgroundTaskCompletion
        ];
    }
};
AgentHostTurnLifecycle = class _AgentHostTurnLifecycle extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        this.event = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnLifecycle().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnLifecycle().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnLifecycle().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnLifecycle, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnLifecycle|1 turn_id 9|2 network_phase_started #0 event|3 response_metadata #1 event|4 connection_state_changed #2 event|5 first_message #3 event|6 first_message_network #4 event|7 first_non_heartbeat_response #5 event|8 ttft_breakdown #6 event|9 finished #7 event|10 turn_runtime_selected #8 event",
            AgentHostNetworkPhaseStarted,
            AgentHostResponseMetadata,
            AgentHostConnectionStateChanged,
            AgentHostFirstMessage,
            AgentHostFirstMessageNetwork,
            AgentHostFirstNonHeartbeatResponse,
            AgentHostTtftBreakdown,
            AgentHostTurnLifecycleFinished,
            AgentHostTurnRuntimeSelected
        ];
    }
};
AgentHostTurnLifecycleFinished = class _AgentHostTurnLifecycleFinished extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnLifecycleFinished().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnLifecycleFinished().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnLifecycleFinished().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnLifecycleFinished, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnLifecycleFinished"
        ];
    }
};
AgentHostNetworkPhaseStarted = class _AgentHostNetworkPhaseStarted extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostNetworkPhaseStarted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostNetworkPhaseStarted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostNetworkPhaseStarted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostNetworkPhaseStarted, a, b2);
    }
    static $() {
        return [
            "AgentHostNetworkPhaseStarted"
        ];
    }
};
AgentHostTurnRuntimeSelected = class _AgentHostTurnRuntimeSelected extends __protoMessage3192 {
    constructor(data){
        super();
        this.runtime = "";
        this.reason = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnRuntimeSelected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnRuntimeSelected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnRuntimeSelected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnRuntimeSelected, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnRuntimeSelected|1 runtime 9|2 reason 9"
        ];
    }
};
AgentHostResponseMetadata = class _AgentHostResponseMetadata extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostResponseMetadata().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostResponseMetadata().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostResponseMetadata().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostResponseMetadata, a, b2);
    }
    static $() {
        return [
            "AgentHostResponseMetadata|1 server_region 9?|2 transport_mode 9?"
        ];
    }
};
AgentHostReconnectTrigger = class _AgentHostReconnectTrigger extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostReconnectTrigger().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostReconnectTrigger().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostReconnectTrigger().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostReconnectTrigger, a, b2);
    }
    static $() {
        return [
            "AgentHostReconnectTrigger|1 error_class 9?|2 connect_code 13?|3 connect_code_name 9?|4 error_code 13?|5 count_as_server_error 8?|6 count_as_transport_error 8?|7 stall_aborted 8?|8 originating_request_id 9?|9 attempt_request_id 9?|10 endpoint_url 9?|11 transport_failure_kind 9?|12 transport_mode 9?|13 loop 9?"
        ];
    }
};
AgentHostConnectionStateChanged = class _AgentHostConnectionStateChanged extends __protoMessage3192 {
    constructor(data){
        super();
        this.state = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostConnectionStateChanged().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostConnectionStateChanged().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostConnectionStateChanged().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostConnectionStateChanged, a, b2);
    }
    static $() {
        return [
            "AgentHostConnectionStateChanged|1 connected #0 state|2 reconnecting #1 state",
            AgentHostConnected,
            AgentHostReconnecting
        ];
    }
};
AgentHostConnected = class _AgentHostConnected extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostConnected().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostConnected().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostConnected().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostConnected, a, b2);
    }
    static $() {
        return [
            "AgentHostConnected"
        ];
    }
};
AgentHostReconnecting = class _AgentHostReconnecting extends __protoMessage3192 {
    constructor(data){
        super();
        this.attempt = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostReconnecting().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostReconnecting().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostReconnecting().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostReconnecting, a, b2);
    }
    static $() {
        return [
            "AgentHostReconnecting|1 attempt 13|2 trigger #0?",
            AgentHostReconnectTrigger
        ];
    }
};
AgentHostFirstMessage = class _AgentHostFirstMessage extends __protoMessage3192 {
    constructor(data){
        super();
        this.elapsedMs = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostFirstMessage().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostFirstMessage().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostFirstMessage().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostFirstMessage, a, b2);
    }
    static $() {
        return [
            "AgentHostFirstMessage|1 elapsed_ms 1"
        ];
    }
};
AgentHostFirstMessageNetwork = class _AgentHostFirstMessageNetwork extends __protoMessage3192 {
    constructor(data){
        super();
        this.elapsedMs = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostFirstMessageNetwork().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostFirstMessageNetwork().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostFirstMessageNetwork().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostFirstMessageNetwork, a, b2);
    }
    static $() {
        return [
            "AgentHostFirstMessageNetwork|1 elapsed_ms 1"
        ];
    }
};
AgentHostFirstNonHeartbeatResponse = class _AgentHostFirstNonHeartbeatResponse extends __protoMessage3192 {
    constructor(data){
        super();
        this.handshakeMs = 0;
        this.attempt = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostFirstNonHeartbeatResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostFirstNonHeartbeatResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostFirstNonHeartbeatResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostFirstNonHeartbeatResponse, a, b2);
    }
    static $() {
        return [
            "AgentHostFirstNonHeartbeatResponse|1 handshake_ms 1|2 attempt 13"
        ];
    }
};
AgentHostTtftBreakdown = class _AgentHostTtftBreakdown extends __protoMessage3192 {
    constructor(data){
        super();
        this.serverFirstTokenMs = 0;
        this.preStreamSetupMs = 0;
        this.waitForFirstEventMs = 0;
        this.slowPoolWaitMs = 0;
        this.attempt = 0;
        this.clientClock = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTtftBreakdown().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTtftBreakdown().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTtftBreakdown().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTtftBreakdown, a, b2);
    }
    static $() {
        return [
            "AgentHostTtftBreakdown|1 server_first_token_ms 1|2 pre_stream_setup_ms 1|3 wait_for_first_event_ms 1|4 provider_ttft_ms 1?|5 slow_pool_wait_ms 1|6 attempt 13|7 client_prep_ms 1?|8 client_clock 8"
        ];
    }
};
AgentHostSubagentStarted = class _AgentHostSubagentStarted extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        this.parentToolCallId = "";
        this.childSessionId = "";
        this.rootSessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostSubagentStarted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostSubagentStarted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostSubagentStarted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostSubagentStarted, a, b2);
    }
    static $() {
        return [
            "AgentHostSubagentStarted|1 turn_id 9|2 parent_tool_call_id 9|3 child_session_id 9|4 root_session_id 9"
        ];
    }
};
AgentHostTurnStarted = class _AgentHostTurnStarted extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnStarted().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnStarted().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnStarted().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnStarted, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnStarted|1 turn_id 9"
        ];
    }
};
AgentHostTurnInteractionsSuperseded = class _AgentHostTurnInteractionsSuperseded extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        this.continuation = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnInteractionsSuperseded().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnInteractionsSuperseded().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnInteractionsSuperseded().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnInteractionsSuperseded, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnInteractionsSuperseded|1 turn_id 9|2 replay_action_from_state #0 continuation|3 resume_from_checkpoint #0 continuation",
            ConversationStateStructure
        ];
    }
};
AgentHostTurnAwaitingInput = class _AgentHostTurnAwaitingInput extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        this.requestId = "";
        this.interactionId = "";
        this.question = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnAwaitingInput().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnAwaitingInput().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnAwaitingInput().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnAwaitingInput, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnAwaitingInput|1 turn_id 9|2 request_id 9|3 interaction_id 9|4 interaction_query #0 question|5 exec_approval #1 question|6 mcp_elicitation #2 question",
            InteractionQuery,
            AgentHostApprovalRequest,
            AgentHostMcpElicitationRequest
        ];
    }
};
AgentHostInteractionCancelled = class _AgentHostInteractionCancelled extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostInteractionCancelled().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostInteractionCancelled().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostInteractionCancelled().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostInteractionCancelled, a, b2);
    }
    static $() {
        return [
            "AgentHostInteractionCancelled|1 reason 9?"
        ];
    }
};
AgentHostInteractionFailed = class _AgentHostInteractionFailed extends __protoMessage3192 {
    constructor(data){
        super();
        this.error = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostInteractionFailed().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostInteractionFailed().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostInteractionFailed().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostInteractionFailed, a, b2);
    }
    static $() {
        return [
            "AgentHostInteractionFailed|1 error 9"
        ];
    }
};
AgentHostInteractionResolved = class _AgentHostInteractionResolved extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        this.interactionId = "";
        this.resolution = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostInteractionResolved().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostInteractionResolved().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostInteractionResolved().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostInteractionResolved, a, b2);
    }
    static $() {
        return [
            "AgentHostInteractionResolved|1 turn_id 9|2 interaction_id 9|3 responded #0 resolution|4 cancelled #1 resolution|5 failed #2 resolution|6 exec_approval #3 resolution|7 mcp_elicitation #4 resolution",
            InteractionResponse,
            AgentHostInteractionCancelled,
            AgentHostInteractionFailed,
            AgentHostApprovalResult,
            McpElicitationResponse
        ];
    }
};
AgentHostTurnSettled = class _AgentHostTurnSettled extends __protoMessage3192 {
    constructor(data){
        super();
        this.turnId = "";
        this.outcome = AgentHostTurnOutcome.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnSettled().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnSettled().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnSettled().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnSettled, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnSettled|1 turn_id 9|2 outcome #0|3 detail 9?|4 error #1?|5 interrupted_by #2?|6 stop_reason #3?",
            AgentHostTurnOutcome,
            AgentHostTurnError,
            AgentHostTurnInterruptInitiator,
            AgentHostTurnStopReason
        ];
    }
};
AgentHostTurnError = class _AgentHostTurnError extends __protoMessage3192 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnError().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnError().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnError().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnError, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnError|1 kind 9?|2 title 9?|3 detail 9?|4 is_retryable 8?|5 connect_code 13?|6 inference_request_error_type 9?|7 request_id 9?|8 error_details #0?|9 action 9?",
            ErrorDetails
        ];
    }
};
AgentHostTurnOptions = class _AgentHostTurnOptions extends __protoMessage3192 {
    constructor(data){
        super();
        this.selectedSubagentModels = [];
        this.subagentModelOverrides = [];
        this.requestHeaders = {};
        this.allowedTools = [];
        this.excludedTools = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _AgentHostTurnOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _AgentHostTurnOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _AgentHostTurnOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_AgentHostTurnOptions, a, b2);
    }
    static $() {
        return [
            "AgentHostTurnOptions|1 generation_uuid 9?|2 custom_system_prompt 9?|3 exclude_workspace_context 8?|4 enable_agent_retries 8?|5 fixed_retry_delay_ms 13?|6 endless_retries 8?|7 agent_session_id 9?|8 is_running_in_test 8?|9 stall_advisory_timeout_ms 13?|10 stall_fail_timeout_ms 13?|11 selected_subagent_models #0*|12 subagent_model_overrides #1*|13 request_context_blob_transport_mode 9?|14 request_context_blob_max_bytes 13?|15 request_context_dynamic_inline_max_bytes 13?|16 suggest_next_prompt 8?|17 blob_encryption_key 9?|18 client_supports_inline_images 8?|19 client_supports_preview_card 8?|20 client_supports_send_to_user 8?|22 client_supports_routed_model_update 8?|23 request_headers 9,9|24 system_prompt_spec #2?|25 max_steps 13?|26 allowed_tools 9*|27 excluded_tools 9*|28 can_create_cloud_subagents 8?|29 started_as_new_project 8?|30 first_project_onboarding 8?|31 harness 9?|32 subagent_smart_mode_auto_run 8?|33 local_loop_gate_enabled 8?",
            RequestedModel,
            SubagentModelOverride,
            SystemPromptSpec
        ];
    }
};

}
