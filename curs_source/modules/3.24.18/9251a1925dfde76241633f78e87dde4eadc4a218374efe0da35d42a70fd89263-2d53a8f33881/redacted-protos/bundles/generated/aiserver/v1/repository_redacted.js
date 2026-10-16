import { init_repository_pb } from "../../../../../proto/dist/generated/aiserver/v1/repository_pb.js";
import { init_symbolic_context_redacted } from "./symbolic_context_redacted.js";
import { init_utils_redacted2 } from "./utils_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_repository_redacted_initialized = false;
export function init_repository_redacted() {
if (__wakaru_init_repository_redacted_initialized) return;
__wakaru_init_repository_redacted_initialized = true;
"use strict";
init_dist27();
init_repository_pb();
init_utils_redacted2();
init_symbolic_context_redacted();

}
