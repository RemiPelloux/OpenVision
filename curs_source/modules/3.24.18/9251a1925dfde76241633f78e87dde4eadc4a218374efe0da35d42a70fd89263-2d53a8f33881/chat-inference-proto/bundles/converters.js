import { init_cursorModelProviderOptions } from "./cursorModelProviderOptions.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { InferenceAssistantPartKind, init_inference_pb } from "../../proto/dist/generated/aiserver/v1/inference_pb.js";
var UNPAIRED_SURROGATE_ESCAPE, ASSISTANT_PART_KIND_RANK, DEFAULT_IMAGE_MIME_TYPE2;
export { ASSISTANT_PART_KIND_RANK, DEFAULT_IMAGE_MIME_TYPE2, UNPAIRED_SURROGATE_ESCAPE };
var __wakaru_init_converters_initialized = false;
export function init_converters() {
if (__wakaru_init_converters_initialized) return;
__wakaru_init_converters_initialized = true;
"use strict";
init_dist26();
init_inference_pb();
init_esm2();
init_cursorModelProviderOptions();
UNPAIRED_SURROGATE_ESCAPE = /\\ud[89a-f]/;
ASSISTANT_PART_KIND_RANK = new Map([
    [
        InferenceAssistantPartKind.REASONING,
        0
    ],
    [
        InferenceAssistantPartKind.TEXT,
        1
    ],
    [
        InferenceAssistantPartKind.TOOL_CALL,
        2
    ]
]);
DEFAULT_IMAGE_MIME_TYPE2 = "image/png";

}
