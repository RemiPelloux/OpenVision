import { __toESM } from "../../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { require_exif_parser } from "../../../../../../../exif-parser@0.1.12/node_modules/exif-parser/index.js";
var import_exif_parser;
export { import_exif_parser };
var __wakaru_init_image_bitmap_initialized = false;
export function init_image_bitmap() {
if (__wakaru_init_image_bitmap_initialized) return;
__wakaru_init_image_bitmap_initialized = true;
import_exif_parser = __toESM(require_exif_parser(), 1);

}
