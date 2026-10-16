import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { BidiPollRequest, BidiPollResponse, BidiRequestId, init_bidi_pb } from "./bidi_pb.js";
import { HealthEmptyRequest, HealthRequest, HealthResponse, init_health_pb } from "./health_pb.js";
var HealthService;
export { HealthService };
var __wakaru_init_health_connect_initialized = false;
export function init_health_connect() {
if (__wakaru_init_health_connect_initialized) return;
__wakaru_init_health_connect_initialized = true;
"use strict";
init_health_pb();
init_esm2();
init_bidi_pb();
HealthService = {
    typeName: "aiserver.v1.HealthService",
    methods: {
        ping: {
            name: "Ping",
            I: HealthRequest,
            O: HealthResponse,
            kind: MethodKind.Unary
        },
        unary: {
            name: "Unary",
            I: HealthEmptyRequest,
            O: HealthResponse,
            kind: MethodKind.Unary
        },
        stream: {
            name: "Stream",
            I: HealthRequest,
            O: HealthResponse,
            kind: MethodKind.ServerStreaming
        },
        streamSSE: {
            name: "StreamSSE",
            I: HealthRequest,
            O: HealthResponse,
            kind: MethodKind.ServerStreaming
        },
        streamBidi: {
            name: "StreamBidi",
            I: HealthRequest,
            O: HealthResponse,
            kind: MethodKind.BiDiStreaming
        },
        streamBidiSSE: {
            name: "StreamBidiSSE",
            I: BidiRequestId,
            O: HealthResponse,
            kind: MethodKind.ServerStreaming
        },
        streamBidiPoll: {
            name: "StreamBidiPoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        }
    }
};

}
