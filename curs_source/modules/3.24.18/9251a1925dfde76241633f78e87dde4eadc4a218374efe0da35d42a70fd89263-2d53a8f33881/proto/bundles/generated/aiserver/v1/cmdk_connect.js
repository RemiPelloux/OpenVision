import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { GetRelevantChunksRequest, RerankCmdKContextRequest, RerankCmdKContextResponse, RerankTerminalCmdKContextRequest, RerankTerminalCmdKContextResponse, StreamCmdKRequest, StreamCmdKResponseContextWrapped, StreamGetRelevantChunksResponseContextWrapped, StreamHypermodeRequest, StreamTerminalCmdKRequest, StreamTerminalCmdKResponseContextWrapped, init_cmdk_pb } from "./cmdk_pb.js";
var CmdKService;
export { CmdKService };
var __wakaru_init_cmdk_connect_initialized = false;
export function init_cmdk_connect() {
if (__wakaru_init_cmdk_connect_initialized) return;
__wakaru_init_cmdk_connect_initialized = true;
"use strict";
init_cmdk_pb();
init_esm2();
CmdKService = {
    typeName: "aiserver.v1.CmdKService",
    methods: {
        streamCmdK: {
            name: "StreamCmdK",
            I: StreamCmdKRequest,
            O: StreamCmdKResponseContextWrapped,
            kind: MethodKind.ServerStreaming
        },
        streamHypermode: {
            name: "StreamHypermode",
            I: StreamHypermodeRequest,
            O: StreamCmdKResponseContextWrapped,
            kind: MethodKind.ServerStreaming
        },
        rerankCmdKContext: {
            name: "RerankCmdKContext",
            I: RerankCmdKContextRequest,
            O: RerankCmdKContextResponse,
            kind: MethodKind.Unary
        },
        streamTerminalCmdK: {
            name: "StreamTerminalCmdK",
            I: StreamTerminalCmdKRequest,
            O: StreamTerminalCmdKResponseContextWrapped,
            kind: MethodKind.ServerStreaming
        },
        rerankTerminalCmdKContext: {
            name: "RerankTerminalCmdKContext",
            I: RerankTerminalCmdKContextRequest,
            O: RerankTerminalCmdKContextResponse,
            kind: MethodKind.Unary
        },
        getRelevantChunks: {
            name: "GetRelevantChunks",
            I: GetRelevantChunksRequest,
            O: StreamGetRelevantChunksResponseContextWrapped,
            kind: MethodKind.ServerStreaming
        }
    }
};

}
