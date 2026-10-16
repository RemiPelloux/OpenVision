import { __toESM } from "../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { init_composite } from "./utils/composite.js";
import { init_constants } from "./utils/constants.js";
import { init_image_bitmap } from "./utils/image-bitmap.js";
import { init_esm11 } from "../../../../../../@jimp+file-ops@1.6.0/node_modules/@jimp/file-ops/dist/esm/index.js";
import { init_esm9 } from "../../../../../../@jimp+types@1.6.0/node_modules/@jimp/types/dist/esm/index.js";
import { init_esm10 } from "../../../../../../@jimp+utils@1.6.0/node_modules/@jimp/utils/dist/esm/index.js";
import { require_await_to_js_umd } from "../../../../../../await-to-js@3.0.0/node_modules/await-to-js/dist/await-to-js.umd.js";
import { require_core5 } from "../../../../../../file-type@16.5.4/node_modules/file-type/core.js";
import { require_lite } from "../../../../../../mime@3.0.0/node_modules/mime/lite.js";
var import_core8, import_await_to_js, import_lite, emptyBitmap;
export { emptyBitmap, import_await_to_js, import_core8, import_lite };
var __wakaru_init_esm12_initialized = false;
export function init_esm12() {
if (__wakaru_init_esm12_initialized) return;
__wakaru_init_esm12_initialized = true;
init_esm9();
init_esm10();
import_core8 = __toESM(require_core5(), 1);
import_await_to_js = __toESM(require_await_to_js_umd(), 1);
init_esm11();
import_lite = __toESM(require_lite(), 1);
init_composite();
init_image_bitmap();
init_image_bitmap();
init_composite();
init_constants();
emptyBitmap = {
    data: Buffer.alloc(0),
    width: 0,
    height: 0
};

}
