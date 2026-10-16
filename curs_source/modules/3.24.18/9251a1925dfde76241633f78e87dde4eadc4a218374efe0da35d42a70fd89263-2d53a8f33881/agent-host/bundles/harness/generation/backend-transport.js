import { init_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/inference_pb.js";
var RUN_INFERENCE;
export { RUN_INFERENCE };
var __wakaru_init_backend_transport_initialized = false;
export function init_backend_transport() {
if (__wakaru_init_backend_transport_initialized) return;
__wakaru_init_backend_transport_initialized = true;
"use strict";
init_inference_pb();
RUN_INFERENCE = {
    service: "aiserver.v1.InferenceService",
    method: "RunInference"
};

}
