import { init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
var DEFAULT_INLINE_VIDEO_MAX_BYTES, DEFAULT_SIGNED_URL_VIDEO_MAX_BYTES, GEMINI_VIDEO_SUBAGENT_MAX_BYTES;
export { DEFAULT_INLINE_VIDEO_MAX_BYTES, DEFAULT_SIGNED_URL_VIDEO_MAX_BYTES, GEMINI_VIDEO_SUBAGENT_MAX_BYTES };
var __wakaru_init_attached_media_initialized = false;
export function init_attached_media() {
if (__wakaru_init_attached_media_initialized) return;
__wakaru_init_attached_media_initialized = true;
"use strict";
init_privacy_mode_pb();
DEFAULT_INLINE_VIDEO_MAX_BYTES = 15 * 1024 * 1024;
DEFAULT_SIGNED_URL_VIDEO_MAX_BYTES = 15 * 1024 * 1024;
GEMINI_VIDEO_SUBAGENT_MAX_BYTES = 1024 * 1024 * 1024;

}
