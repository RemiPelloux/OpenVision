import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { ApproveControllerRequest, ApproveControllerResponse, CallAgentHostRequest, CallAgentHostResponse, EnableSharedTargetRequest, EnableSharedTargetResponse, GetControllerTrustStatusRequest, GetControllerTrustStatusResponse, GetRemoteControlV2UserSettingsRequest, GetRemoteControlV2UserSettingsResponse, GetSharedTargetRegistrationStateRequest, GetSharedTargetRegistrationStateResponse, ListControllersRequest, ListControllersResponse, ListPendingControllerApprovalsRequest, ListPendingControllerApprovalsResponse, ListSharedTargetsRequest, ListSharedTargetsResponse, RejectControllerRequest, RejectControllerResponse, RevokeControllerRequest, RevokeControllerResponse, RevokeSharedTargetRequest, RevokeSharedTargetResponse, StreamAgentHostRequest, StreamAgentHostResponse, TrustControllerRequest, TrustControllerResponse, UnpairControllerRequest, UnpairControllerResponse, UpdateRemoteControlV2UserSettingsRequest, UpdateRemoteControlV2UserSettingsResponse, init_remote_agent_host_presence_pb } from "./remote_agent_host_presence_pb.js";
import { RemoteAgentHostFrame, init_remote_agent_host_tunnel_pb } from "./remote_agent_host_tunnel_pb.js";
var RemoteAgentHostPresenceService;
export { RemoteAgentHostPresenceService };
var __wakaru_init_remote_agent_host_presence_connect_initialized = false;
export function init_remote_agent_host_presence_connect() {
if (__wakaru_init_remote_agent_host_presence_connect_initialized) return;
__wakaru_init_remote_agent_host_presence_connect_initialized = true;
"use strict";
init_remote_agent_host_tunnel_pb();
init_esm2();
init_remote_agent_host_presence_pb();
RemoteAgentHostPresenceService = {
    typeName: "aiserver.v1.RemoteAgentHostPresenceService",
    methods: {
        connectTarget: {
            name: "ConnectTarget",
            I: RemoteAgentHostFrame,
            O: RemoteAgentHostFrame,
            kind: MethodKind.BiDiStreaming
        },
        listSharedTargets: {
            name: "ListSharedTargets",
            I: ListSharedTargetsRequest,
            O: ListSharedTargetsResponse,
            kind: MethodKind.Unary
        },
        revokeSharedTarget: {
            name: "RevokeSharedTarget",
            I: RevokeSharedTargetRequest,
            O: RevokeSharedTargetResponse,
            kind: MethodKind.Unary
        },
        getSharedTargetRegistrationState: {
            name: "GetSharedTargetRegistrationState",
            I: GetSharedTargetRegistrationStateRequest,
            O: GetSharedTargetRegistrationStateResponse,
            kind: MethodKind.Unary
        },
        enableSharedTarget: {
            name: "EnableSharedTarget",
            I: EnableSharedTargetRequest,
            O: EnableSharedTargetResponse,
            kind: MethodKind.Unary
        },
        callAgentHost: {
            name: "CallAgentHost",
            I: CallAgentHostRequest,
            O: CallAgentHostResponse,
            kind: MethodKind.Unary
        },
        streamAgentHost: {
            name: "StreamAgentHost",
            I: StreamAgentHostRequest,
            O: StreamAgentHostResponse,
            kind: MethodKind.ServerStreaming
        },
        trustController: {
            name: "TrustController",
            I: TrustControllerRequest,
            O: TrustControllerResponse,
            kind: MethodKind.Unary
        },
        getControllerTrustStatus: {
            name: "GetControllerTrustStatus",
            I: GetControllerTrustStatusRequest,
            O: GetControllerTrustStatusResponse,
            kind: MethodKind.Unary
        },
        listPendingControllerApprovals: {
            name: "ListPendingControllerApprovals",
            I: ListPendingControllerApprovalsRequest,
            O: ListPendingControllerApprovalsResponse,
            kind: MethodKind.Unary
        },
        approveController: {
            name: "ApproveController",
            I: ApproveControllerRequest,
            O: ApproveControllerResponse,
            kind: MethodKind.Unary
        },
        rejectController: {
            name: "RejectController",
            I: RejectControllerRequest,
            O: RejectControllerResponse,
            kind: MethodKind.Unary
        },
        listControllers: {
            name: "ListControllers",
            I: ListControllersRequest,
            O: ListControllersResponse,
            kind: MethodKind.Unary
        },
        revokeController: {
            name: "RevokeController",
            I: RevokeControllerRequest,
            O: RevokeControllerResponse,
            kind: MethodKind.Unary
        },
        unpairController: {
            name: "UnpairController",
            I: UnpairControllerRequest,
            O: UnpairControllerResponse,
            kind: MethodKind.Unary
        },
        getRemoteControlV2UserSettings: {
            name: "GetRemoteControlV2UserSettings",
            I: GetRemoteControlV2UserSettingsRequest,
            O: GetRemoteControlV2UserSettingsResponse,
            kind: MethodKind.Unary
        },
        updateRemoteControlV2UserSettings: {
            name: "UpdateRemoteControlV2UserSettings",
            I: UpdateRemoteControlV2UserSettingsRequest,
            O: UpdateRemoteControlV2UserSettingsResponse,
            kind: MethodKind.Unary
        }
    }
};

}
