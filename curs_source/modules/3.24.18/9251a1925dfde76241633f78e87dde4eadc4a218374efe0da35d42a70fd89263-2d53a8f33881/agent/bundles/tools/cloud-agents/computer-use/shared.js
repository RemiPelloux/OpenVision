import { init_common9 } from "../../common.js";
import { init_core5 } from "../../core.js";
import { init_inline_image } from "../../core/inline-image.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_computer_use_tool_pb } from "../../../../../proto/dist/generated/agent/v1/computer_use_tool_pb.js";
import { init_image_resize } from "../../../../../utils/dist/image-resize.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var DEFAULT_SCREENSHOT_MIME_TYPE, COMPUTER_USE_UNSUPPORTED_ON_VM_MESSAGE;
export { COMPUTER_USE_UNSUPPORTED_ON_VM_MESSAGE, DEFAULT_SCREENSHOT_MIME_TYPE };
var __wakaru_init_shared_initialized = false;
export function init_shared() {
if (__wakaru_init_shared_initialized) return;
__wakaru_init_shared_initialized = true;
"use strict";
init_dist26();
init_agent_pb();
init_computer_use_tool_pb();
init_dist3();
init_image_resize();
init_common9();
init_inline_image();
init_core5();
DEFAULT_SCREENSHOT_MIME_TYPE = "image/webp";
COMPUTER_USE_UNSUPPORTED_ON_VM_MESSAGE = "Computer use is not supported on this Cloud Agent VM because the computer-use executor is not enabled. Do NOT retry this tool call. If the user was directly requesting computer use, end your response immediately with an informative error description. Otherwise, continue testing via automated testing rather than manual testing.";

}
