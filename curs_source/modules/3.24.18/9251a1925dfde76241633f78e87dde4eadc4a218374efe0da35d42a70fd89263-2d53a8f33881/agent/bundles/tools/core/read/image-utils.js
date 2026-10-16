import { __toESM } from "../../../../../agent-host/dist/storage/sqlite-store.js";
import { require_image_type } from "../../../../../node_modules/.pnpm/image-type@4.1.0/node_modules/image-type/index.js";
import { require_mime_types } from "../../../../../node_modules/.pnpm/mime-types@3.0.1/node_modules/mime-types/index.js";
var import_image_type, import_mime_types;
export { import_image_type, import_mime_types };
var __wakaru_init_image_utils_initialized = false;
export function init_image_utils() {
if (__wakaru_init_image_utils_initialized) return;
__wakaru_init_image_utils_initialized = true;
"use strict";
import_image_type = __toESM(require_image_type(), 1);
import_mime_types = __toESM(require_mime_types(), 1);

}
