import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_hooks_pb } from "../../../../../proto/dist/generated/agent/v1/hooks_pb.js";
import { init_requested_model_redacted } from "./requested_model_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_hooks_redacted_initialized = false;
export function init_hooks_redacted() {
if (__wakaru_init_hooks_redacted_initialized) return;
__wakaru_init_hooks_redacted_initialized = true;
"use strict";
init_dist27();
init_esm2();
init_hooks_pb();
init_requested_model_redacted();

}
