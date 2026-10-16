import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { AbortAgentHostBackgroundWorkRequest, AbortAgentHostBackgroundWorkResponse, AbortAllAgentHostBackgroundWorkRequest, AbortAllAgentHostBackgroundWorkResponse, AgentHostSessionEvent, AttachAgentHostSessionRequest, CancelQueuedAgentHostTurnRequest, CancelQueuedAgentHostTurnResponse, CreateAgentHostSessionRequest, CreateAgentHostSessionResponse, DeleteAgentHostSessionRequest, DeleteAgentHostSessionResponse, EditQueuedAgentHostTurnRequest, EditQueuedAgentHostTurnResponse, ForkAgentHostSessionRequest, ForkAgentHostSessionResponse, GetAgentHostDaemonInfoRequest, GetAgentHostDaemonInfoResponse, GetAgentHostSessionBlobsRequest, GetAgentHostSessionBlobsResponse, HasAgentHostSessionRequest, HasAgentHostSessionResponse, InterruptAgentHostTurnRequest, InterruptAgentHostTurnResponse, ListAgentHostSessionsRequest, ListAgentHostSessionsResponse, ListAgentHostSkillsRequest, ListAgentHostSkillsResponse, ListAgentHostWorkspacesRequest, ListAgentHostWorkspacesResponse, ReadAgentHostFileRequest, ReadAgentHostFileResponse, ReorderQueuedAgentHostTurnsRequest, ReorderQueuedAgentHostTurnsResponse, RespondToAgentHostInteractionRequest, RespondToAgentHostInteractionResponse, SendAgentHostActionRequest, SendAgentHostActionResponse, SendAgentHostMessageRequest, SendAgentHostMessageResponse, SetAgentHostSessionTitleRequest, SetAgentHostSessionTitleResponse, ShutdownAgentHostDaemonRequest, ShutdownAgentHostDaemonResponse, UpdateAgentHostDaemonAuthRequest, UpdateAgentHostDaemonAuthResponse, WatchAgentHostSessionBackgroundWorkEvent, WatchAgentHostSessionBackgroundWorkRequest, WatchAgentHostSessionInteractionsEvent, WatchAgentHostSessionInteractionsRequest, WatchAgentHostSessionShellOutputEvent, WatchAgentHostSessionShellOutputRequest, WatchAgentHostSessionTurnLifecycleEvent, WatchAgentHostSessionTurnLifecycleRequest, WatchAgentHostSessionsEvent, WatchAgentHostSessionsRequest, WriteAgentHostSessionShellInputRequest, WriteAgentHostSessionShellInputResponse, init_agent_host_pb } from "./agent_host_pb.js";
import { AgentHostSurfaceChannelEvent, OpenAgentHostSurfaceChannelRequest, PushAgentHostSessionPermissionsRequest, PushAgentHostSessionPermissionsResponse, RespondAgentHostSurfaceCallbackRequest, RespondAgentHostSurfaceCallbackResponse, init_agent_host_surface_pb } from "./agent_host_surface_pb.js";
var AgentHostService;
export { AgentHostService };
var __wakaru_init_agent_host_connect_initialized = false;
export function init_agent_host_connect() {
if (__wakaru_init_agent_host_connect_initialized) return;
__wakaru_init_agent_host_connect_initialized = true;
"use strict";
init_agent_host_pb();
init_esm2();
init_agent_host_surface_pb();
AgentHostService = {
    typeName: "agent.v1.AgentHostService",
    methods: {
        createSession: {
            name: "CreateSession",
            I: CreateAgentHostSessionRequest,
            O: CreateAgentHostSessionResponse,
            kind: MethodKind.Unary
        },
        forkSession: {
            name: "ForkSession",
            I: ForkAgentHostSessionRequest,
            O: ForkAgentHostSessionResponse,
            kind: MethodKind.Unary
        },
        listSessions: {
            name: "ListSessions",
            I: ListAgentHostSessionsRequest,
            O: ListAgentHostSessionsResponse,
            kind: MethodKind.Unary
        },
        hasSession: {
            name: "HasSession",
            I: HasAgentHostSessionRequest,
            O: HasAgentHostSessionResponse,
            kind: MethodKind.Unary
        },
        watchSessions: {
            name: "WatchSessions",
            I: WatchAgentHostSessionsRequest,
            O: WatchAgentHostSessionsEvent,
            kind: MethodKind.ServerStreaming
        },
        listWorkspaces: {
            name: "ListWorkspaces",
            I: ListAgentHostWorkspacesRequest,
            O: ListAgentHostWorkspacesResponse,
            kind: MethodKind.Unary
        },
        listSkills: {
            name: "ListSkills",
            I: ListAgentHostSkillsRequest,
            O: ListAgentHostSkillsResponse,
            kind: MethodKind.Unary
        },
        sendMessage: {
            name: "SendMessage",
            I: SendAgentHostMessageRequest,
            O: SendAgentHostMessageResponse,
            kind: MethodKind.Unary
        },
        sendAction: {
            name: "SendAction",
            I: SendAgentHostActionRequest,
            O: SendAgentHostActionResponse,
            kind: MethodKind.Unary
        },
        deleteSession: {
            name: "DeleteSession",
            I: DeleteAgentHostSessionRequest,
            O: DeleteAgentHostSessionResponse,
            kind: MethodKind.Unary
        },
        interruptTurn: {
            name: "InterruptTurn",
            I: InterruptAgentHostTurnRequest,
            O: InterruptAgentHostTurnResponse,
            kind: MethodKind.Unary
        },
        cancelQueuedTurn: {
            name: "CancelQueuedTurn",
            I: CancelQueuedAgentHostTurnRequest,
            O: CancelQueuedAgentHostTurnResponse,
            kind: MethodKind.Unary
        },
        reorderQueuedTurns: {
            name: "ReorderQueuedTurns",
            I: ReorderQueuedAgentHostTurnsRequest,
            O: ReorderQueuedAgentHostTurnsResponse,
            kind: MethodKind.Unary
        },
        editQueuedTurn: {
            name: "EditQueuedTurn",
            I: EditQueuedAgentHostTurnRequest,
            O: EditQueuedAgentHostTurnResponse,
            kind: MethodKind.Unary
        },
        respondToInteraction: {
            name: "RespondToInteraction",
            I: RespondToAgentHostInteractionRequest,
            O: RespondToAgentHostInteractionResponse,
            kind: MethodKind.Unary
        },
        watchSessionInteractions: {
            name: "WatchSessionInteractions",
            I: WatchAgentHostSessionInteractionsRequest,
            O: WatchAgentHostSessionInteractionsEvent,
            kind: MethodKind.ServerStreaming
        },
        watchSessionBackgroundWork: {
            name: "WatchSessionBackgroundWork",
            I: WatchAgentHostSessionBackgroundWorkRequest,
            O: WatchAgentHostSessionBackgroundWorkEvent,
            kind: MethodKind.ServerStreaming
        },
        watchSessionTurnLifecycle: {
            name: "WatchSessionTurnLifecycle",
            I: WatchAgentHostSessionTurnLifecycleRequest,
            O: WatchAgentHostSessionTurnLifecycleEvent,
            kind: MethodKind.ServerStreaming
        },
        abortBackgroundWork: {
            name: "AbortBackgroundWork",
            I: AbortAgentHostBackgroundWorkRequest,
            O: AbortAgentHostBackgroundWorkResponse,
            kind: MethodKind.Unary
        },
        abortAllBackgroundWork: {
            name: "AbortAllBackgroundWork",
            I: AbortAllAgentHostBackgroundWorkRequest,
            O: AbortAllAgentHostBackgroundWorkResponse,
            kind: MethodKind.Unary
        },
        watchAgentHostSessionShellOutput: {
            name: "WatchAgentHostSessionShellOutput",
            I: WatchAgentHostSessionShellOutputRequest,
            O: WatchAgentHostSessionShellOutputEvent,
            kind: MethodKind.ServerStreaming
        },
        writeAgentHostSessionShellInput: {
            name: "WriteAgentHostSessionShellInput",
            I: WriteAgentHostSessionShellInputRequest,
            O: WriteAgentHostSessionShellInputResponse,
            kind: MethodKind.Unary
        },
        attachSession: {
            name: "AttachSession",
            I: AttachAgentHostSessionRequest,
            O: AgentHostSessionEvent,
            kind: MethodKind.ServerStreaming
        },
        getSessionBlobs: {
            name: "GetSessionBlobs",
            I: GetAgentHostSessionBlobsRequest,
            O: GetAgentHostSessionBlobsResponse,
            kind: MethodKind.Unary
        },
        readFile: {
            name: "ReadFile",
            I: ReadAgentHostFileRequest,
            O: ReadAgentHostFileResponse,
            kind: MethodKind.ServerStreaming
        },
        getDaemonInfo: {
            name: "GetDaemonInfo",
            I: GetAgentHostDaemonInfoRequest,
            O: GetAgentHostDaemonInfoResponse,
            kind: MethodKind.Unary
        },
        shutdownDaemon: {
            name: "ShutdownDaemon",
            I: ShutdownAgentHostDaemonRequest,
            O: ShutdownAgentHostDaemonResponse,
            kind: MethodKind.Unary
        },
        updateDaemonAuth: {
            name: "UpdateDaemonAuth",
            I: UpdateAgentHostDaemonAuthRequest,
            O: UpdateAgentHostDaemonAuthResponse,
            kind: MethodKind.Unary
        },
        setSessionTitle: {
            name: "SetSessionTitle",
            I: SetAgentHostSessionTitleRequest,
            O: SetAgentHostSessionTitleResponse,
            kind: MethodKind.Unary
        },
        openAgentHostSurfaceChannel: {
            name: "OpenAgentHostSurfaceChannel",
            I: OpenAgentHostSurfaceChannelRequest,
            O: AgentHostSurfaceChannelEvent,
            kind: MethodKind.ServerStreaming
        },
        respondAgentHostSurfaceCallback: {
            name: "RespondAgentHostSurfaceCallback",
            I: RespondAgentHostSurfaceCallbackRequest,
            O: RespondAgentHostSurfaceCallbackResponse,
            kind: MethodKind.Unary
        },
        pushAgentHostSessionPermissions: {
            name: "PushAgentHostSessionPermissions",
            I: PushAgentHostSessionPermissionsRequest,
            O: PushAgentHostSessionPermissionsResponse,
            kind: MethodKind.Unary
        }
    }
};

}
