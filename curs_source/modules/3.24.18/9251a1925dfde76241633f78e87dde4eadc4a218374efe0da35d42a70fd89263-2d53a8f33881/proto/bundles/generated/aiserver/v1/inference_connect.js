import { Empty } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/empty_pb.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { BidiPollRequest, BidiPollResponse, BidiRequestId, init_bidi_pb } from "./bidi_pb.js";
import { AgentFollowupCategorizationRequest, AgentPostTurnLabelingRequest, InferenceStreamRequest, InferenceStreamResponse, RunInferenceClientMessage, RunInferenceServerMessage, init_inference_pb } from "./inference_pb.js";
var InferenceService;
export { InferenceService };
var __wakaru_init_inference_connect_initialized = false;
export function init_inference_connect() {
if (__wakaru_init_inference_connect_initialized) return;
__wakaru_init_inference_connect_initialized = true;
"use strict";
init_inference_pb();
init_esm2();
init_bidi_pb();
InferenceService = {
    typeName: "aiserver.v1.InferenceService",
    methods: {
        stream: {
            name: "Stream",
            I: InferenceStreamRequest,
            O: InferenceStreamResponse,
            kind: MethodKind.ServerStreaming
        },
        recordAgentFollowupClassification: {
            name: "RecordAgentFollowupClassification",
            I: AgentFollowupCategorizationRequest,
            O: Empty,
            kind: MethodKind.Unary
        },
        recordAgentPostTurnLabeling: {
            name: "RecordAgentPostTurnLabeling",
            I: AgentPostTurnLabelingRequest,
            O: Empty,
            kind: MethodKind.Unary
        },
        runInference: {
            name: "RunInference",
            I: RunInferenceClientMessage,
            O: RunInferenceServerMessage,
            kind: MethodKind.BiDiStreaming
        },
        runInferenceSSE: {
            name: "RunInferenceSSE",
            I: BidiRequestId,
            O: RunInferenceServerMessage,
            kind: MethodKind.ServerStreaming
        },
        runInferencePoll: {
            name: "RunInferencePoll",
            I: BidiPollRequest,
            O: BidiPollResponse,
            kind: MethodKind.ServerStreaming
        }
    }
};

}
