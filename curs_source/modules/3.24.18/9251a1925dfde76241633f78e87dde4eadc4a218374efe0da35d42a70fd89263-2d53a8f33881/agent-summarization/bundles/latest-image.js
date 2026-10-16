var DEFAULT_IMAGE_MIME_TYPE, DATA_OR_REMOTE_URL_PREFIX;
export { DATA_OR_REMOTE_URL_PREFIX, DEFAULT_IMAGE_MIME_TYPE };
var __wakaru_init_latest_image_initialized = false;
export function init_latest_image() {
if (__wakaru_init_latest_image_initialized) return;
__wakaru_init_latest_image_initialized = true;
"use strict";
DEFAULT_IMAGE_MIME_TYPE = "image/png";
DATA_OR_REMOTE_URL_PREFIX = /^(data:|https?:|blob:)/i;

}
