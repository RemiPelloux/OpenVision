import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { init_managed_local_model } from "./managed-local-model.js";
import { init_private_inference_backend } from "../../network/private-inference-backend.js";
import { init_esm2 } from "../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/inference_pb.js";
import { init_private_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/private_inference_pb.js";
var __wakaru_init_private_inference_usage_admission_initialized = false;
export function init_private_inference_usage_admission() {
if (__wakaru_init_private_inference_usage_admission_initialized) return;
__wakaru_init_private_inference_usage_admission_initialized = true;
"use strict";
init_dist9();
init_inference_pb();
init_private_inference_pb();
init_esm2();
init_private_inference_backend();
init_managed_local_model();

}
