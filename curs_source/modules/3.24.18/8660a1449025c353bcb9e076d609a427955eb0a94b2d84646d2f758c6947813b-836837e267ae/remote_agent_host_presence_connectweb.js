import { hr } from "./protobuf.js";
import { $jg, Gjg, Hjg, Jjg, Kjg, Qjg, S$g, Vjg, Wjg, Xjg, Yjg, Zjg, _$g, a$g, b$g, d$g, e$g, f$g, g$g, h$g, jjg, l$g, m$g, o$g, p$g, qjg, r$g, s$g, t$g, u$g, v$g, y$g, zjg } from "./remote_agent_host_presence_pb.js";
import { Pps, Q2n } from "./remote_agent_host_tunnel_pb.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var BRi;
export { BRi };
var __wakaru_k$g_initialized = false;
export function k$g() {
if (__wakaru_k$g_initialized) return;
__wakaru_k$g_initialized = true;
"use strict";
E(), Pps(), hr(), S$g(), BRi = {
    typeName: "aiserver.v1.RemoteAgentHostPresenceService",
    methods: {
        connectTarget: {
            name: "ConnectTarget",
            I: Q2n,
            O: Q2n,
            kind: ke.BiDiStreaming
        },
        listSharedTargets: {
            name: "ListSharedTargets",
            I: Kjg,
            O: Yjg,
            kind: ke.Unary
        },
        revokeSharedTarget: {
            name: "RevokeSharedTarget",
            I: Xjg,
            O: Zjg,
            kind: ke.Unary
        },
        getSharedTargetRegistrationState: {
            name: "GetSharedTargetRegistrationState",
            I: Qjg,
            O: Jjg,
            kind: ke.Unary
        },
        enableSharedTarget: {
            name: "EnableSharedTarget",
            I: e$g,
            O: t$g,
            kind: ke.Unary
        },
        callAgentHost: {
            name: "CallAgentHost",
            I: Gjg,
            O: qjg,
            kind: ke.Unary
        },
        streamAgentHost: {
            name: "StreamAgentHost",
            I: zjg,
            O: Vjg,
            kind: ke.ServerStreaming
        },
        trustController: {
            name: "TrustController",
            I: r$g,
            O: s$g,
            kind: ke.Unary
        },
        getControllerTrustStatus: {
            name: "GetControllerTrustStatus",
            I: o$g,
            O: a$g,
            kind: ke.Unary
        },
        listPendingControllerApprovals: {
            name: "ListPendingControllerApprovals",
            I: l$g,
            O: u$g,
            kind: ke.Unary
        },
        approveController: {
            name: "ApproveController",
            I: d$g,
            O: h$g,
            kind: ke.Unary
        },
        rejectController: {
            name: "RejectController",
            I: p$g,
            O: m$g,
            kind: ke.Unary
        },
        listControllers: {
            name: "ListControllers",
            I: g$g,
            O: f$g,
            kind: ke.Unary
        },
        revokeController: {
            name: "RevokeController",
            I: v$g,
            O: _$g,
            kind: ke.Unary
        },
        unpairController: {
            name: "UnpairController",
            I: b$g,
            O: y$g,
            kind: ke.Unary
        },
        getRemoteControlV2UserSettings: {
            name: "GetRemoteControlV2UserSettings",
            I: jjg,
            O: $jg,
            kind: ke.Unary
        },
        updateRemoteControlV2UserSettings: {
            name: "UpdateRemoteControlV2UserSettings",
            I: Hjg,
            O: Wjg,
            kind: ke.Unary
        }
    }
};

}
