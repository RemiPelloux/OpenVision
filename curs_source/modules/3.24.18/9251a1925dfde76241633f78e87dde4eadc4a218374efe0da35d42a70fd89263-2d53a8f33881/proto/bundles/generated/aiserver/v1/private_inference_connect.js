import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { AdmitRunRequest, AdmitRunResponse, ReportPrivateInferenceUsageRequest, ReportPrivateInferenceUsageResponse, init_private_inference_pb } from "./private_inference_pb.js";
var PrivateInferenceService;
export { PrivateInferenceService };
var __wakaru_init_private_inference_connect_initialized = false;
export function init_private_inference_connect() {
if (__wakaru_init_private_inference_connect_initialized) return;
__wakaru_init_private_inference_connect_initialized = true;
"use strict";
init_private_inference_pb();
init_esm2();
PrivateInferenceService = {
    typeName: "aiserver.v1.PrivateInferenceService",
    methods: {
        admitRun: {
            name: "AdmitRun",
            I: AdmitRunRequest,
            O: AdmitRunResponse,
            kind: MethodKind.Unary
        },
        reportUsage: {
            name: "ReportUsage",
            I: ReportPrivateInferenceUsageRequest,
            O: ReportPrivateInferenceUsageResponse,
            kind: MethodKind.Unary
        }
    }
};

}
